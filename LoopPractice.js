// 1. Print number from 1 to 10 using for loop 

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
    
// }

// 2. Print number from 10 to 1 using while loop 

// let i = 10;

// while(i > 0){
//     console.log(i)
//     i--
// }

// 3. Print even number from 1 to 20 using for loop 

// for (let i = 1; i < 21; i++) {
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

// 4. Print odd number from 1 to 15 using while loop 

// let i = 1;
// while(i < 16){
//     if(i % 2 == 1){
//         console.log(i)
//     }
//     i++
// }

// 5. Print multiplication table of 5

// let num = 5;
// for (let i = 1; i <= 10; i++) {
//     console.log(num, "x", i, "=", num*i)
// }

// 6. Print the sum of numbers from 1 to 100 using a loop 

// let sum = 0
// for (let i = 1; i < 101; i++) {
//     sum = sum + i
// }
// console.log(sum)

// 7. Print all numbers between 1 to 50 that is divisible by 3 

// for (let i = 1; i < 51; i++) {
//     if(i % 3 == 0){
//         console.log(i)
//     }
// }

// 8. Ask the user for a number and print whether each number from 1 to that number is even or odd

// let user = prompt("Enter any number")

// for (let i = 1; i <= user; i++) {
//         if(i % 2 === 0){
//             console.log(`${i} even`)
//         } else{
//             console.log(`${i} odd`)
//         }
//     }

// 9. Count how many numbers between 1 to 100 are divisible by both 3 and 5

// for (let i = 0; i < 100; i++) {
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log(i)
//     } 
// }

// 10. Break and Continue Questions 

// Q1: Stop at First Multiple of 7

// Write a loop from 1 to 100 that:
//   • Prints each number
//   • Stops completely when it finds the first number divisible by 7

for (let i = 1; i < 101; i++) {
    if(i % 7 === 0){
        break
    }
    console.log(i)
}

// Q2: Skip-Multiples-of-3

// Write a loop from 1 to 20 that:
//   • Skips numbers divisible by 3
//   • Prints all others

// 💡 Use continue

// Expected output:
// 1 2 4 5 7 8 10 11 ... (no 3, 6, 9, etc.)

for (let i = 0; i < 21; i++) {
    if(i % 3 == 0){
        continue
    }
    console.log(i)
}