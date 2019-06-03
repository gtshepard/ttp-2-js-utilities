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

