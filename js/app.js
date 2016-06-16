jQuery(function($) {
    'use strict';

    var _shade = $('.js-shade'),
        _header = $('.js-header'),
        _menuIcon = $('.js-header-menu-icon');

    _menuIcon
        .add(_shade)
        .click(function() {
            _header.toggleClass('is-full');
        });

    $('.js-sign_minus').click(function() {
        var _input = $(this).siblings('input[type="text"]'),
            value = parseInt(_input.val(), 10);

        if (value && value > 0) {
            _input.val(value - 1);
        }
    });

    $('.js-sign_plus').click(function() {
        var _input = $(this).siblings('input[type="text"]'),
            value = parseInt(_input.val(), 10);

        _input.val(value + 1);
    });
});
