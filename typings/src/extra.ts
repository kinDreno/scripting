
// // // type Even = number

// // // let n:  Even = 1;
// // // // let s: number = 0;
// // // const evenNumbers: number[] = [];
// // // const oddNumbers: number[] = [];

// // // try {
// // //     do {
// // //         if (n % 2 === 0) {
// // //             evenNumbers.push(n); // Store even numbers
// // //             console.log(`s = ${n}, is even`);
// // //         } else {
// // //             oddNumbers.push(n); // Store odd numbers
// // //             console.log(`s = ${n}, is odd`);
// // //              // Sum of odd numbers
// // //         }
// // //         n++;
// // //     } while (n <= 10); // Change condition to `<=` to include 10 in the loop
// // // } finally {
// // //     console.log(`Sum of odd numbers: ${n}`);
// // //     console.log(`Odd numbers: ${oddNumbers}`);
// // //     console.log(`Even numbers: ${evenNumbers}`);
    
    
// // // }

// // // const shittyArray: (number)[] = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10];

// // // for (let i = 0; i < shittyArray.length; i++) {
// // //     if (shittyArray[i] % 2 === 0) {
// // //         console.log(`the even numbers are: ${shittyArray[i]}`)
// // //     }
// // // }

// // // for (let i = 0; i < shittyArray.length; i++) {
// // //     if (shittyArray[i] % 2 !== 0) {
// // //         console.log(`the even numbers are: ${shittyArray[i]}`)
// // //     }
// // // }


// // // const n = 5;
// // // const arr = Array.from({ length: n }, (_, index) => index+1 );
// // // console.log(arr); // [1, 2, 3, 4, 5]
// // type IntramerLa = number;

// // let ctr: IntramerLa = 0;
// //     const n: IntramerLa = 5;
// //     let s: IntramerLa = 0
// // try {
    
// //     do {
// //         ctr++
// //         s += n;
// //         console.log(`${s}`);
// //         console.log(ctr);
        
        
// //     } while (ctr < n) 
// // }
// // finally {
// // console.log(`${s}`); // result === 25

// // }
// // let ctr: number = 0;
// // for (let n = 5, s = 0; ctr < n; ctr++ ) {
// // s += n;
// // console.log(s)
// // }
// // interface Pizza {
// //     name: string;
// //     price: number;
// //     isAvailable: boolean
// // }
// // const pizzaMenu: Pizza[] = []
// // console.log(pizzaMenu);

// // function addPizza(pizza: Pizza): string {
// //     return pizza.isAvailable ? 
// //     `${pizza.name} with a price of ${pizza.price} Available` 
// //     : `${pizza.name} is not Available`;

// // }

// // const a = addPizza({name: "Indian pizza",price: 40,isAvailable: true})
// // console.log(a);

// // function capitalizeFirstLetter(name: string): string {
// //     return name.charAt(0).toUpperCase() + name.slice(1);
// // }

// // console.log(capitalizeFirstLetter("wassup"))


// type Num = number;
// function main(num : Num) {
//     let i = num;
//     return {
//       add: function (num : Num) {
//         i += num;
//         return this;
//       },
//       subtract: function (num : Num) {
//         i -= num;
//         return this;
//       },
//       divide: function (num : Num) {
//         i /= num;
//         return this;
//       },
//       multiple: function (num : Num) {
//         i *= num;
//         return this;
//       },
//       print() {
//         return i;
//       },
//     };
//   }
  
//   const x = main(10)
//   const res = x.add(6).subtract(4).divide(3).multiple(2).print();
//  const aish = x.add(6).subtract(4).print()
//   const shibal = x.subtract(4).add(2).print()

//   console.log("hi",shibal);
//  console.log("yahu",aish);
//   console.log("yeah",res)


// function what(n: number) {
//   return n + 5
// }
// console.log(what(5));

//  function createMenu(): {name: string} {
// return {name: "hi"}
//  }

//  console.log(createMenu());

//  interface Identity {
//   name: string;
//   age: number;
//   birthday: number | string;
//  }

//  const people: Identity[] = [{name: "hi", age: 23, birthday: `September ${7}, ${2024}`}]
//  console.log(people);
 

// // Incorrect usage
// // const badGreet = (fn: GreetFunction) => {
// //   fn(message);
// // };

// // badGreet("hi!")

// // TypeScript will show an error here because `badGreet` does not match `GreetFunction` type
// // greeter(badGreet);
