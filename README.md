# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

//Readme By Meghraj

step 1 : App.js contains Homepage and home page contains directory (ie list of Menu-itme) and directory contains Menu-item

step 2 : I have used react router do for routing purpose
npm add react-router-dom ---> command to install it

routing can be do using match,location and history property of the props

---

import { ReactComponent as Logo }

This is a new special syntax when importing SVG in React. The ReactComponent import name is special and tells Create React App that you want a React component that renders an SVG, rather than its filename. You can read more about it here, but keep in mind that this is a React library special syntax:
https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files

**\*\*\*\***\*\*\***\*\*\*\***Google Firebase for storage and authentication **\*\***\*\
-its a library

-> npm add firebase

https://firebase.google.com/?gclid=EAIaIQobChMI8LT4yZi39AIVaJBoCR0tgQWJEAAYASAAEgJCCPD_BwE&gclsrc=aw.ds

\***\*\*\*\*\***\*\***\*\*\*\*\*** Redux \***\*\*\*\*\*\*\***\*\*\*\*\***\*\*\*\*\*\*\***

- the main purpose of using redux is to keep all state in one humongous object than keep in each classes and retriving state using props wherever it needed. This simplyfy the code and reduce redundany between parent and and nested child components.

-Redux is insipired from Flux design pattern (Unlike MVC pattern)
-Redux is unidirectional flow

flow of REDUX is below :
ACTION ---> MIDDLEWARE (Piece of Code) ----->ROOT REDUCER(Function which takes action as param) ----->STORE (place where states are store) then reat changes DOMS------->DOM Changes

=> to install --redux-logger is middleware and react-redux is to for binding purpose`
npm add redux redux-logger react-redux

=> after installing add provider(which provider access to redux, reducre and store to application)
