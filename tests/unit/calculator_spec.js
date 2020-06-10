var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('running total is 0', function(){
    assert.equal(0, calculator.runningTotal)
  })

  it('it can add', function(){
    calculator.add(12)
    assert.equal(12, calculator.runningTotal)
  })

  it('it can subtract', function(){
    calculator.previousTotal = 12
    calculator.subtract(5)
    assert.equal(7, calculator.runningTotal)
  })

  it('it can multiply', function(){
    calculator.previousTotal = 12
    calculator.multiply(3)
    assert.equal(36, calculator.runningTotal)
  })

  it('it can divide', function(){
    calculator.previousTotal = 12
    calculator.divide(12)
    assert.equal(1, calculator.runningTotal)
  })

  // it('it can receive number', function(){
  //   assert.equal(true, true)
  // })

  // it('it can receive operators', function(){
  //   assert.equal(true, true)
  // })

  // it('it can clear the result', function(){
  //   assert.equal(true, true)
  // })

});


// Calculator.prototype.add

// Calculator.prototype.subtract 

// Calculator.prototype.multiply 

// Calculator.prototype.divide 

// Calculator.prototype.numberClick = function(number){

// Calculator.prototype.operatorClick = function(operator){

// Calculator.prototype.clearClick = function(){