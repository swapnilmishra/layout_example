## How to run

```
npm install or yarn install // installs dependencies
npm run // runs local webpack dev server
```

webpack-dev-middleware is used to run local server with hot reloading of assets.

Running ```npm run build:prod``` outputs prduction ready bundlejs.

## Tech stack

* ReactJS - for view
* postcss - for vendor autprefixing etc
* Bootstrap - for responsive grid
* Fontawesome - for icon fonts
* MomentJS - for date calculations in project data
* Webpack,Babel - for building and compiling JSX,ES6,SASS
* Webpack dev and prod build with different configs

## Project overview

Apart from Bootstrap for creating grids there is no UI library used for components. I have built all the components from scratch which can be found in [core](https://github.com/swapnilmishra/layout_example/tree/master/src/core) folder.

e.g [Button](https://github.com/swapnilmishra/layout_example/tree/master/src/core/button) which is used at many places and is used to create [ButtonGroup](https://github.com/swapnilmishra/layout_example/tree/master/src/core/buttongroup)

[core components](https://github.com/swapnilmishra/layout_example/tree/master/src/core) forms basis of all the other UI elements which can be found in [components](https://github.com/swapnilmishra/layout_example/tree/master/src/components) i.e [Header](https://github.com/swapnilmishra/layout_example/tree/master/src/components/header).

_To include components [webpack aliases](https://github.com/swapnilmishra/layout_example/blob/master/dev.js#L62) have been defined which makes using them a breeze._

There seems to be some problem with npm proxy module while communicating with Simscale api so, right now the data which, api returns is beings put into a [data file](https://github.com/swapnilmishra/layout_example/blob/master/src/api/data.js) and using ```setTimeout``` api behaviour is mocked.

### Note regarding CSS

CSS is per component i.e every component will have its own styles.scss file at the same level. Accessing CSS using style-loader module of webpack. This gives adavantage of keeping the CSS flat, avoiding issues with global CSS. Inheritence can still be acheived using SASS. Becasue CSS classnames will be referenced in JS this provides opportunity to perform static analysis and results in lesser/no unused CSS.

## Features and UI overview

* Fully responsive
* I have tested it in Chrome, FF and Safari and it works fine.
* Reusable components
* Content placeholder while data is loading (Empty state)
* I have put my ideas and design thinking for how it should look for mobile viewports specially, which is a bit different than how it looks for bigger breakpoints.
* FAB button for mobile viewport.
* Search projects by name, clear result.
* Sorting by views,likes,copies and clear sort.