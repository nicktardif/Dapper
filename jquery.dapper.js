(function ($) {
    $.fn.dapper = function (options) {
        var settings = $.extend({
            dapperButton1: '#dapper_button_1',
            dapperButton2: '#dapper_button_2',
            showTime: 500,
            hideTime: 500,
            actionSide: 'right',
            sideOffset: 0,
            topOffset: 0
        }, options);

        var dapperDiv = $(this);

        // Position the element and give it the right CSS
        dapperDiv.css({
            "position": "absolute",
            "display": "none",
            "top": settings.topOffset
        });
        var xOffset = -dapperDiv.width(); // Depending on the actionSide, either set initial position left or right of screen
        (settings.actionSide === 'left') ? dapperDiv.css("left", xOffset) : dapperDiv.css("right", xOffset)

        var dapperButtons = $(settings.dapperButton1).add($(settings.dapperButton2));
        dapperButtons.click(function () {
            if (dapperDiv.is(':visible')) {
                $.fn.dapper.dapperHide(dapperDiv, settings.hideTime, settings.actionSide);
            } else {
                $.fn.dapper.dapperShow(dapperDiv, settings.showTime, settings.sideOffset, settings.actionSide);
            }
        });
    };
    $.fn.dapper.dapperHide = function (dapperDiv, hideTime, actionSide) {
        if (actionSide === 'right') {
            dapperDiv.stop().animate(
                { right: -dapperDiv.width() },
                hideTime,
                function () {
                    dapperDiv.hide();
                }
            );
        } else {
            dapperDiv.stop().animate(
                { left: -dapperDiv.width() },
                hideTime,
                function () {
                    dapperDiv.hide();
                }
            );
        }
    };
    $.fn.dapper.dapperShow = function (dapperDiv, showTime, sideOffset, actionSide) {
        if (actionSide === 'right') {
            dapperDiv.show();
            dapperDiv.stop().animate(
                { right: sideOffset },
                showTime
            );
        } else {
            dapperDiv.show();
            dapperDiv.stop().animate(
                { left: sideOffset },
                showTime
            );
        }
    };
} (jQuery));