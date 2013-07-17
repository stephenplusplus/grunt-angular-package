# grunt-angular-package

> Add references to your angularjs module to the index.html file of your app.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-angular-package --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-angular-package');
```

## How to use it in your `index.html` file
This grunt task is meant to work in conjunction with the [angular-package-loader](https://github.com/jdpedrie/angular-package-loader).

At the bottom of your `index.html` file, add the following above your `app.js` include:

```html
<!-- angular-package app/packages/myPackage/manifest.html -->
<!-- end-angular-package -->
```

## The "angular-package" task

### Overview
In your project's Gruntfile, add a section named `angular-package` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  "angular-package": {
    app: { indexFile: 'app/index.html'}
  },
})
```

### Options

#### options.indexFile
Type: `String`
Default value: `'app/index.html'`

### Props
To [Stephen Sawchuk](http://github.com/stephenplusplus) for fixing my regex.
