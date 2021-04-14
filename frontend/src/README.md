<h1 align="center">
  <img src=".github/logo.png" alt="Aircnc" width="250px">
</h1>

<h4 align="center">
  ☕ Code and coffee
</h4>

<p align="center">
  <a href="https://www.linkedin.com/in/eliasgcf/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Elias%20Gabriel-%23F05A5B"></a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/EliasGcf/aircnc?color=%23F05A5B">

  <a href="https://github.com/EliasGcf/aircnc/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/EliasGcf/aircnc?color=%23F05A5B"></a>

  <img alt="GitHub" src="https://img.shields.io/github/license/EliasGcf/aircnc?color=%23F05A5B">
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<br />

<p align="center">
  <img alt="Frontend" src=".github/aircnc.png" width="100%">
</p>

## 💻 About the project

<!-- O Aircnc é um projeto que visa conectar empresas que querem abrir spots e desenvolvedores que procuram um lugar para trocar ideias com devs, conhecer a empresa e trabalhar lá por um período. -->

Aircnc is a project that aims to connect companies that want to open spots and developers looking for a place to exchange ideas with devs, get to know the company and work there for a period.
The original project is made in javascript, but I decided try to do it in typescript, I needed to change many things in the original project, and I learnt many different things.

## 🚀 Technologies

Technologies that I used to develop this application

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)

## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [PostGree](https://www.postgresql.org/)
- [Yarn](https://yarnpkg.com/)

**Clone the project and access the folder**

```bash
$ git clone https://github.com/EliasGcf/aircnc.git && cd aircnc
```

**Install dependencies**

```bash
$ yarn
```

**Follow the steps below**

### Backend

```bash
# Edit 'packages/server/src/server.js' and change URL_CONNECTION_MONGO
# to your MongoDB URL

# To finish, run the api service
$ yarn server dev

# Well done, project is started!
```

### Web

_Obs.: Before to continue, be sure to have the API running_

```bash
# Be sure the file 'packages/web/src/services/api.js'
# have the IP to your API

# Start the client
$ yarn web start
```

### Mobile

_Obs.: Before to continue, be sure to have the API running_

```bash
# Be sure the file 'packages/mobile/src/services/api.js'
# have the IP to your API

# Start the expo service and scan the QR code with Expo Client
$ yarn mobile start
```

## 🔖 Layout

You can download the project layout [here](https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/semana-omnistack/aircnc.sketch).

To open `.sketch` extension in any operating system, you can use [Figma](https://www.figma.com/).

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork EliasGcf/aircnc
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd aircnc

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜&nbsp; by Elias Gabriel 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/eliasgcf/)
