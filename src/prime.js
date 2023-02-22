// prime tester : 1 

const prime = x => {

for (let i = 2; i < Math.sqrt(x); i++){

  if (x % i === 0 ){
   return false;}
  return x > 1;

}

// this file is no longer needed 



}

console.log(prime(3));





// separation concernes, is when you create a function,  







