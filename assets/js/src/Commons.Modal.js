/**
 * @author Raphael Mäder &lt;r.maeder@insign.ch&gt;
 */
var Commons = Commons || {};

/**
 * Common Modal functionality
 */
Commons.Modal = ( function() {

    return {
        init: function() {

            // Links with data-url attribute will populate their modal defined in data-target with AJAX loaded content
            // on root element of modal.
            $( "#modalCommon" ).on( "shown.bs.modal", function( e ) {
                var $this = $( this ).find( "div.modal-dialog" ),
                    $link = $( e.relatedTarget ),
                    url = $link.data( "url" );

                $.get( url ).done( function( data ) {
                    $this.html( data );
                    $this.find( "input:first" ).focus();
                } );
            } );
        }
    };

}() );
