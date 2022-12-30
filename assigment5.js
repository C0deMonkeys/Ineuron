function Cylinder(radius, height) {
    this.radius=radius;
    this.height=height;
}
Cylinder.prototype.getVolume = function() {
    let r = Math.floor(this.radius / 2)
    return this.height*Math.PI*Math.pow(r,2);
}
let obj = new Cylinder(2,3); //9.4248
console.log(obj.getVolume().toFixed(4));

///////////////////////////////

//2

// function Sphere(radius) {
//     this.radius=radius;
// }
// Sphere.prototype.getVolume = function() {
//     let r = Math.abs(this.radius);
//     return (4/3)*Math.PI*Math.pow(r,3);
// }
// let obj = new Sphere(3); //113.0973
// console.log(obj.getVolume().toFixed(4));


/////////////////////////////////////

//3


// function Cone(radius,height) {
//     this.radius=radius;
//     this.height=height;
// }
// Cone.prototype.getVolume = function() {
//     let r = Math.floor(this.radius / 2)
//     return Math.PI*Math.pow(r,2)*(this.height/3);
// }
// let obj = new Cone(2,3); //3.1416
// console.log(obj.getVolume().toFixed(4));
