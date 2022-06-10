let market = 'Manhatten';
console.log(Number(market), Boolean(market), String(market));

let howManyMarkets = 50;
console.log(Number(howManyMarkets), Boolean(howManyMarkets), String(howManyMarkets));


let doesManhattenHaveLifts = true;
console.log(Number(doesManhattenHaveLifts), Boolean(doesManhattenHaveLifts), String(doesManhattenHaveLifts));


let whoIsManhattenOwner = null;
console.log(Number(whoIsManhattenOwner), Boolean(whoIsManhattenOwner), String(whoIsManhattenOwner));


let whoIsManhattenOwnersWife = undefined;
console.log(Number(whoIsManhattenOwnersWife), Boolean(whoIsManhattenOwnersWife), String(whoIsManhattenOwnersWife));

let Manhatten = {
    market: 'Manhatten',
    howManyMarkets: 50,
    doesManhattenHaveLifts: true,
}
console.log(Number(Manhatten), Boolean(Manhatten), String(Manhatten));

let iAmNowInMarket = Symbol(Manhatten);
console.log(Boolean(iAmNowInMarket), String(iAmNowInMarket)); // Number(iAmNowInMarket) - преобразовать невозможно, ошибка

let howManyPeopleLiveInManhatten = 1000n;
console.log(Number(howManyPeopleLiveInManhatten), Boolean(howManyPeopleLiveInManhatten), String(howManyPeopleLiveInManhatten));