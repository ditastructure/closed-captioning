const express = require('express');
const redis = require('redis');
const fetch = require('node-fetch');

const client = redis.createClient();
 
client.on('error', err => {
    console.log(`Redis error ${err}`);
});

const app = express();

app.use(express.static('public'));
app.use('/assets', express.static('assets'));
app.use(express.json());

app.get('/api/captions/:username', (req, res) => {
  client.get(`captions:${req.params.username}`, (err, reply) => {
    res.json({ username: req.params.username, caption: reply || '' });
  });
});

app.post('/api/captions', (req, res) => {
  const token = (req.headers.authorization || '').split(' ')[1];
  
  if (!token) {
    return res.sendStatus(401);
  }
  
  client.get(`auth:${token}`, (err, reply) => {
    if (!reply) {
      fetch('https://id.twitch.tv/oauth2/validate', { headers: { 'Authorization': `OAuth ${token}` } })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(`Bad response ${res.statusText}`);
          }
        })
        .then(validate => {
          client.set(`auth:${token}`, JSON.stringify(validate), 'EX', 3600);
          handleCaption(validate, req, res);
        })
        .catch(error => {
          console.log(error);
          res.sendStatus(500);
        });
    } else {
      handleCaption(JSON.parse(reply), req, res);
    }
  });
});

function handleCaption(validate, req, res) {
  client.set(`captions:${validate.login}`, req.body.caption || '', 'EX', 3);
  res.json({ username: validate.login, caption: req.body.caption || '' })
}

app.listen(process.env.PORT || 3000, () => console.log(
  `Your app is listening on port ${process.env.PORT || 3000}`));
