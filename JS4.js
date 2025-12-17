function min_num(a, b) {
    return Math.min(a, b)
};
console.log(min_num(1, 10));



function checkEvenOdd(number) {
    if (!Number.isInteger(number)) {
        return 'Число должно быть целым';
    }
    return number % 2 === 0 ? 'Число четное' : 'Число нечетное';
}
even_or_odd(10);



function square(a) {
    return a**2
}
console.log(square(4))



function age_ask(age) {
    if (age <= 0) {
        console.log("Вы ввели неправильное значение")
    } else if (age <= 12) {
        console.log("Привет, друг!")
    } else {
        console.log("Добро пожаловать!")
    }
}
age_ask(12)



function check_nums(a, b) {
    if (isNaN(a) || isNaN(b)) {
        console.log("Одно или оба значения не являются числом")
    } else {
        console.log(a * b)
    }
}
check_nums(1,2)


function calculateCube() {
    const userInput = prompt("Введите число:");
    
    if (userInput === null) {
        return "Ввод был отменен";
    }
    const number = Number(userInput);
    
    if (isNaN(number) || userInput.trim() === "") {
        return "Переданный параметр не является числом";
    }

    const cube = Math.pow(number, 3);
    return `${number} в кубе равняется ${cube}`;
}

const result = calculateCube();
console.log(result);
alert(result);


function getArea() {
    let area = 3.14 * (this.radius ** 2)
    console.log(`${this.name} имеет площадь ${area}`)
}

function getPerimeter() {
    let perimeter = 2 * 3.14 * this.radius
    console.log(`${this.name} имеет площядь ${perimeter}`)
}


const circle1 = {
   name: 'Кружочек',
   radius: 5,
   getArea: getArea,
   getPerimeter: getPerimeter
}

const circle2 = {
   name: 'Круглик',
   radius: 7,
   getArea: getArea,
   getPerimeter: getPerimeter
}