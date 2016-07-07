Frontend Starter Kit
==================

Static Starter Kit with Bootstrap 3

Contains:
	- Bootstrap 3.2.x - Sass or Less version
	- jQuery
	- Fontawesome and Glyphicons
	- Ready-made favicon placeholders
	- Pure HTML or Pug template engine
	- Autoprefixer for CSS
	- Javascript linter
	- CSS/JS copy & Minifier
	- CSS Comber
	- Grunt watch & Notifier

Prerequisites
-----------

1. [node.js](http://nodejs.org/) (and NPM)
2.  Optional: [livereload browser extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-)
3.  grunt-cli: `npm install -g grunt-cli`


Grunt Setup
-----------

1.  Open Console/Terminal
2.  Direct yourself to the root of the project folder, such as `cd frontend-static`
3.  Run `npm install`
4.  Run the grunt task simply with `grunt`
5.  Done :)


What this does
-----------

Grunt will run the following tasks (v. 1.0, master branch):
	- Check the Sass files for missing variables, syntax errors, bad mixins etc.
	- Check the Javascript for missing functions, bad variables etc.
	- Combine and process the Sass files into one css file
	- Minify said file
	- Same with the javascript
	- Organize the CSS according to Bootstraps CSS semantic guidelines
	- Copy all the "live" files to the /dist folder
	- Run a grunt server on 127.0.0.1/3000
	- Run a watch task which auto-reloads the page once changes have been made in the Sass, HTML or JS files
		- NOTE: If you want to run without watch, insert grunt:dist instead of regular grunt in the console.

Development
-----------
HTML: Work on the /index.html file and the /partials
Sass: Work with the assets/sass/style.scss and assets/sass/modules/
JS: Work with the assets/js/src/App.js for your general functions
	- jQuery plugins can be put in assets/js/vendor/jquery-plugins
Images: Place your images in the assets/img folder. They will be copied to /dist
Browser requirements: Set the browser versions in grunt/configBridge.json
CSSComb: Set the rules in grunt/csscomb.json