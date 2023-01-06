// 1. Carefully observe this example.
// a) Is the InnerFunction() a closure?
// b) What is output of this program


function OuterFunction()
{ var outerVariable = 100;
function InnerFunction() {
alert(outerVariable);
}
return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();


// a) Yes. InnerFunction is a closure

// b) Code would run fine in browser, using node js alert is giving error