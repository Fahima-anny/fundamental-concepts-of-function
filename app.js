// // function structure 
// function nameOfFunction(parameter){
//     console.log(parameter,'modified') ;
//     // return 
// }
// nameOfFunction("parameter")

// function sum( x, y){
//     let sum = x + y ;
//     return sum
// }
// let result = sum(3, 8)
// console.log(result)


// function double(x){
//     let result = x * 2 ;
//     return result
// }
// let result = double(110)
// console.log(result)

// function diff(Father, son){
//     let diff = Father - son ;
//     return diff ;
// }
// let father = 45 ;
// let son = 15 ;
// let result = diff(father, son) ;
// console.log(result) ;

// function doMath(x , y){
// let summ = x + y ;
// let diff = x - y ;
// let multi = summ * diff ;
// let average = multi / 2 ;
// return average ;
// }
// let result = doMath(20 , 10)
// console.log(result)

// function isEven(x){
//     if(x%2===0){
//         return true ;
//     }
//     else{
//         return false ;
//     }
// }
// let result = isEven(50) ;
// console.log(result)

// function isEvenSized(str){
//     if(str.length % 2 === 0){
//         return true ;
//     }
//     return false ;
//     // console.log(str.length)
// }
// let string = 'Fahima'
// let result = isEvenSized(string)
// console.log(result)



// let array = [12, 8, 18, 13, 15, 4, 20, 25, 5, 1]
// function sumOfArray(array){
//     let sum = 0 ;
//     for(let x of array){
//         sum = sum + x
//     }
//     return sum ;
// }
// let result = sumOfArray(array)
// console.log(result)




//  function returnEven(array){
//     let evenArray = []
// for(let x of array){
//     if(x%2 === 0){
//         evenArray.push(x)
//     }
// }
// return evenArray ;
//  }
//  let array = [4,5,6,7,8]
// let result = returnEven(array)
// console.log(result)



function multiply(a, b, c, d){
    let multiply = a*b*c*d ;
    return multiply ; 
}
let result = multiply(2, 4, 3, 1)
// console.log(result)



function oddOrEven(num){
if(num%2 === 1){
    let result = num *2
    return result ;
}
else{
    let result = num/2
    return result
}
}
let result2 = oddOrEven(11)
// console.log(result2)


function average(array){
let sum = 0 ;
for(let x of array){
    // console.log(x)
    sum = sum + x ;
}
return sum
}
let array = [5,3,2]
let result3 = average(array)
// console.log(result3)



function binaryCounter(binary){
    let zero = 0
    let one = 0
for(let i=0 ; i<binary.length ; i++){
    console.log(binary[i])
    if( binary[i] === '0'){
        zero++
    }
    else{
        one++
    }
}
return `zeros: ${zero} & one: ${one}`
}
let binary = '10110001011' ;
let result4 = binaryCounter(binary) ;
// console.log(result4)



function odd_even(x){
    if(x % 2 !== 0){
        return 'Odd'
    }
    return 'Even'
}
let result5 = odd_even(11)
console.log(result5)



































