function checkAge(age) {
    return (age > 18) ? true : confirm('did parents allow you?'); 
}

function  checkAge2(age) {
    return (age>18) || confirm('did parents allow you?'); 
}

function min(a, b) {
    return (a>b) ? b : a; 
}

function pow(x,n) {
    let res = x; 

    for (let i=1; i<n; i++) {
        res *= x; 
    }
    return res; 
}
