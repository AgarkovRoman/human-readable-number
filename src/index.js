module.exports = function toReadable(number) {
    var units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    if (number < 20) {
        return units[number];
    }
    var tenth = [" ", " ", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            return tenth[number / 10];
        } else {
            var lastNum = number % 10;
            var firstNum = (number - lastNum) / 10;
            console.log(firstNum);
            return `${tenth[firstNum]} ${units[lastNum]}`;
        }

        //100 111 121
    } else if (number >= 100 && number < 1000) {
        //100 200 300
        if (number % 100 === 0) {
            return `${units[number / 100]} hundred`;

            //111 211 311
        } else if (number % 100 !== 0 && number % 100 < 20) {
            lastNum = number % 100;
            firstNum = (number - lastNum) / 100;
            return `${units[firstNum]} hundred ${units[lastNum]}`;

            //110 230 240
        } else if (number % 100 !== 0 && number % 100 >= 10 && number % 10 === 0) {
            lastNum = number % 100;
            firstNum = (number - lastNum) / 100;
            return `${units[firstNum]} hundred ${tenth[lastNum / 10]}`;

            //111 984 435
        } else if (number % 100 !== 0 && number % 100 >= 10 && number % 10 !== 0) {
            lastNum = number % 10;
            let midlNum = (number - lastNum) % 100;
            firstNum = (number - midlNum - lastNum) / 100;
            return `${units[firstNum]} hundred ${tenth[midlNum / 10]} ${units[lastNum]}`;
        }
    }
}
