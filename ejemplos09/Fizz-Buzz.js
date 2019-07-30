let number = prompt('Introduce un numero: ')
Fizz_Buzz(number)

function Fizz_Buzz(number){
    if((number % 5) == 0 && (number % 3) == 0){
        console.log("BuzzFizzLOLA! " + number)
    }
    else if((number % 3) == 0){
        console.log("Fizz! " + number)
    }
    else if((number % 5) == 0){
        console.log("Buzz! " + number)
    }
    else{
        console.log(number)
    }
}