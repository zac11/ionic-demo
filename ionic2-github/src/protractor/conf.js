exports.config = {
    seleniumAddress: 'http://localhost:4723/wd/hub',

    specs: ['./protractor/*_spec.js'],

    // Reference: https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js
    capabilities: {
        platformName: 'android',
        platformVersion: '7.0',
        deviceName: 'Galaxy S6',
        browserName: "",
        autoWebview: true,
        //CHANGE THIS TO YOUR ABSOLUTE PATH
        app: '/Users/zac01/Documents/ionic-demo/ionic2-github/platforms/android/build/outputs/apk/android-debug.apk'
        //newCommandTimeout: 60
    },
    baseUrl: 'http://10.0.2.2:8000',

    // configuring wd in onPrepare
    // wdBridge helps to bridge wd driver with other selenium clients
    // See https://github.com/sebv/wd-bridge/blob/master/README.md
    onPrepare: function () {
        var wd = require('wd'),
            protractor = require('protractor'),
            wdBridge = require('wd-bridge')(protractor, wd);
        wdBridge.initFromProtractor(exports.config);
    }
};
