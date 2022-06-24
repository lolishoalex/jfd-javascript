// Debug c помощью breakpoints

const developerName = 'Olga';
const progLang = 'JavaScript';

const progLangs = {
    JavaScript: 'JavaScript', // ошибка была тут
    NodeJS: 'NodeJS',
}

if (progLang === progLangs.JavaScript) {
    console.log(`${developerName} является Front-End разработчиком.`);
} else if (progLang === progLangs.NodeJS) {
    console.log(`${developerName} является Back-End разработчиком.`);
} else {
    console.log(`Язык программирования у разработчика ${developerName} не определен.`);
}

// Есть три способа использовать breakpoints
// 1 - Гугл Хром - сорсес - выбираем строку для остановки кода
// 2 - Вижуал Студи Код - также выбираем строку для остановки кода
// 3 - также реализуется в Вижуал Студи Код через слово debugger.