//To take input from browser
let arr = prompt("Enter the array elements");
arr = arr.split(',');
arr = arr.map(i => parseInt(i));

let duplicates = arr.filter( (num,index) =>{
if(arr.indexOf(num) != index) return num;
})
console.log(duplicates);

arr = [...new Set(arr)];
console.log(arr);