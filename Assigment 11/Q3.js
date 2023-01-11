const flattenArray = function(arr, result = []) {
    for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
    flattenArray(value, result);
    } else {
    result.push(value);
    }
    }
    return result;
    };
   
    let arr= [ 1, 2, [ 3, 4, [ 5 ] ] ];
    let result = flattenArray(arr);
    console.log(result);