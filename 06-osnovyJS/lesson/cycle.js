// for, while, do while

// for его конструкция for (начальное значение; условие; шаг) {}


for (let i = 0; i < 10; i += 1) {
    console.log('i =', i);
}

for (let i = 10; i > 0; i -= 1) {
    console.log('i =', i);
}

// while его конструкция while (условие) {код} - сначала проверяет условие потом выполняет 

let i = 0;
while (i < 10) {
    console.log('i =', i);
    i += 1;
}

// do while конструкция do {} while (условие) - сначала делает потом думает

i = 0;
do {
    console.log('i =', i);
    i += 1;
} while (i <= 5)