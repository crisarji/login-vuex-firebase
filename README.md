# About this project

Hello developer pal!, this is a repo specially created for you, who is tempted to create a login using [VueJs](https://vuejs.org/) and [Firebase](https://firebase.google.com/), let me tell you that's a wize choice!.

The main idea in here, is giving you a sort of scaffolding, and spare you some time struggling with the authentication process for new/former users who can access your application.

<br/>
<p align="center">
  <img width="90%" src="./src/assets/visuals/login-vue-firebase.gif" alt="Login Slideshow">
</p>
<br/>

## 🚀&nbsp; Installation and Documentation

1. Take an overview of [login-vuex-firebase](https://github.com/crisarji/login-vuex-firebase), check that it is what you had been looking for!

2. Clone the repo
   ```sh
   git clone git@github.com:crisarji/login-vuex-firebase.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API from *Firebase* in `firebase.js`
   ```TS
   const firebaseConfig = {
      apiKey: 'YOUR_API_KEY',
      authDomain: 'YOUR_AUTH_DOMAIN',
      databaseURL: 'YOUR_DATABASE_URL',
      projectId: 'YOUR_PROJECT_ID',
      storageBucket: 'YOUR_STORAGE_BUCKET',
      messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
      appId: "YOUR_APP_ID",
      measurementId: "YOUR_MEASUREMENT_ID"
    }; 
   ```
   5. Run the app
   ```sh
   npm run serve
   ```

## ✅&nbsp; Requirements

Here you can find the list of `dependencies` used for this project:

[VueJs 2.6.11](https://vuejs.org/) 
    
[Firebase 7.24.0](https://firebase.google.com/)

[Vuex 3.4.0](https://vuex.vuejs.org/)

[Vue Router 3.2.0](https://router.vuejs.org/)

[Tailwind 1.9.6](https://tailwindcss.com/)

## 📘&nbsp; License
This repo is released under the under terms of the [MIT License](LICENSE).