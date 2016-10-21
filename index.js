'use strict';

exports.default = function() {
    return [{
        'action': 'removeElement',
        'selector': '[id^=_id],[class^=_id]'
    }, {
        'action': 'removeAttribute',
        'attribute': 'lang',
        'selector': '[lang]:not(html)'
    }]
}
module.exports = exports['default']
