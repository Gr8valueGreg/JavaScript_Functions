console.log("Hello World!\n==========\n");

function printOdds(count) {
    if (count == 0) {
        count = 1;
    }

    if (count < 0) {
        count *= -1;
    }

    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOdds(10);
printOdds(100);

console.log("EXERCISE 1:\n==========\n");

function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}, You can Drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16`;

    if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}

checkAge("Bill", 4);
checkAge("Joe", 16);
checkAge("Steve", 26);

console.log("EXERCISE 2:\n==========\n");
