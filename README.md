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

### Steps for the User Management Project
1. Create and Run app
> npx create-react-app user-management
> cd user-management
> npm start
2. Install and Add Bootstrap 
> npm i bootsrtap
import "bootstrap/dist/css/bootstrap.min.css"  (index.js)
3. Make folders and files
Create components as folder with two subfolder named as pages and layout
Create files -> Homes.js, About.js, Contact.js (pages)
Create file -> NavBar.js (layout)
4. Create React Components, import and use into App.js
5. Routing 
    a. installation 
    > npm i react-router-dom
    b. import and use into App.js
    import { BrowserRouter as Router, Switch, Route } from "react-router-dom" (App.js)
    import {NavLink} from "react-router-dom"  (NavBar.js)
6. 404 page
    CSS to override header
    .not-found{position: fixed;width: 100vw;height: 100vh;top:0;left: 0; background: #f5deb3;}
    <Route component={PageNotFound} /> (App.js)
7. Create Fake API
    a. installation
    > npm i json-server --save
    b. create db.json file (before starting json server)
    outside src and add users json data (https://jsonplaceholder.typicode.com/users)
    c. Run API 
    > json-server --watch db.json
8. To run both on single command
    a. Install concurrently
    > npm i concurrently --save
    b. Add into package.json (except start bcz already there)
        "start": "react-scripts start",  
        "json-server": "json-server --watch db.json --port 3001",
        "start:dev": "concurrently \"npm start\" \"npm run json-server\"",
9. Run App with API
> npm run start:dev
10. HTTP request to API using axios
> npm i axios
11. Store data using Hooks & axios
    a. useState (to set users)
    c. axios (to get data from API)
    b. useEffect (API call here like componentDidMount)
12. Show data
    a. Create table in Home.js
    b. loop users using map() function
    c. last column for Actions 
    > npm i --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
    use icons for actions (i.e. View, Edit, Delete)
13. Make users folder contaning AddUser.js, UpdateUser.js, ShowUser.js 
    a. Add User
    -> Add user using POST method of axios
    -> Redirect to home page using "useHistory().push()"
    b. Update User ( using dynamic routing - useParams() in UpdateUser.js to get id )
    GET API to prefill data (into useEffect() loadUsers())
    PUT API to update user (on button click of update user)
14. 
    
