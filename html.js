function calc(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return "Операция невозможна"; 
    } else if (num1 % 2 === 0 && num2 % 2 === 0) {
        return num1 + num2; 
    } else {
        return num1 - num2; 
    }
}

console.log(calc(4, 6)); // ответ: 10
console.log(calc(3, 5)); // ответ: -2
console.log(calc(0, 5)); // ответ: Операция невозможна
