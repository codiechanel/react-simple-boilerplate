# react-simple-boilerplate

Just a simple boilerpate with minimal dependencies as possible

## Dev Dependencies
### Babel (Required)
These preset files are needed to allow us to use `JSX` syntax and `es6`  

```
babel-preset-react
babel-preset-es2015
```

### Browserify
This allows us to use `module imports` and it uses `babelify` to make the actual javascript code conversion (transpile). 

```
browserify
babelify
```

### Gulp
For the workflow automation. Since `Gulp 4` now uses es6, it needs the `babel-register` module.

```
gulp
babel-register
```

### Webpack (Alternative to Browserify)
I added it here so you can have the option if you prefer `Webpack` over `Browserify`. The `style-loader` is optional if you are not importing your css files inside javascript.

```
webpack
babel-loader
style-loader
```

*Should you choose Webpack, you can simply remove the dependencies for Gulp and Browserify.*

### .babelrc

This is the configuration file that `Webpack/Gulp` uses. This is the most minimal settings.
```
{
    "presets": ["es2015", "react"]
}
```

### BrowserSync (Totally optional). 
This module will refresh the browser for us when it detects our code changes.

```
browser-sync
```
