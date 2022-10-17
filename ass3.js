// 1. Using for loops, write a Javascript program to output the following pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10



let i,j,num=1,row=4,string="";    
for(i=1;i<=row;i++) 
{ 
   for(j=1;j<=i;j++) 
    { 
        string=string+" "+ num; 
        num++;
    } 
string+="\n"; 
} 
console.log(string); 

//2



let num= 370;
let a = num % 10;     
let b = num/10;
let c= parseInt(b) % 10 ;
let d = parseInt(parseInt(b)/10);
let result =(a*a*a) +(c*c*c)+(d*d*d);

if(num===result) 
    console.log(`The Given number ${num} is an Amstrong number`);
else
    console.log(`The Given number ${num} is not an Amstrong number`);


//3
const checkSpecialNumber = (num) => {
    let s = num.toString().split('').map(x => {
        let n = 1;
        do {
            n = n * x;
            x--;
        } while (x > 1);
        return n;
    }).reduce((start, sum) => start + sum, 0);
    if (s == num) {
        return `${num} is Special number`;
    }
    else {
        return `${num} is not Special number`;
    }
}

const output = checkSpecialNumber(145);
console.log(output);