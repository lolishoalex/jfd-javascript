let temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');
console.log('temperatureInCelsius', temperatureInCelsius, typeof temperatureInCelsius)
temperatureInCelsius = Number(temperatureInCelsius)
console.log('temperatureInCelsius', temperatureInCelsius, typeof temperatureInCelsius)

 
if (temperatureInCelsius === 0) {
   alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
   alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}
 
const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
console.log('temperatureInFahrenheit', temperatureInFahrenheit)
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);
console.log(temperatureInCelsius)
console.log(temperatureInFahrenheit)