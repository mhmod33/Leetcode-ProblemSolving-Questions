class Calculator {
    constructor(value) {
        this.result=value;
    }
    add(value){
         this.result=this.result + value
          return this
    }
     multiply(value) {
        this.result=this.result*value 
        return this
    }
    subtract(value){
        this.result=this.result-value 
        return this
    }
    divide(value){
          if(value===0){
          this.result="Division by zero is not allowed"
          }
      else this.result=this.result /value
        return this
    }
   power(value) {
        this.result=this.result**value 
        return this
    }
    getResult() {
      return this.result;
    }
}