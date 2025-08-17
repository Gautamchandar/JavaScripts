// let a = 78;
// let b = 100;

// if(a < b){
//     console.log("Greater");
// }
// else{
//     console.log("Not Greater")
// }

let login = true;

// if(login){
//     console.log("Access Granted")
// }
// else{
//     console.log("Denied")
// }

// if( false ){
//     console.log("Good")
// }
// else if (null){
// console.log("null")
// }
// else{
//     console.log("Default")
// }

//switch case

// let weekday = 1;

// switch(weekday){
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thrusday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invaild Day")
// }


let score = 88;

function getGrade(){
    if(score < 100 && score >= 90){
        console.log("A+")
    }
    else if(score >= 80 && score < 90){
        console.log("A")
    }
    else if(score >= 70 && score < 80){
        console.log("B")
    }
    else if(score >= 60 && score < 70){
        console.log("C")
    }
    else if(score >= 33 && score < 60){
        console.log("D")
    }
    else if( score >= 0 && score < 33){
        console.log("Fail")
    }
    else{
        console.log("Invalid Marks ❌")
    }
}

getGrade(score)