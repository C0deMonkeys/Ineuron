// 3. Give an example of a Higher Order function and a call back function
// used in the same program.


function doArithmetic(arr, instruction) {
const output =[];
for(let i=0; i<arr.length; i++){
output.push(instruction(arr[i]));
}
return output;
}
function multiplyByTwo(input) {
return input*2;
}
let arr = [1,2,3,4];
let result = doArithmetic(arr, multiplyByTwo);
console.log(result);