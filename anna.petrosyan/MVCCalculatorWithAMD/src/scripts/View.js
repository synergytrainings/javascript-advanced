/*global define , $*/
define('View',function(){
    "use strict";
    var View=function(){
        var changeListener;
    };
    View.prototype={
        /**
         * Initializing calculator view
         */
        init:function()
        {
            var tempThis=this;
            $('.calc_btn').bind('click', function(){
                tempThis.changeListener($(this).attr('data-key').toUpperCase());
            });
            $("#calc_result").val("0");

        },
        /**
         * Refreshing view.
         */

        draw:function(result)
        {
            $("#calc_result").val(result);
        },
        /**
         * Setting changeListener
         */
        setChangeListener:function(changeListener)
        {
            this.changeListener=changeListener;
        }

    };
    return View;
});
