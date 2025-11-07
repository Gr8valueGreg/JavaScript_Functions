console.log("Hello World!\n==========\n");
console.log("EXERCISE 1:\n==========\n");

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

console.log("EXERCISE 2:\n==========\n");




function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}, You can Drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16`;

    if (typeof userName !== "string") {
        console.log("Incorrect input type please type your username.");
        return;
    }
    if (typeof age !== "number") {
        console.log("Incorrect input type please type your age as an integer.");
        return;
    }  
    
    if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}

checkAge("Bill", 4);
checkAge("Joe", 16);
checkAge("Steve", 26);
checkAge(0, "Greg")
checkAge(10, 90)
checkAge("John", "John")

console.log("EXERCISE 3:\n==========\n");

function plot(xCoord, yCoord) {
    if (xCoord == 0 && yCoord == 0) {
        console.log(`(${xCoord}, ${yCoord}) is at the origin`);
    } else if (yCoord == 0) {
        console.log(`(${xCoord}, ${yCoord}) is on the x-axis`);
    } else if (xCoord == 0) {
        console.log(`(${xCoord}, ${yCoord}) is on the y-axis`);
    }
    if (xCoord >= 1 && yCoord >= 1) {
        console.log(`(${xCoord}, ${yCoord}) is in Quadrant 1`);
    }
    if (xCoord < 0 && yCoord >= 1) {
        console.log(`(${xCoord}, ${yCoord}) is in Quadrant 2`);
    }
    if (xCoord < 0 && yCoord < 0) {
        console.log(`(${xCoord}, ${yCoord}) is in Quadrant 3`);
    }
    if (xCoord >= 1 && yCoord < 0) {
        console.log(`(${xCoord}, ${yCoord}) is in Quadrant 4`);
    }
}

plot(0, 5);
plot(5, 0);
plot(0, 0);
plot(5, 5);
plot(-5, 5);
plot(-5, -5);
plot(5, -5);


console.log("EXERCISE 4:\n==========\n");


function triangle(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        console.log(`Sides ${a}, ${b}, ${c} make an invalid triangle`)
        return;
    }
    if (a === b && b === c) {
        console.log(`Sides ${a}, ${b}, ${c} make an equilateral triangle`)
    } else if (a === b || b === c || a === c) {
        console.log(`Sides ${a}, ${b}, ${c} make an isosceles triangle`)
    } else {
        console.log(`Sides ${a}, ${b}, ${c} make a scalene triangle`)
    }
}

triangle(1, 1, 2);
triangle(2, 2, 2);
triangle(1, 2, 2);
triangle(1, 2, 3);


console.log("EXERCISE 5:\n==========\n");


function dataUsage(planLimit, day, usage) {
    let planLength = 30;
    let remainingDays = planLength - day;
    let recommendedDailyUse = planLimit / planLength;
    let actualDailyUse = usage / day;
    let projectedUsage = ((remainingDays * actualDailyUse) + usage) - planLimit;
    let remainingData = planLimit - usage
    let usageBudget = remainingData / remainingDays;
    let statusMsg = ""
    let usageMsg = ""

    if (actualDailyUse > recommendedDailyUse) {
        statusMsg = "EXCEEDING";
    } else if (actualDailyUse < recommendedDailyUse) {
        statusMsg = "UNDER";
    } else {
        statusMsg = "AT";
    }

    if (projectedUsage > 0) {
        usageMsg = "OVER"
    } else if (projectedUsage < 0) {
        usageMsg = "UNDER"
    } else {
        usageMsg = ", EQUAL TO"
    }

    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining
    Average daily use: ${recommendedDailyUse.toFixed(3)} GB/day.
    You are ${statusMsg} your average daily use (${actualDailyUse.toFixed(2)} GB/day),
    continuing this usage, you'll end up using
    ${Math.abs(projectedUsage.toFixed(1))} GB ${usageMsg} your data limit.
    To stay below your data plan, use no more than ${usageBudget.toFixed(2)} GB/day.`);
}


dataUsage(100, 15, 56);
dataUsage(30, 20, 15);
dataUsage(50, 10, 25);