/**
 * Setup new Modules under ./src like this
 * read more here: http://javascriptweblog.wordpress.com/2010/12/07/namespacing-in-javascript/  (Method 3.)
 *
 * var Module = Module || {};
 *
 * Module.Submodule = (function() {
 *     // define private Variables here, only visible inside Commons namespace
 *     var privateVar = 0;
 *
 *     return {
 *         // define Methods here, will be available under App.*
 *         methodName: function (str) {
 *             return privateVar;
 *         }
 *     };
 * }());
 */

jQuery( document ).ready( function( $ ) {
    App.setup();
} );

$( window ).resize( function() {

  //Resize Stuff
} );
