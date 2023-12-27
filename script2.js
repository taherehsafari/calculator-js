// adad aval ro az user begir
let number1 = parseFloat(prompt("عدد اول را وارد کنید: "))

// amalgar ro az user begir
let operator = prompt("عملگر را وارد کنید: ")

// adad dovom ro az user begir
let number2 = parseFloat(prompt("عدد دوم را وارد کنید: "))

//------------------------------Function------------------------------

function calculator(number1,number2){

    //------------------------------If and ELse (Operator)------------------------------

    //yek shart bezar ke agar operator "+" bood, jame adad hara neshon bede
    if (operator == "+"){ 
        console.log(number1  +number2)
    }

    //yek shart bezar ke agar operator "-" bood, tafrigh adad hara neshon bede
    else if (operator == "-"){
        console.log(number1 - number2)
    }

    //yek shart bezar ke agar operator "*" bood, zarb adad hara neshon bede
    else if (operator == "*"){
        console.log(number1 * number2)
    }

    //yek shart bezar ke agar operator "/" bood, taghsim adad hara neshon bede
    else if (operator == "/"){
        console.log(number1 / number2)
    }

    //yek shart bezar ke agar operator "%" bood, darsad adad hara neshon bede
    else if (operator == "%"){
        console.log(number1 % number2)
    }

    //agar shart haye bala baraye operator ejra nashod, amalgar eshtebah ast
    else {
        console.log("عملگر اشتباه است")
    }
    }

calculator(number1,number2)