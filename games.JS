function guess_number() {
    let answer = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    let user_num = prompt("Напишите любое число");
    
    while (true) {
        if (user_num < answer) {
            user_num = prompt("Ваше число меньше ответа");
        } else if (user_num > answer) {
            user_num = prompt("Ваше число больше ответа");
        } else if (user_num == answer) {
            alert("Поздравляю вы выйграли!");
            break;
        }
    }
}

function random_num(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function arifmetics() {
    let num1 = random_num(1, 30);
    let num2 = random_num(1, 30);
    let task = random_num(1, 4);
    let answer;

    if (task == 1) {
        answer = num1 + num2;
    }
    if (task == 2) {
        answer = num1 - num2;
    }
    if (task == 3) {
        answer = num1 * num2;
    }
    if (task == 4) {
        while (true) {
            if (num1 % num2 == 0) {
                answer = num1 / num2;
                break;
            } else {
                num1 = random_num(1, 30);
                num2 = random_num(1, 30);
                continue;
            }
        }
    }
    
    const symbols = {
        1: "+",
        2: "-",
        3: "*",
        4: "/"
    };
    
    let user_answer = prompt(`Напиши ответ на эту задачу: ${num1} ${symbols[task]} ${num2}`);
    
    if (parseInt(user_answer) == answer) {
        alert("Молодец! Ответ верный");
    } else {
        alert(`Ответ не верный. Правильный ответ: ${answer}`);
    }
}

function turn_text() {
    let user_word = prompt(`Напиши любой текст и я его переверну`);
    alert(`Твой перевёрнутый текст ${user_word.split('').reverse().join('')}`);
}

const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function quiz_game() {
    let question_num = 1;
    let correct_count = 0;
    alert(`Тебе нужно будет ответить на несколько вопросов`);
    
    quiz.forEach(question_index => {
        let user_answer = prompt(`${question_num} вопрос: ${question_index.question}
Варианты ответа ${question_index.options} (Введите порядковый номер ответа)`);
        
        if (user_answer == question_index.correctAnswer) {
            alert("Правильно");
            correct_count++;
        } else {
            alert("Неправильно");
        }
        
        question_num++;
    });
    
    alert(`Квиз окончен. Ваш результат ${correct_count} из ${quiz.length}`);
}

function simpleRockPaperScissors() {
    const gameRules = {
        "камень": ["ножницы"],
        "ножницы": ["бумага"],
        "бумага": ["камень"]
    };
    
    const choices = Object.keys(gameRules);
    const userChoice = prompt(`Введите: ${choices.join(", ")}`)?.toLowerCase().trim();
    
    if (!userChoice || !choices.includes(userChoice)) {
        alert(`Некорректный ввод! Доступные варианты: ${choices.join(", ")}`);
        return;
    }
    
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    let result;
    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (gameRules[userChoice].includes(computerChoice)) {
        result = "Вы победили!";
    } else {
        result = "Компьютер проиграли,увы!";
    }
    
    alert(`Вы: ${userChoice}\nКомпьютер: ${computerChoice}\n\n${result}`);
}


function random_color() {
    let red_color = Math.floor(Math.random() * 255);
    let green_color = Math.floor(Math.random() * 255);
    let blue_color = Math.floor(Math.random() * 255);
    
    document.querySelector(".mini-games").style.backgroundColor = `rgb(${red_color}, ${green_color}, ${blue_color})`;
    document.querySelector(".card").style.backgroundColor = `rgb(${red_color}, ${green_color}, ${blue_color})`;
}
