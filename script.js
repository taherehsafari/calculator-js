// adad aval ro az user begir
let number1 = parseFloat(prompt("عدد اول را وارد کنید: "))

// amalgar ro az user begir
let operator = prompt("عملگر را وارد کنید: ")

// adad dovom ro az user begir
let number2 = parseFloat(prompt("عدد دوم را وارد کنید: "))


//------------------------------Functions------------------------------

// yek function baraye jame adad ha tarif kon
function sum(number1 , number2){
    console.log(number1 + number2)
}

// yek function baraye menha tarif kon
function minus(number1 , number2){
    console.log(number1 - number2)
}

// yek function baraye zarbe adad ha tarif kon
function multiplication(number1 , number2){
    console.log(number1 * number2)
}

// yek function baraye taghsim adad ha tarif kon
function division(number1 , number2){
    console.log(number1 / number2)
}

// yek function baraye darsad adad ha tarif kon
function modulus(number1 , number2){
    console.log(number1 % number2)
}


//------------------------------If and ELse (Operator)------------------------------

//yek shart bezar ke agar operator "+" bood, function sum ro seda kon
if (operator == "+"){ 
    sum(number1,number2)
}

//yek shart bezar ke agar operator "-" bood, function minus ro seda kon
else if (operator == "-"){
    minus(number1,number2)
}

//yek shart bezar ke agar operator "*" bood, function multiplication ro seda kon
else if (operator == "*"){
    multiplication(number1,number2)
}

//yek shart bezar ke agar operator "/" bood, function division ro seda kon
else if (operator == "/"){
    division(number1,number2)
}

//yek shart bezar ke agar operator "%" bood, function modulus ro seda kon
else if (operator == "%"){
    modulus(number1,number2)
}

//agar shart haye bala baraye operator ejra nashod, amalgar eshtebah ast
else {
    console.log("عملگر اشتباه است")
}


