![Logo](https://cdn.glitch.com/08650d2e-f616-4fad-88a6-3706fa068ded%2Fcc-logo.jpg?v=1566854489647)

# 🎬 Closed Captioning

![Screenshot](https://cdn.glitch.com/08650d2e-f616-4fad-88a6-3706fa068ded%2Fscreenshot-1.png?v=1566858279729)

## ( ~ ‾▿‾) ~ [Demo](https://closed-captioning.glitch.me/)

Use your browser's speech recognition to perform closed captioning for your Twitch channel 🤗.

## 📝 Table of contents

* [About this project](#-about-this-project)
  * [Built with](#-built-with)
* [Getting started](#-getting-started)
  * [Prerequisites](#-prerequisites)
* [Usage](#-usage)
* [Contributing](#-contributing)
* [License](#-license)
* [Contact](#-contact)


## 💬 About this project

I created this project because I wanted to learn 🧠 how to use the [Twitch API](https://dev.twitch.tv/) and the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) to make it easier to add closed captioning to your Twitch channel. There are some other apps and extensions that do closed captioning too, so [check them out](https://stream-cc.gooseman.codes/) 📢!

Unfortunately, not all browsers support the Web Speech API just yet 😔. Check out [this browser compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition#Browser_compatibility) to see which browsers work. If you're still unsure, the Chrome browser is confirmed to work with this site.

### 🔨 Built with

This project was built using these wonderful libraries 📚 and tools 🔧.

* [Glitch](https://glitch.com/)
* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Redis](https://redis.io/)


## 🚀 Getting started

You can clone this repository 📦 locally with the following command.

```
git clone https://github.com/ditastructure/closed-captioning.git
```

✨ Or you can get started quickly by remixing [this Glitch project](https://glitch.com/~closed-captioning)!

### ⚙ Prerequisites

This project requires [Redis](https://redis.io/) to run.

```
cd .data
wget http://download.redis.io/redis-stable.tar.gz
tar xvzf redis-stable.tar.gz
cd redis-stable
make
```


## 💪 Usage

![image](https://user-images.githubusercontent.com/54124815/63644707-b4b9d000-c6b4-11e9-9b1e-d9c3923bd4ab.png)

1. Go to the [demo](https://closed-captioning.glitch.me/) and sign in with your Twitch account.
2. Click the start button to start the speech recognition.
3. Click on the viewer button to open the viewer for your captions.
4. Set up a browser source in OBS.

🚧 Twitch extension coming soon!

༼ つ ◕_◕ ༽つ


## 🙌 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**! 😍

1. Fork this project
2. Create your branch (`git checkout -b my-amazing-feature`)
3. Commit your changes (`git commit -m 'Added an amazing feature`)
4. Push your changes up (`git push origin my-amazing-feature`)
5. Open a pull request

Have a bug 🐛 to report or a new feature 🦄 to suggest? Create an [issue](https://github.com/ditastructure/closed-captioning/issues) and let's talk about it.

## 🧾 License

Distributed under the MIT License. See [LICENSE](https://github.com/ditastructure/closed-captioning/blob/master/LICENSE) for more information.


## 👋 Contact

Hi, my name is Dita Structure! I like to do drag 💄, play games 🎮, and teach people to code 💻 - [@ditastructure](https://twitter.com/ditastructure)
