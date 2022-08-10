// 1й вариант решения - через итерацию people

const people = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];

const ordersArr = [4, 2, 1, 3];

const giveTalonsInOrder = (patients, orders) => {
    
    const NewOrders = patients.map((patient) => {
        let nameOrder = '';
        console.log('patient', patient);//debug
        orders.forEach(item => {
            console.log('item', item);//debug
            console.log('item === patient.id', item === patient.id);//debug
            if (item === patient.id) {
                nameOrder = patient.name
                console.log('nameOrder', nameOrder);//debug
            }
        });
        return {id: patient.id, name: nameOrder}
    })
    console.log('NewOrders',NewOrders)//debug

    return orders.map((position) => {
        console.log('position', position);//debug
        return patients.find((patient) => {
            console.log('patient', patient);//debug
            return patient.id === position
        })
    })

    //return orders.map(position => patients.find(patient => patient.id === position))

}
const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);

// 2й вариант решения -  через итерацию ordersArr

/* const giveTalonsInOrder = (patients, orders) => {
        //берем очередь из массива orders, итерируем 
        //чтобы возвратить новый массив с данными из patients
        const NewOrders = orders.map((item) => {
            let nameOrder = '';
            patients.forEach(patient => {
                if (patient.id === item) {
                    nameOrder = patient.name
                }
            });
            return {id: item, name: nameOrder}
        })
        console.log('NewOrders',NewOrders)//debug

    return NewOrders
}
const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result); */

/* Возвращает массив
[
   { id: 4, name: 'Виталий' },
   { id: 2, name: 'Николай' },
   { id: 1, name: 'Максим' },
   { id: 3, name: 'Ангелина' }
]
*/

//тут два варианта решения