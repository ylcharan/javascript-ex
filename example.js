// console.log("Hello, World!");

// // let x = 10;
// // console.log(typeof x);
// // console.log(x);

// // let x = Number("charan");
// // let y = 123;
// // console.log(x);
// // console.log(typeof y);

// let x = 10;
// let y = 20;

// console.log( x === 10 && y === 20 ); // true && true => true
// console.log( x === 10 || y === 30 ); // true || false => true
// console.log(); // !true => false

// let i;
// console.log(i);
// for (i = 100; false; i++) {
//   console.log(i);
// }
// console.log(i);

// console.log("x", "y");

// function addNumbers(a, b) {
//   return Number(a) + Number(b);
// }

// let a = 10;
// let b;
// let result = addNumbers(a);
// console.log(result);

function validate(userRole, isAuthenticated, useAge) {
  if (!isAuthenticated) {
    console.log("User is not authenticated");
    return;
  }

  if (userRole === "admin") {
    console.log("Welcome, Admin!");
  } else if (userRole === "editor") {
    console.log("Welcome, Editor!");
  } else if (userRole === "guest") {
    console.log("Welcome, User!");
  } else {
    console.log("Access Denied");
  }
}
