const arr1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);

    if (arr1[i] == 10){
        break
    }

}


const arr2 = [1, 5, 4, 10, 0, 3];
console.log(arr2.indexOf(4))


const arr3 = [1, 3, 5, 10, 20];
console.log(arr3.join(' '))


const arr4 = [];

for (let i = 0; i < 3; i++) {
    const arr_alt = [];

    for (let j = 0; j < 3; j++) {
        arr_alt.push(1)

    }
    arr4.push(arr_alt)
    
}

console.log(arr4)


const arr5 = [1, 1, 1];

arr5.push(2);
arr5.push(2);
arr5.push(2);

console.log(arr5);


const arr6 = [9, 8, 7, 'a', 6, 5];

let result6 = arr6.sort()
result6 = result6.filter(item => item !== 'a')

console.log(result6)


const arr7 = [9, 8, 7, 6, 5];
answer = prompt('Угадай число которое есть в массиве')

if (arr7.includes(parseInt(answer))) {
    alert('Угадал')
} else {
    alert('Не угадал')
}

let text8 = 'abcdef';
const arr8 = text8.split('')
let result8 = arr8.reverse()
result8 = result8.join('')
console.log(result8)


const arr9 = [[1, 2, 3],[4, 5, 6]]
const result9 = [...arr9.flat()]

console.log(result9)


const arr10 = [3, 8, 14, 1, 9, 5, 17]
for (let i = 0; i < arr10.length - 1; i++) {
    console.log(arr10[i]+arr10[i+1])
}


const arr11 = [2, 5, 7, 11];

function array_square(array) {
    let result11 = array.map(item => item ** 2)
    return result11
}

console.log(array_square(arr11))


const arr12 = ["Hello", "World", "JavaScript", "Html"];

function array_word_length(array) {
    let result12 = array.map(item => item.length)
    return result12
}

console.log(array_word_length(arr12))



const arr13 = [2, -5, 9, -11, -18, 0];

function array_negative(array) {
    let result13 = array.filter(item => item < 0)
    return result13
}

console.log(array_negative(arr13))


function random_num() {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}

const arr14 = []
for (let i = 0; i < 10; i++) {
    arr14.push(random_num())
}
console.log(arr14)

const positive_arr14 = arr14.filter(item => item % 2 == 0)
console.log(positive_arr14)


const arr15 = []
for (let i = 0; i < 6; i++) {
    arr15.push(random_num())
}
console.log(arr15)

let avg = arr15.reduce((total, number) => total + number, 0) / arr15.length
console.log(avg)