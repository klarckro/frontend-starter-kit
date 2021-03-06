Frontend Starter Kit
==================

Static Starter Kit with Bootstrap 3

Contains
-----------

1. Bootstrap 3.2.x - Sass or Less version
2. jQuery
3. Fontawesome 4.6.2 and Glyphicons
4. Ready-made favicon placeholders
5. Pure HTML (or Pug template engine)
6. Autoprefixer for CSS
7. Javascript linter
8. CSS/JS copy & Minifier
9. CSS Comber
10. Grunt watch & Notifier

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


What this does (what Grunt will do)
-----------

1. Check the Sass files for missing variables, syntax errors, bad mixins etc.
2. Check the Javascript for missing functions, bad variables etc.
3. Combine and process the Sass files into one css file
4. Minify said file
5. Same with the javascript
6. Organize the CSS according to Bootstraps CSS semantic guidelines
7. Copy all the "live" files to the /dist folder
8. Run a grunt server on 127.0.0.1/3000
9. Run a watch task which auto-reloads the page once changes have been made in the Sass, HTML or JS files
9a. NOTE: If you want to run without watch, insert grunt:dist instead of regular grunt in the console.

Development
-----------
1. **HTML**: Work on the */index.html* file and the */partials*
2. **Sass**: Work with the *assets/sass/style.scss and assets/sass* files in abstracts/base/components/layout/pages/themes/vendor. Do not touch the *vendor/bootstrap* folder
3. **JS**: Work with the *assets/js/src/App.js* for your general functions, such as jQuery
3a. **jQuery plugins** can be put in *assets/js/vendor/jquery-plugins*
4. **Images**: Place your images in the assets/img folder. They will be copied to /dist
5. **Browser requirements**: Set the browser versions in **grunt/configBridge.json**
6. **CSSComb**: Set the rules in *grunt/csscomb.json*