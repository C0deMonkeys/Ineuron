function isfirstCharLower(str){
    let testRegex= /^[Y][E][S]$/i;
    return testRegex.test(str);
    }
    let str= "YEs"
    console.log(isfirstCharLower(str));