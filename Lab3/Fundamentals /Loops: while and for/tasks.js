
while (i) {
  alert( i-- );
} // last val = 1

let i = 0;
while (++i < 5) alert( i ); // 1 2 3 4 
while (i++ < 5) alert( i ); // 1 2 3 4 5 


for (let i = 0; i < 5; i++) alert( i ); //  0 1 2 3 4 
for (let i = 0; i < 5; ++i) alert( i ); // 0 1 2 3 4 

for (let i=2; i<=10; i++) {
    if (i%2==0) alert(i); 
} 

while (i<3) {
    alert(`number ${i}!`); 
    i++; 
}

let val; 
do {
    val = prompt("enter numb", "");  
} while (val <= 100 && val); 

let n = prompt("numb", ""); 

nextPrime: //label 
for (let i=2; i<=n; i++) {
 for (let j=2; j<i; j++) {
    if (i%j == 0) continue nextPrime; //outer loop 
 }

 alert(i); // prime 
}