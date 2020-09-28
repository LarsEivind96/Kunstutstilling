# Documentation

Below is a description of how the website is set up, its key features, and how we have complied to the technological requirements for this project.

## Responsive design

To ensure a responsive user interface we use viewport alongside media queries to dynamically scale and position elements on the screen. The navigation bar switches between showing the navigation links (Home, Gallery, Favorites) and displaying a side drawer which can be toggled to display the same links. The SVG element and the text on the home screen is displayed horizontally next to each other on a big screen, and underneath one another on a mobile screen. In addition, the buttons to change theme and the sound control panel is either displayed at the bottom of the page (on a big screen), or in the side drawer (on a small screen).

Font sizes are either set to a size which fits all screen sizes, dynamically adjusted using viewport, or set to fixed pixel sizes depending on the screen size using media queries.

For the Gallery and Favorite screens, the SVGs are either displayed in a 3x3, 2x4 or 1x8 grid depending on the size of the screen.

## Layout

We have used a combination of CSS grid and a flexbox layout through the website. The navigation bar and the buttons to show the next/previous SVG and save an SVG as favorite is positioned using a flexbox layout. This section has a one-dimensional layout and a flexbox layout is perfect to position elements on one dimension. The series of SVGs displayed in the “Gallery” and “Favorites” pages are controlled using CSS-grid – a natural choice as the SVGs are displayed in a two-dimensional grid.

## SVG

All figures are created using SVG. The continuous animation is either controlled through the SVG animation or animateTransform elements, or by CSS keyframes.

## HTML Web storage

We have implemented both local storage and sessions storage in our project.

Local storage is used for storing the user’s favorite SVGs. When the user presses the “Save as favorite” button on a specific SVG, a "favorite" key pointing to the index of the current SVG is stored in local storage. When a user enters the website (Home), a check is performed to see whether the user have one or more favorite SVGs stored in local storage. If so, a random favorite is displayed, otherwise any random SVG is shown.

Session storage is used for saving the current theme displayed on the page. A theme is an object containing parameters describing what colors to use on the page. The object is stored in session storage as a JSON string and is parsed back to the original object when fetched. We were required to store the theme in session storage to maintain the same theme when routing between different components.

## AJAX

We are using the built-in fetch()-call from the Javascript API to fetch poems from https://poetrydb.org/. Every time a user switches to a different SVG on the Home screen, a random poem with 10 lines is fetched asynchronously.

Audio is fetched using the built-in HTML audio tag pointing to mp3 files in the project.

## Testing

For testing we are using JEST along with the React Testing Library. A unit test is written for the FavButton-class (“Save as favorite” button), which ensures that the button is rendered correctly to the screen. Additionally, two snapshot tests are written for that same class, which ensures that the component is constructed with the appropriate parameters.

## Cross-browser testing

The user interface is tested on a mobile device with both horizontal and vertical orientation, as well as on a bigger computer screen. We have performed cross-browser testing on Chrome, Edge and Firefox and made sure that all functionality is compatible with these browsers.
We noticed that on the iPad, three of the SVGs didn't animate at all, but on all other devices they worked fine.
This was due to how the animations were written in the SVG files, the animation tags were outside of e.g. the circle tag that were supposed to be animated, not inside. The problem was solved by moving the animation tag inside.
When testing the website in different pc-browsers we discovered that some of the animations stopped working only in Firefox. It turned out that Firefox was stricter than Google Chrome and Microsoft Edge when it came to defining paths for the animations. These issues were fixed by changing the paths so that Firefox also recognized them.
The website has been tested on pc screens with both Full HD (1920x1080) and 4K (3840x2160) resolution. In both cases the website behaved as it was supposed to and it looked the same in both resolutions.

## Sources

[W3Schools](https://www.w3schools.com/)\
[React JS Documentation](https://reactjs.org/docs/getting-started.html)\
[Academind](https://academind.com/learn/react/snippets/navbar-side-drawer/) - Responsive navigation bar using React.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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
