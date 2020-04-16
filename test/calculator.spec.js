const assert = require('assert'),
  { add, sub } = require('../src/assets/calculator')

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

  // Check if sub returns correct value
  it('SUB returns correct value', () => {
    assert.strictEqual(
      sub( 2, 1 ),
      1
    )
  })

  // Check if a Number is produced if strings have been supplied
  it('SUB returns value of type Number', () => {
    const type = typeof( sub( 2, 1 ) )

    assert.strictEqual(
      type,
      'number'
    )
  })
})