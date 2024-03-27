// question 1
let digit = 20
let negdigit = -digit
if (digit !== negdigit){console.log("positive number")
}else if (digit == negdigit){console.log("negative number")
}else {console.log("zero")}
console.log("move on")

//question 2
let digit2 = 20
if(digit2 / 2 === 10){console.log(digit2 / 2 + " = even number")
}else{console.log("odd number")}
console.log("next!")

// question 3
let variableAge = 20
if(variableAge % 5 === 0){console.log (variableAge % 5 + " therefore, a multiple of 5")
}else if (variableAge % 3 === 0){console.log(variableAge % 3 + "multiple of 3")
}else {console.log("neither")}
console.log("next question")

//question 4
let year = 2204
if(year >= 1901 && year <= 2000){console.log(year +" is in the 20th century")
}else if(year >= 2001 && year<= 2100){console.log(year + " is in the 21th century")
}else if(year >=2101 && year <= 2200){console.log(year + " is in the 22nd century")
}else{console.log (year + " is above the 22nd century, welcom to the future")}
console.log("next question")

// question 5
let value = 50 
let result 
if(value < 10){ result = 0 
    console.log(result)}
    else if(value >=10 && value <= 50){result = 1 
        console.log(result)}
        else if (value >= 51 && value<= 100){result = 2
        console.log(result)}
        else{result = 3
        console.log(result)}
        console.log("all done")
