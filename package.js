Package.describe({
  name: 'mirrorcell:background-geolocation-plus',
  version: '1.3.0',
  // Brief, one-line summary of the package.
  summary: 'Cordova Background Geolocation For Android and iOS with pure javascript callbacks.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/pmwisdom/meteor-background-geolocation-services',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Cordova.depends({
  "cordova-plugin-geolocation" : "2.4.1",
  "org.flybuy.cordova.background-location-services" : "https://github.com/pmwisdom/cordova-background-geolocation-services.git#ba0383667fe4d64887e9d7cf141ddacf1a0218d2"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles('background-geolocation-plus.js');
  api.export('BackgroundLocation');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mirrorcell:background-geolocation-plus');
  api.addFiles('background-geolocation-plus-tests.js');
});
