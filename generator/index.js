module.exports = api => {
  api.render('./template', {
    hasTS: api.hasPlugin('typescript'),
    hasESLint: api.hasPlugin('eslint')
  })

  api.extendPackage({
    scripts: {
      'test:e2e-cypress': 'vue-cli-service test:e2e-cypress'
    }
  })
}
