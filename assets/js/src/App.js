/**
 * @author Author Name a.name@insign.ch;
 */
var App = App || {};

/**
 * Namespace which groups all global Options for the Application
 */
App = (function() {

  return {
    setup: function() {

      // In general: Links that point to # should be ignored
      $("a[href='#']").click(function(e) { e.preventDefault(); });

      // Enable Bootstrap popovers and tooltips
      $("[data-toggle=popover]").popover();
      $("[data-toggle=tooltip]").tooltip();

      // You must add the function here for it to be enabled
      App.logSomething();
    },

    // Add your functions below
    logSomething: function(data) {
      console.log('This is a console test message.');
    }

  };
}());
