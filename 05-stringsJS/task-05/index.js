let userString = prompt('Введите текст для обрезки');
userString = userString.trim();
// console.log(userString);
let startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки');
let endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки');
startSliceIndex = Number(startSliceIndex);
endSliceIndex = Number(endSliceIndex);
// console.log(startSliceIndex, typeof startSliceIndex);
// console.log(endSliceIndex, typeof endSliceIndex);
userString = userString.slice(startSliceIndex , endSliceIndex);
let string = userString;
alert(`Результат: ${string}`);


// Вам необходимо создать программу.