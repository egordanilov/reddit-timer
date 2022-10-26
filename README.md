# Reddit Timer 👋
Want to know when is the best time to post on your favorite subreddit?
Reddit Timer lets you pick the best day of the week and time of the day to post to get the most upvotes by analyzing top 500 posts of the year.
An interactive HeatMap shows amount of posts for selected day of the week and hour, browse through it, click on desired time to view the posts for that time.

![Reddit Timer Screenshot](https://user-images.githubusercontent.com/31379969/197903965-d267849a-68c2-4f59-931d-c5e5c655d93b.png)

## Skils learned while I was developing this project\
• Working on existing codebase and integrating new features\
• Implementing pixel-perfect designs\
• Using project management tools\
• Writing automated tests
• Using Mock Service Worker to respond API calls within tests\
• Continuous integration\
• Using git pull request flow with code reviews\

## How App Works
[Search page](https://github.com/egordanilov/reddit-timer/blob/main/src/pages/Search.js) is taking a URL parameter and fetches top posts of the year for specified subreddit.\
Fetching data is happening inside of [useFetchPost.js](https://github.com/egordanilov/reddit-timer/blob/main/src/hooks/useFetchPosts.js)\
Result of fetching data is being passed down as props to [HeatMap.js](https://github.com/egordanilov/reddit-timer/blob/main/src/components/HeatMap.js)\
Table of posts by day of week and hour is shown, clicking on different time shows top posts for a specific day and time inside of [PostsTable.js](https://github.com/egordanilov/reddit-timer/blob/main/src/components/PostsTable.js)

## Tests
[useFetchPosts test](https://github.com/egordanilov/reddit-timer/blob/main/src/__tests__/useFetchPosts.test.js)\
We are using a Mock Service Worker and renderHook to test the custom hook.\
[Search Page test](https://github.com/egordanilov/reddit-timer/blob/main/src/__tests__/SearchPage.test.js)\
[Home Page test](https://github.com/egordanilov/reddit-timer/blob/main/src/__tests__/HomePage.test.js)\
[App.js test](https://github.com/egordanilov/reddit-timer/blob/main/src/__tests__/App.test.js)

## Tools used inside this project


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
React Testing Library\
React Router Dom\
Styled Components\
MockServiceWorker\
ESLint

## Available Scripts
Before starting a project, don't forget to install dependencies
### `yarn install`

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
