
function replaceStrings(str){
let arr= str.split(' ');
return arr[1]+' '+arr[0];
}
//driver code
//let str= "mohan sai";
let str= ('Hii Boy');
let result = replaceStrings(str);
console.log(result);