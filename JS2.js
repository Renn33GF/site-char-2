// task 1

let password = 'пароль';
let input = prompt('Введите пароль');
if (password === input){
    alert('Пароль введен верно');
}
else {
    alert('Пароль введен неправильно');
}

// task 2

let c = 2;

if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

// task 3
let d = 50;
let e = 120;

if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

// task 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

let monthNumber = 12;


// task 5
if (monthNumber < 1 || monthNumber > 12) {
    console.log("Некорректный номер месяца!");
} else {
    let season;
    
    switch (monthNumber) {
        case 12: case 1: case 2:
            season = "зима";
            break;
        case 3: case 4: case 5:
            season = "весна";
            break;
        case 6: case 7: case 8:
            season = "лето";
            break;
        case 9: case 10: case 11:
            season = "осень";
            break;
    }
    
    console.log(`Месяц ${monthNumber} - это ${season}`);
}