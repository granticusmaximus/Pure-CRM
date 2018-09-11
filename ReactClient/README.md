This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [Sending Feedback](#sending-feedback)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- [Purpose of Project](#purpose-of-project)

## Sending Feedback



We are always open to [your feedback](mailto:grant@triumphdesigns.org?subject=[GitHub]%20Source%20Pure%20CRM)

## Folder Structure

After creation, your project should look like this:

```
Pure-CRM/
  README.md
  node_modules/
  license
  package.json
  public/
    manifest.json
    index.html
    favicon.ico
  src/
    api/
      api.js
    assets/
      css/
        App.css
      images/
    components/
      NavBar/
        NavBar.jsx
      UserSideBar/
        SideBar.jsx
      actionHelper.tsx
    layouts/
      Dashboard/
        User/
          Dashboard.jsx
          UserEditProfile.jsx
          UserFriends.jsx
          UsesMessage.jsx
          UserProfile.jsx
      Frontend/
        About/
          AboutPage.jsx
        Contact/
          Contact.jsx
        Home/
          Home.jsx
      Login/
        Login.jsx
      Registration/
        Registration.jsx
    models/
      userState.tsx
    tests/
      App.test.js
    variables/
    views/
    App.js
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Purpose of Project

This project is two fold. The first fold is to build an application for the 100 Days of Code challenge. And below the fold, I wanted to build an application that will be open source project that can be used for a social network application, or a mail server application, or a CRM Tool. I am utilizing all three into this application, and if you want to use all three, by all means use it!

