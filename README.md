# react-simple-boilerplate

Just a simple boilerpate with minimal dependencies as possible

## Dev Dependencies
### Babel 
These preset files are needed to allow us to use JSX syntax and es6  

`babel-preset-react
babel-preset-es2015`

### We needed browserify to allow us to use module imports and babelify to make the code conversion

`browserify
babelify`

### We use Gulp for the workflow automation. Since Gulp 4 now uses es6, it needs the babel-register module.
`gulp
babel-register`

### Totally optional. This module refreshed the browser for us when it detects our changes.

`browser-sync`
