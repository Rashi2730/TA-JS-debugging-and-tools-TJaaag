function getFullName(firstName , lastName){
    return firstName + " " + lastName;
}

let result = getFullName("Rashi", "Israni");
let expected = "Arya Stark";

if(result !== expected) {
    throw new Error(`${result} is not same as ${expected}`);
}

result = "Rashi Israni";

// No it doesn't show output for second one.


function getAmount(amount, taxRate){
    return amount + (amount * taxRate); 
}


let res = getAmount(6000, 2);
let exp = 45000;

if(res !== exp) {
    throw new Error(`${res} is not same as ${exp}`);
}

res = getAmount(7800, 4);