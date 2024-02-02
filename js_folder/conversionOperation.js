let score="33aaaaabc"

console.log(typeof score);
console.log(typeof  (score));

let valueInNumber=String(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33"=>NaN
//"33abc"=>NaN
//true=>1; false=>0

let isLoggedIn=1
let  booleanIsLooggedIn=Boolean(isLoggedIn);
console.log(booleanIsLooggedIn);

//******************operations************
console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");
console.log((3+4)*5%3);
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"



