/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon')

module.exports = function (defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
    'ember-cli-mocha': {
      useLintTree: false
    }
  })

  app.import('bower_components/sinonjs/sinon.js')
  app.import('vendor/html2canvas.js', {type: 'test'})
  app.import('vendor/VisualAcceptance.js', {type: 'test'})
  app.import('bower_components/es6-promise/es6-promise.js', {
    type: 'test'
  })
  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree()
}
