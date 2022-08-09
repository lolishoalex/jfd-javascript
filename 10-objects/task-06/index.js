const people = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];

const ordersArr = [4, 2, 1, 3];

const giveTalonsInOrder = (patients, orders) => {
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
console.log('result', result);
/* Возвращает массив
[
   { id: 4, name: 'Виталий' },
   { id: 2, name: 'Николай' },
   { id: 1, name: 'Максим' },
   { id: 3, name: 'Ангелина' }
]
*/