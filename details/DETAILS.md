## How to run

```
npm install or yarn install // installs dependencies
npm run // runs local webpack dev server
```

webpack-dev-middleware is used to run local server with hot reloading of assets.

Running ```npm run build:prod``` outputs prduction ready bundle.js.

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

e.g [Button](https://github.com/swapnilmishra/layout_example/tree/master/src/core/button) which is used at many places and is used to create [Button](https://github.com/swapnilmishra/layout_example/tree/master/src/core/buttongroup)

__Core__ components forms basis of all the other UI elements which can be found in [components](https://github.com/swapnilmishra/layout_example/tree/master/src/components) i.e [Header](https://github.com/swapnilmishra/layout_example/tree/master/src/components/header).

There seems to be some problem with npm proxy module while communicating with Simscale api so, right now the data which, api returns is beings put into a [data file](https://github.com/swapnilmishra/layout_example/blob/master/src/api/data.js) and using ```setTimeout``` api behaviour is mocked.

## Features

* Fully responsive
* I have tested it in Chrome, FF and Safari and it works fine.
* Reusable components
* I have put my ideas and design thinking for how it should look for mobile viewports specially, which is a bit different than how it looks for bigger breakpoints.
* FAB button for mobile viewport.
* Search projects by name, clear result.
* Sorting by views,likes,copies and clear sort.