function sum (numA, numB){
    return numA + numB;
}

function testSum () {
    let 
}
let result = sum(12, 13);
let expected = 22;
if(result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
}
result = sum(11, 11);
result= sum(22,0);
result= sum(4, 18);
result= sum(1,4);

if(typeof result !== "number") {
    throw new Error(`${result} is not a number`);
}

After one test it does not display the other test results .

