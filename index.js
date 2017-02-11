'use strict';

module.exports = [
    {
        action: 'removeElement',
        selector: '[id^=_id],[class^=_id]'
    },
    {
        action: 'removeAttribute',
        parameter: 'lang',
        selector: '[lang]:not(html)'
    }
];
