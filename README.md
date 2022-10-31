# Reddit Timer 👋
Want to know when is the best time to post on your favorite subreddit?
Reddit Timer lets you pick the best day of the week and time of the day to post to get the most upvotes by analyzing top 500 posts of the year.
An interactive HeatMap shows amount of posts for selected day of the week and hour, browse through it, click on desired time to view the posts for that time.

![Reddit Timer Screenshot](https://user-images.githubusercontent.com/31379969/197903965-d267849a-68c2-4f59-931d-c5e5c655d93b.png)

## Skills That I Have Learned
&nbsp;&nbsp;• Working on existing codebase and integrating new features\
&nbsp;&nbsp;• Implementing pixel-perfect designs\
&nbsp;&nbsp;• Using project management tools\
&nbsp;&nbsp;• Writing automated tests\
&nbsp;&nbsp;• Using Mock Service Worker to respond API calls within tests\
&nbsp;&nbsp;• Continuous integration and using git pull request flow with code reviews

## Under The Hood
[Search page](https://github.com/egordanilov/reddit-timer/blob/main/src/pages/Search.tsx) is taking a URL parameter and fetches top posts of the year for specified subreddit.\
Fetching data is happening inside of [useFetchPost.js](https://github.com/egordanilov/reddit-timer/blob/main/src/hooks/useFetchPosts.tsx)\
Result of fetching data is being passed down as props to [HeatMap.js](https://github.com/egordanilov/reddit-timer/blob/main/src/components/HeatMap.tsx)\
Table of posts by day of week and hour is shown, clicking on different time shows top posts for a specific day and time inside of [PostsTable.tsx](https://github.com/egordanilov/reddit-timer/blob/main/src/components/PostsTable.tsx)

## Tests
[useFetchPosts test](https://github.com/egordanilov/reddit-timer/blob/main/src/__tests__/useFetchPosts.test.js)\
We are using a Mock Service Worker and renderHook to test the custom hook.\
[Search Page test](https://github.com/egordanilov/reddit-timer/blob/main/src/__tests__/SearchPage.test.js)\
Tests entire Search page broken down to testing input form, heatmap and posts table\
[Home Page test](https://github.com/egordanilov/reddit-timer/blob/main/src/__tests__/HomePage.test.js)\
Tests entire Home page brokend down to testing hero section, about section and navigating to Search page\
[App.js test](https://github.com/egordanilov/reddit-timer/blob/main/src/__tests__/App.test.js)
Includes tests for Header and Footer, including navigation between pages.

## Tools used inside this project
&nbsp;&nbsp;Typescript\
&nbsp;&nbsp;Create React App\
&nbsp;&nbsp;React Testing Library\
&nbsp;&nbsp;React Router Dom\
&nbsp;&nbsp;Styled Components\
&nbsp;&nbsp;MockServiceWorker\
&nbsp;&nbsp;ESLint

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
