/**
 * @author Author Name a.name@insign.ch;
 */
var App = App || {};

/**
 * Namespace which groups all global Options for the Application
 */
App = ( function() {

    return {
        setup: function() {

            // In general: Links that point to # should be ignored
            $( "a[href='#']" ).click( function( e ) { e.preventDefault(); } );

            App.logSomething();
        },

        logSomething: function( data ) {
            console.log( "Something" );
        }

    };
}() );
