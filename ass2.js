// 1. Write a Javascript function to check whether a triangle is equilateral,
// isosceles or scalene

function whichtriangle(x,y,z)
{
    if (x==y && y==z)          //for equilateral triangle
        console.log("It's an  equilateral Triangle");

    else if(x==y||y==z||x==z) //for isosceles triangle
        console.log("Its an isosceles Triangle ");    
    else                      //for scalene Triangle
        console.log('scalene');

}
let x = 8, y = 8, z = 9;
whichtriangle(x, y, z);



// 2. Write a function using switch case to find the grade of a student based
// on marks obtained

function grade(marks){
switch(true) {
    case (marks<=100 && marks>90):
        console.log("S grade");
         break;

    case (marks<=90 && marks>80):
        console.log("A grade");
        break;
    
    case (marks<=80 && marks>70):
        console.log("B grade");
        break;
    
    case (marks<=70 && marks>60):
        console.log("C grade");
        break;

    case (marks<=60 && marks>50):
        console.log("D grade");
        break;

    case (marks<=50 && marks>40):
        console.log(" E grade");
        break;

    case (marks<40 && marks>=0):
        console.log("Student has Failed");
        break;

    default:
        console.log("invalid Input");
}
}
 marks= 10;
grade(marks);

// 3. Write a JavaScript program to find the sum of the multiples of 3 and 5
// under 1000

let num=1;
while(num<=1000 ){
    if(num%3===0 && num % 5==0){
        console.log("The numbers are mutilples of 3 and 5 iss : " +num)  ;
    }
    num++;
}


