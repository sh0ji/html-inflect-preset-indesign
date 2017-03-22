module.exports = [
    {
        action: 'removeContainer',
        selector: '[id^=_id]:not(img),[class^=_id]:not(img)'
    },
    {
        action: 'removeAttributes',
        parameter: 'lang',
        selector: '[lang]:not(html)'
    }
];
