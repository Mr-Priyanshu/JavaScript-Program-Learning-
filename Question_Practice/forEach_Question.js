// Q.1   Given an array of numbers, use forEach to log each element to the console.

let number = [2, 3, 5, 8, 7]

number.forEach((element) =>{  
    // console.log(element);
});
// 2
// 3
// 5
// 8
// 7  output 

/* Q2. Given an array of strings, use forEach to capitalize each 
 string and store the results in a new array. */

let DOA = ["Mahesh", "Dev", "mohit", "siddharth","sourabh"];

let Employee = [];
    DOA.forEach((E) => {
        let Upper = E.toUpperCase();
    // console.log(E.toUpperCase())
    Employee.push(Upper)
    // return Upper;  This Function Not retrun any thing
    return Upper;
});

// console.log(Employee);

// [ 'MAHESH', 'DEV', 'MOHIT', 'SIDDHARTH', 'SOURABH' ]   Output Answer 
// ----------------------------------------------------------------------------------------

/*Calculating Sum:
Given an array of numbers, use forEach to calculate the sum of all elements in the array.*/

const ArrayNum = [6,3,2,1,6,8,5,9];
let TotalSum = 0;


ArrayNum.forEach((sum) => {
    // console.log();
    // console.log(TotalSum);
    TotalSum = TotalSum + sum;
    // console.log(TotalSum);
});
// console.log('-----');
// console.log( "Total Sum: "  + TotalSum);

// ----------------------------------


// Q .4 Filtering Odd Numbers:
// Given an array of numbers, use forEach to filter out all odd numbers and store the results in a new array.

const OddNum_Arr = [6,3,2,1,6,8,5,9];

let Number_Arr = []
    OddNum_Arr.forEach((Odd) => {
        if(Odd % 2 !== 0){
            Number_Arr.push(Odd);
            // console.log(Odd);
        }
    });

    // console.log(Number_Arr);

    // 3
    // 1
    // 5
    // 9
    // [ 3, 1, 5, 9 ]   Output 

    // -----------------------------------


// Q .4 Updating Object Properties:
// Given an array of objects representing products, use forEach to update the price property of each 
// product by applying a discount of 10%.

let Shop_Product = [
    {
      "id": 1,
      "name": "Wireless Headphones",
      "price": 79.99
    },
    {
      "id": 2,
      "name": "Running Shoes",
      "price": 99.99
    },
    {
      "id": 3,
      "name": "Gaming Laptop",
      "price": 1499.99
    },
    {
      "id": 4,
      "name": "Coffee Maker",
      "price": 39.99
    },
  ];

  // discount_price = 

  Shop_Product.forEach((discount) => {
        //  discount.price *= 0.9;

        discount.price = discount.price * 0.9;
    //  console.log(discount);

  });
  console.log(Shop_Product);

//   @Mr-Priyanshu ➜ /workspaces/JavaScript-Program-Learning-/Question_Practice (main) $ node forEach_Question.js 
// [
//   { id: 1, name: 'Wireless Headphones', price: 71.991 },
//   { id: 2, name: 'Running Shoes', price: 89.991 },
//   { id: 3, name: 'Gaming Laptop', price: 1349.991 },
//   { id: 4, name: 'Coffee Maker', price: 35.991 }  Output

  
