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
    const keysGroceries = Object.keys(groceries)

    let sum = 0
    let sumAll = 0

    shoppingBag.forEach(prod => {
        console.log('prod', prod) //debug
        keysGroceries.forEach(key => {
            console.log('key', key) //debug
            if (prod.product === key) {//да
                sum = prod.quantity * groceries[key].price
                console.log('sum', sum) //debug
                sum =  Number((sum - (sum*(groceries[key].discount/100))).toFixed(2))//округляет до сотіх
                console.log('sum', typeof sum, sum) //debug
            }
        });
        sumAll += sum
        console.log('sumAll', sumAll) //debug
    });

    return sumAll
}

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice', totalPrice);
// Возвращает 37.05