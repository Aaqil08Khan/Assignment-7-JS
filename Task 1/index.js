// Task 1 Array manipulation
let arr=[1,2,3,4,5]
console.log("original Array: " + arr);  
// add elements to arr
arr.push(6,7);
console.log("After Push: " + arr);
// remove elements from arr
arr.pop();
console.log("After Pop: " + arr);
// add elements to start of arr
arr.unshift(0);
console.log("After Unshift: " + arr);
// remove first element from arr
arr.shift();
console.log("After Shift: " + arr);
// Add/Remove an element at a specific index
arr.splice(2, 0, "Apple", "Banana");
console.log("After Splice: " + arr);

// copy a part of arr
let newArray = arr.slice(1,4);
console.log("After Slice: " + newArray);


// Searching and Checking
// check if value exists
let hasApple = arr.includes("Apple");
console.log("Array contains Apple: " + hasApple);
// find index of a value
let indexOfBanana = arr.indexOf("Banana")
console.log("Index of Banana: " + indexOfBanana);
// find last index of a value
let arr3 = [1, 2, 3, 4, 5, 3];
let lastIndexOf3 = arr3.lastIndexOf(3);
console.log("Last Index of 3: " + lastIndexOf3);


// map arr
let mappedArray = arr.map(item => {
    if (typeof item === "number") {
        return item * 2;
    }
    return item;
});
console.log("Mapped Array: " + mappedArray);
// filter arr
let filteredArray = arr.filter(item => {
    if(typeof item === "number") {
        return item % 2 === 0;

    }
    return false;
});
console.log("Filtered Array: " + filteredArray);

// accumulate to single value
let reducearray = arr.reduce((accumulator, item) => {
    if (typeof item === "number") {
        return accumulator + item;
    }
    return accumulator;
}, 0);
console.log("Reduced Array: " + reducearray);
