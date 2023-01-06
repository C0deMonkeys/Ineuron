/* 
Perform the following operations to provide the implementation for a
Rectangle class. The operations are:
    1. Add an area() method to the Rectangle class.
    2. Create a Square class that satisfies the following conditions:
        ○ It is a subclass of Rectangle.
        ○ It contains a constructor and no other methods.
        ○ It can use the Rectangle class' area method to print the area of a Square object.
*/

class Rectangle {
    constructor(lenght, width) {
      this.lenght = lenght;
      this.width = width;
    }
    area() {
      return this.lenght * this.width;
    }
  }
  
  class Square extends Rectangle {
    constructor(lenght) {
      super(lenght, lenght);
    }
  }
  
  let squareObj = new Square(3);
  let rectangleObj = new Rectangle(5, 7);
  
  console.log(squareObj.area());
  console.log(rectangleObj.area())



// -------------------------------------------

// 2



/* 
Write a javascript function find_largest to return the nth largest number
in an array-
eg- given an array of integers- [3,45,6,7,23,5,7,8]
find_largest(3) will return third largest number from the above array -
which is 8.
*/

// let arr = [3, 45, 6, 7, 23, 5, 7, 8];
// function find_largest(n) {
//   arr.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
//   });

//   return arr[arr.length - n];
// }

// console.log(find_largest(3));


// ----------------------------------------------

// 3


/* 
Write a JavaScript program which accept a number as input in the
function parameter and insert dashes (-) between each two even
numbers.
For example if you accept 025468 as the output should be 0-254-6-8.
computeDash(025468) -> 0-254-6-8.
*/

// function computeDash(n) {
//     let ans = '';
//     let prev_rem;
//     let rem;
  
//     while (n !== 0) {
//       rem = n % 10;
//       if (rem % 2 === 0 && prev_rem % 2 === 0) {
//         ans += '-' + rem;
//       } else {
//         ans += rem;
//       }
//       n = Math.trunc(n / 10);
//       prev_rem = rem;
//     }
//     ans = ans.split('').reverse().join('');
//     console.log(ans);
//   }
  
//   computeDash(222226743680);
  