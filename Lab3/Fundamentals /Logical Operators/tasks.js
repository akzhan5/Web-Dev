alert (null || 2 || undefined); // 2

alert( alert(1) || 2 || alert(3) ); // 1 2

alert( 1 && null && 2 ); // null 

alert( alert(1) && alert(2) ); // 1 undefined

alert( null || 2 && 3 || 4 ); // 3 

if (age >=14 && age <=90) {
    alert("yes"); 
}

if (age <14 || age>90) {
}

if (!(age >=14 && age<=90)) {
}

if (-1 || 0) alert( 'first' ); //true 
if (-1 && 0) alert( 'second' ); //false 
if (null || -1 && 1) alert( 'third' ); //true 

let que = prompt("Who's there?", ""); 

if (que=='Admin') {
    let que2 = prompt("Password?", ""); 
    if (que2=='TheMaster') {
        alert("Welcome!"); 
    } else if (que2==='' || que2 === null) {
        alert('Canceled'); 
    } else {
        alert('Wrong password'); 
    }
} else if (que==='' || que2 === null) {
    alert ('Canceled'); 
} else {
    alert('I dont know you'); 
}


// ?? set default if undefined: height = height ?? 100; 