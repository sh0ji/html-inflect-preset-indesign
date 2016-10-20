'use strict';

export default function() {
    return [{
        'action': 'removeElement',
        'selector': '[id^=_id],[class^=_id]'
    }, {
        'action': 'removeAttribute',
        'attribute': 'lang',
        'selector': '[lang]:not(html)'
    }]
}
