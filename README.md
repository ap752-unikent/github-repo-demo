# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Technical choices ###

CRA - I used CRA because, as per the instructions, I only had 3 hours to complete this therefore didn't want to waste anytime setting up a custom configuration. 

Chakra UI - Modern, easy to setup, looks better than material ui (IMO) and you can modify the snippets if needed giving you much more control over the UI.

Fetch - The requests sent to the api were simple GET requests therefore I didn't see any reason to install a dedicated http requests library.

Styling - I prefer styled components but given that time was limited I felt inline styles were a better trade off. Chakra UI provides some good styling defaults out the box anyway so modifications were small.

React Query - I found react query particularly useful for this project where the api request could be updated at multiple points and I wanted one query to react to those state changes and provide a loading wrapper, cached updates as well. 

Hooks - I partitioned the react query hooks into their own hooks. This was mainly meant for testing as this way the hook can be mocked which is easier than mocking the react query hook in my experience.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the dependencies, this is a pre requisite for running `npm start` and `npm run build`.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Unfortunately the component library I used (chakra-ui) was incompatible with the test setup provided by create-react-app. Chakra UI requires moduleResolution to be set to `bundler` whereas ts-jest requires it to be anything but when typescript is on v4. The solution is to upgrade typescript to v5 but CRA doesn't currently support this (I didn't realise it wasn't using the latest version when I generated the project). So I would've had to eject the app and configure babel/jest etc. myself which I didn't have time to do within the confines of this project.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Future Roadmap ###

- Eject from CRA, update TS and provide custom configuration so tests can be run. 
- Color indicator for language used in table. Allows user to glean language used without looking at the whole word.
- Search for repo name within an organisations repos.
