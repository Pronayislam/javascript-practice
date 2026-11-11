
function multiplicationTable(number) {
    console.log("Multiplication Table of " + number);

    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}

let num = 5;

if (num > 0) {
    multiplicationTable(num);
} else {
    console.log("Please enter a positive number");
}
