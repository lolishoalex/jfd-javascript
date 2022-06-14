let javaScriptDescription  = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.' ;
let javaScriptDescriptionLength = javaScriptDescription.length;
console.log(javaScriptDescriptionLength);

javaScriptDescription = javaScriptDescription.slice(1 , Math.floor(javaScriptDescriptionLength/2));
console.log(javaScriptDescription);

javaScriptDescription = javaScriptDescription.replaceAll('a', 'A'); // eng
console.log(javaScriptDescription);
javaScriptDescription = javaScriptDescription.replaceAll('а', 'А'); // ru
console.log(javaScriptDescription);

javaScriptDescription = javaScriptDescription.replaceAll(' ', '');
console.log(javaScriptDescription);

javaScriptDescription = javaScriptDescription.repeat(3);
console.log(javaScriptDescription);

let javaScriptDescriptionLength1 = javaScriptDescription.length;
console.log(javaScriptDescriptionLength1);

javaScriptDescriptionLength1 = Math.floor(javaScriptDescriptionLength1/2);
console.log(javaScriptDescriptionLength1);

javaScriptDescription = javaScriptDescription[javaScriptDescriptionLength1];
console.log(javaScriptDescription);