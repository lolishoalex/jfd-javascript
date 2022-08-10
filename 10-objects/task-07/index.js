/* Функция getTotalPriceOfShoppingBag должна возвращать общую стоимость 
всех товаров в корзине с учетом скидок и с учетом указанных клиентом 
количеством продуктов. Итоговое значение должно быть округлено до сотых. 
Это можно сделать с помощью toFixed (https://developer.mozilla.org/...) */

const groceries = {
   "Orange Juice": {
       price : 1.5,
       discount: 10,
   },
   "Chocolate": {
       price : 2,
       discount : 0,
   },
// more items...
}

const shoppingBag = [
    { product: 'Chocolate', quantity: 3 },
    { product: 'Orange Juice', quantity: 23 },
 ]

const getTotalPriceOfShoppingBag = (shoppingBag) => {
    //сначала посчитать сумму товаров со скидкой
    const keysGroceries = Object.keys(groceries)
    console.log('keysGroceries', keysGroceries) //debug

    let sumOfProductDiscount = 0;
    let groceriesKey = '';

    shoppingBag.forEach(prod => {
        console.log('prod', prod.product)
        keysGroceries.forEach(key => {
            groceriesKey = key
            console.log('groceriesKey', groceriesKey) //debug
            console.log('prod.product === groceriesKey', prod.product === groceriesKey) //debug
            console.log(groceries.keysGroceries) //debug
            /*if (prod.product === groceriesKey) {
                sumOfProductDiscount = (prod.quantity * ...price) / ...discount
            }*/
        });
    });

    //затем общую стоимость всех товаров
    /* Использовать toFixed */
    //return

}

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice', totalPrice);
// Возвращает 37.05

