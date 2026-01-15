let str = 'js';
let upperStr = str.toUpperCase();
console.log(upperStr); // Выведет: JS



function filterStringsByPrefix(strings, prefix) {
    const lowerPrefix = prefix.toLowerCase();   
    return strings.filter(str => 
        str.toLowerCase().startsWith(lowerPrefix)
    );
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = filterStringsByPrefix;
}


let num3 = 32.58884
console.log(Math.floor(num3));
console.log(Math.ceil(num3));
console.log(Math.round(num3));



console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));


function random_num() {
    console.log(Math.floor(Math.random() * 11));
}


function random_array(num) {
    const arr6 = []
    for (let i = 0; i < Math.floor(num / 2); i++) {
        arr6.push(Math.floor(Math.random() * (num + 1)))
    }
    return arr6
}
console.log(random_array(10));



function random_num_range(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(random_num_range(3,13));


console.log(new Date());



const today = new Date();
const in73Days = new Date(today.getTime() + 73 * 24 * 60 * 60 * 1000);

console.log(`Сегодня: ${today.toLocaleDateString()}`);
console.log(`Через 73 дня: ${in73Days.toLocaleDateString()}`);




const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
"Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

function get_date(date) {
    let full_date = `Дата: ${date.getDay()} ${months[date.getMonth()]} ${date.getFullYear()} — это ${days[date.getDay()]}
Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    console.log(full_date);

}

get_date(new Date())