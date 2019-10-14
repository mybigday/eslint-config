const util = require('util')
const exec = util.promisify(require('child_process').exec)

test('Base config', async () => {
  try {
    await exec(
      'eslint --config packages/eslint-config-base/index.js packages/eslint-config-base/fixtures/',
    )
  } catch (e) {
    expect(e.stdout).toMatchSnapshot()
  }
})
