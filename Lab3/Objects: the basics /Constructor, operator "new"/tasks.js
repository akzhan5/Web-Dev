let obj = {}; 
function A() { return obj; }
function B() { return obj; }

let a = new A();
let b = new B();

alert( a == b ); // true possible if both functions return obj instead of this 


function Calculator() {
    this.read = function() {
        this.a = +prompt("a?", 0); 
        this.b = +prompt("b?", 0); 
    }; 
    this.sum = function() {
        return this.a + this.b; 
    }; 
    this.mul = function() {
        return this.a * this.b; 
    }; 
}

let calculator = new Calculator(); 
calculator.read(); 

// accumulator 
function Accumulator(stVal) {
    this.value = stVal; 
    this.read = function() {
        let newVal = +prompt('newVal?', 0); 
        this.value += newVal; 
    }
}

let acc = new Accumulator(1); 
acc.read(); 

