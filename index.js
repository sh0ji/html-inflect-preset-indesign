module.exports = [
    {
        action: 'removeContainer',
        selector: '[id^=_id],[class^=_id]'
    },
    {
        action: 'removeAttributes',
        parameter: 'lang',
        selector: '[lang]:not(html)'
    }
];
