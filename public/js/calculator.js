const Calculator = function(){
  this.previousOperator = null; 
  this.previousTotal = 0;       
  this.newTotal = true;       
  this.runningTotal = 0;     
}

Calculator.prototype.add = function(number){
  this.runningTotal = parseFloat(this.previousTotal) + parseFloat(number);
}

Calculator.prototype.subtract = function(number){
  this.runningTotal = parseFloat(this.previousTotal) - parseFloat(number);
}

Calculator.prototype.multiply = function(number){
  this.runningTotal = parseFloat(this.previousTotal) * parseFloat(number);
}

Calculator.prototype.divide = function(number){
  this.runningTotal = parseFloat(this.previousTotal) / parseFloat(number);
  // If the result of a division is Infinity display "Err"
  if (this.runningTotal == Infinity) {
    this.runningTotal = 'Err';
  }
}

Calculator.prototype.numberClick = function(number){

  if (this.runningTotal == 0 || this.newTotal) {
    this.runningTotal = '';
    this.newTotal = false;
  }
  this.runningTotal = parseFloat('' + this.runningTotal + number);

}

Calculator.prototype.operatorClick = function(operator){

  if (this.previousTotal && this.previousOperator) {
    switch (this.previousOperator) {
      case ('+'):
      this.add(this.runningTotal);
      break;
      case ('-'):
      this.subtract(this.runningTotal);
      break;
      case ('*'):
      this.multiply(this.runningTotal);
      break;
      case ('/'):
      this.divide(this.runningTotal);
      break;
    }
  }

  if (operator == '=') {
    this.previousOperator = null;
  } else {
    this.previousOperator = operator;
  }

  this.previousTotal = this.runningTotal;
  this.newTotal = true;
}

Calculator.prototype.clearClick = function(){
  if (this.runningTotal == 0) {
    this.previousOperator = null;
    this.previousTotal = null;
  }
  this.runningTotal = 0;
}

if(typeof module != 'undefined'){ module.exports = Calculator}
