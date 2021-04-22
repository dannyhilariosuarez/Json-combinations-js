const getSites = require('./sites.json'); //Access to sites.json file.
 
const getCombinations = [...getSites.reduce((op, inp) => { //Method to know how many unique combinations of cameras are in use by clients.
  inp.cameras.forEach(element => { //Getting each camera into cameras array (cameras = String []). 
    let cameras = element;
    op.set(cameras, (op.get(cameras) || 0) + 1) //Creating a collection of cameras which are unique. 
  });
  return op //Returning the collection.
  }, new Map()).entries()].forEach((item, i) => { console.log(`${item[0]} = ${item[1]}`)  //Entries iteration to create the output where 0 is camera and 1 is combinations.
});