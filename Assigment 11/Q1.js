//To take input from browser
let userInput = ('Enter comma separated numbers');
let arr= userInput.split(',');
arr = arr.map(i => parseInt(i));
//let arr = [1,2,3,4,5];
let oddEle = arr.filter(num => num%2 !=0);
console.log(oddEle);
let evenEle = arr.filter(num => num%2 ==0);
console.log(evenEle);


//a
let sumInOdd = oddEle.reduce((sum,ele) => sum+ele);
console.log(sumInOdd)
let sumInEven = evenEle.reduce((sum,ele) => sum+ele);
console.log(sumInEven);
let difference = Math.abs(sumInEven-sumInOdd);
console.log(`Difference = ${difference}`);


//b
console.log(`Odd Elements = ${oddEle.length}`);


//c
console.log(`Even Elements = ${evenEle.length}`);



//d
let avg = (sumInOdd+sumInEven)/arr.length;
console.log(`Average = ${avg}`);


//e
let GCD = gcd(sumInEven,sumInOdd);
function gcd(a,b) {
if(b==0) return a;
else return gcd(b,a%b);
}
console.log(`GCD = ${GCD}`);