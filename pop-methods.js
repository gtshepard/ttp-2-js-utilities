let nums = [9,8,7,6]

let myEach = ((arr, callBack) => {
    for (let i = 0; i < arr.length; i++){
     callBack(arr[i])         
    }
});
console.log("For Each Result");
myEach(nums, (elem) => {console.log(elem)});
  
let myMap = ((arr, callBack) => {

    newArray = [];
    for (let i = 0; i < arr.length; i++){
      newArray.push(callBack(arr[i]));
    }
    return newArray;

});

let mapResult = myMap(nums, (elem) => { return elem + 1;});
console.log("Map Result");
myEach(mapResult, (elem) => {console.log(elem)});


let filter = ((arr, callBack) => {
    
    newArray = [];
    for (let i = 0; i < arr.length; i++){
        if (callBack(arr[i]))
          newArray.push(arr[i]);

    }  
      return newArray;
});

let filterResult = filter(nums, (elem) => { 
  if( elem % 2 === 0) {
    return true;
  } else {
    return false;
  } 
});

console.log("Filter Result");
myEach(filterResult,  (elem) => {console.log(elem)});


let some = ((arr, callBack) => {
  for (let i = 0; i < arr.length; i++){
    if (callBack(arr[i])){
      return true;     
    }
  }
    return false;
});

console.log("Some Result");
let someResult = some(nums, (elem) => {
  if( elem % 2 === 0) {
    return true;
  } else {
    return false;
  } 
}); 

console.log(someResult);


let every = ((arr, callBack) => {


});
 
let reduce = ((arr, callBack) => {
  

});

let includes = ((arr, callBack) => {

});

let indexOf = ((arr, callBack) => {
  

});

let push = ((arr, callBack) => {

}); 

let lastIndexOf = ((arr, callBack) => {

});

let grabKeys = ((obj) => {

}); 
let grabValues = ((obj) => {

}); 





/*
Object.grabkeys = function(myObj) {
  

}

let myObject = {"a":1 , "b":2, "c": 3};
Object.grabKeys(myObj)
**/
/**
function myReduce(arr, callback) {
  let startingVal = 0;
  for (let i = 0; i < arr.length; i++){
    let currElement = arr[i];
    startingVal = callback(startingVal, currElement);
  }
}
**/
/* arrow function are for readability 
 * rule NEVER use this for in an arrow function. thats all. nothing more to it in JS. but also know storing a function in a variable and binding it to this name is a functional idea. they look very  similar to ocaml functions. this is fucntional because we are treatign ucntions as first class citizens, meanung they can do anyhting variibales can do. 
 *
 * pull request - my chnages are ready to be merged to master. every time a pull request is accepted. everytime master is updated by the acceptance of a pull request. you must pull master. 
 *
 * you have to decide what to keep with merge conflicts 
 *
 * when you pull, it updates the files you have 
 *
 * pull is fetch and merge. so this means you could get a merge conflict. if you run it a situaiton you dont no what to do, its team communication. 
 *
 * var is net lexically scoped. meaning if we use it in a for loop for th avroable the vairblw will still exist. this is bad  can result in unintetional use.
 *
 * let, lexically scopes the varaibles and the value will not live out side its scope. 
 * const means you cannot reassign the value. 
 *
 *
 *
 *
 *
 * */


