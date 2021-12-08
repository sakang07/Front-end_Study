// babel.config.js

module.exports = {
  presets : [
    [ '@babel/preset-env', {
      targets: { ie:9 },
      "useBuildIns": 'usage',
      corejs: {version:2}
    }]
  ]
}