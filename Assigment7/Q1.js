function truncStr(str){
let len = str.length;
if(len >4){
return str.substring(0,4);
}
return str;
}
let str= ('Ice');
let result = truncStr(str);
console.log(result);
