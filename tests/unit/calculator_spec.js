var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('running total is 0', function(){
    assert.equal(0, calculator.runningTotal)
  })

  it('it should be able to add', function(){
    calculator.add(12)
    assert.equal(12, calculator.runningTotal)
  })

  it('it should be able to subtract', function(){
    calculator.previousTotal = calculator.add(12)
    calculator.previousTotal = calculator.runningTotal
    calculator.subtract(5)
    assert.equal(7, calculator.runningTotal)
  })

  it('it should be able to multiply', function(){
    calculator.previousTotal = calculator.add(12)
    calculator.previousTotal = calculator.runningTotal
    calculator.multiply(3)
    assert.equal(36, calculator.runningTotal)
  })

  it('it should be able to divide', function(){
    calculator.previousTotal = calculator.add(12)
    calculator.previousTotal = calculator.runningTotal
    calculator.divide(12)
    assert.equal(1, calculator.runningTotal)
  })

  it('it should be able to take a number if the running total is zero', function(){
    calculator.numberClick(3)
    assert.equal(3, calculator.runningTotal)
  })

  it('it should be able to take a number if a previous operation has been completed', function(){
    calculator.previousTotal = calculator.add(12)
    calculator.previousTotal = calculator.runningTotal
    calculator.numberClick(3)
    assert.equal(3, calculator.runningTotal)
  })

  it('it should be able to take an operator', function(){
    calculator.numberClick(3)
    calculator.operatorClick("+")
    assert.equal(3, calculator.previousTotal)
  })

  it('it should be able to clear the result', function(){
    calculator.runningTotal = 12
    calculator.clearClick()
    assert.equal(0, calculator.runningTotal)
  })

});
