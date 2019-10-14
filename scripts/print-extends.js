const fs = require('fs')
const path = require('path')

module.exports = function getRules(configPath) {
  const config = require(path.join(process.cwd(), configPath))

  const rules = config.rules || {}

  if (config.extends) {
    config.extends.forEach(extendPath => {
      const extendConfig = require(extendPath)
      Object.assign(rules, extendConfig.rules || {})
    })
  }
  return rules
}
