// Part 1: Refactoring Old Code
let row1 = ["ID", "Name", "Occupation", "Age"]
let row2 = ["\n42", "Bruce", "Knight", 41]
let row3 = ["\n57", "Bob", "Fry Cook", 19]
let row4 = ["\n63", "Blaine", "Quiz Master", 58]
let row5 = ["\n98", "Bill", "Doctor’s Assistant", 26]

let rowsCombined = row1.concat(row2, row3, row4, row5);
let format = rowsCombined.join(" ")

console.log(format);

// Part 2: Expanding Functionality

// Declare a variable that stores the number of columns in each row of data within the CSV.
let columns = 0;

// Store your results in a two-dimensional array.
    // Each row should be its own array, with individual entries for each column.
    // Each row should be stored in a parent array, with the heading row located at index 0.
let rows = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctor’s Assistant", "26"]
];
    
// Cache this two-dimensional array in a variable for later use.
let csvArray = rows;

console.log(csvArray);

// Part 3: Transforming Data

// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
    // Convert these keys to all lowercase letters for consistency.
    const newRow1 = {
        id: "42",
        name: "Bruce",
        occupation: "Knight",
        age: "41"
    }
    const newRow2 = {
        id: "57",
        name: "Bob",
        occupation: "Fry Cook",
        age: "19"
    }
    const newRow3 = {
        id: "63",
        name: "Blaine",
        occupation: "Quiz Master",
        age: "58"
    }
    const newRow4 = {
        id: "98", 
        name: "Bill", 
        occupation: "Doctor's Assistant", 
        age: "26"
    }
    
    // Store these objects in an array, in the order that they were originally listed.
    const transform = [newRow1, newRow2, newRow3, newRow4];

    console.log(transform);
// Part 4: Sorting and Manipulating Data

// Remove the last element from the sorted array
transform.pop()

// Insert object at index 1:
let newObject = {
    id: "48",
    name: "Barry",
    occupation: "Runner",
    age: "25"
}

transform.splice(1, 0, newObject);


// Insert object at the end of array:
let pushObject = {
    id: "7",
    name: "Bilbo",
    occupation: "None",
    age: "111"
}

transform.push(pushObject)

console.log(transform);

// Calculate the average age of the group
let sum = 0;

for (let i = 0; i < transform.length; i++) {
    sum += Number(transform[i].age); // Used Number function to ensure it's calculation the number and not string count
}

let average = sum / transform.length;

console.log(average);

// Part 5: Full Circle

const csv = [
    [
        "ID",
        "Name",
        "Occupation",
        "Age"
    ],
    ...transform.map(transform => [
        transform.id,
        transform.name,
        transform.occupation,
        transform.age
    ])
]
    .map(e => e.join(' '))
    .join("\n");

console.log(csv);