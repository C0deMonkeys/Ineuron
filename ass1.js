//1. Write a program to find whether a given year is a leap year or not.

let year= 2021;
if (year % 4==0) 
{
    (year % 4==0) ;
    console.log("leap year");
}
else
{
    (year%100==0);  
    console.log("not leap year");
}


// // 2. Write a JavaScript program to convert temperatures to and from Celsius,Fahrenheit.

//celsius to fahrenheit

function CtoF(celsius)
{
    let Temp=celsius;
    let CoF = Temp*9/5+32;
    let result = Temp+'\xB0C is '+CoF + ' \xB0F.';
    console.log(result);

}
CtoF(60);

function FtoC (fahrenheit)//fahrenheit to celsius
{
    let far=fahrenheit;
    let FtC=(far-32)*5/9;
    let result= far+' \xB0F. is'+FtC+'\xB0C';
    console.log(result);
}
FtoC(45);



// 3. Write a program to find the factorial of a number.
num = 6;
let fact = 1;
for (i = 1; i <= num; ++i)
{
        fact = fact * i;
}
console.log('factorial of '+ num +' is :'+fact);