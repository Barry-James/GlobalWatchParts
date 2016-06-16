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
});
