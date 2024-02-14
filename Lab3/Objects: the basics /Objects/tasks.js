let user = {}; 
user.name = 'john'; 
user.surname = 'smith'; 
user.name = 'Pete'; 
delete user.name; 

function isEmpty(obj) {
    for (let key in obj) {
        return false; // if the loop started there is a property 
    }
    return true; 
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum =0; 
for (let key in salaries) {
    sum += salaries[key]; 
}
alert(key); //390 

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key])=='number') obj[key]*=2; 
    }
}