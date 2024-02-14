function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // error


let calc = {
    a: undefined, 
    b: undefined, 
    read() {
      let n1 = +prompt("enter numb", ""); 
      let n2 = +prompt("enter numb", ""); 
        this.a = n1; 
        this.b = n2; 
    }, 
    sum() {
        return this.a + this.b; 
    }, 
    mul() {
        return this.a * this.b; 
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//chaining 
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this; 
    },
    down() {
      this.step--;
      return this; 
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this; 
    }
  };