// 2. Write the syntax for
// a) Creating new set object
// b) Adding new element to set object
// c) Deleting element from set object

let primes = new Set( [2,3,5,7,11,13] );

primes.add( 17 );

console.log(primes)

primes.delete( 3 );

console.log(primes)