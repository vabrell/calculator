const assert = require('assert'),
  { add } = require('../src/assets/calculator')

describe('calculator.js', () => {

  // Check if add returns correct value
  it('ADD returns correct value', () => {
    assert.strictEqual(
      add(1, 1),
      2
    )
  })

  // Check if a Number is produced if strings have been supplied
  it('ADD return value of type Number', () => {
    const type = typeof( add(1, 1) )

    assert.strictEqual(
      type,
      'number'
    )
  })
})