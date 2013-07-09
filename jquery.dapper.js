(function ($) {
    $.fn.dapper = function (options) {
        var settings = $.extend({
            dapperButton1: '#dapper_button_1',
            dapperButton2: '#dapper_button_2',
            showTime: '500',
            hideTime: '500',
            rightOffset: '0px'
        }, options);

        var dapperDiv = $(this);
        var dapperButtons = $(settings.dapperButton1).add($(settings.dapperButton2));

        dapperButtons.click(function () {
            if (dapperDiv.is(':visible')) {
                $.fn.dapper.dapperHide(dapperDiv, settings.HideTime);
            }
            else {
                $.fn.dapper.dapperShow(dapperDiv, settings.ShowTime, settings.rightOffset);
            }
        });
    };
    $.fn.dapper.dapperHide = function (dapperDiv, hideTime) {
        dapperDiv.stop().animate(
            { right: -dapperDiv.width() },
            hideTime,
            function () {
                dapperDiv.hide();
            }
        );
    };
    $.fn.dapper.dapperShow = function (dapperDiv, showTime, rightOffset) {
        dapperDiv.show();
        dapperDiv.stop().animate(
            { right: rightOffset },
            showTime
        );
    };
} (jQuery));