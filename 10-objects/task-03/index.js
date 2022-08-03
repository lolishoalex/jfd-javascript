/*Вам необходимо создать функцию, которая будет работать с объектами. Назовите ее handleObject. 

handleObject принимает в себя 3 параметра:

obj. Объект, с которым будет работать функция.
key. ключ объекта.
action. Действие, которое мы будем совершать над объектом.


Параметр action может быть 4-мя значениями:

‘get’. Если action равен ‘get’, то функция handleObject должна вернуть значение ключа key в объекте obj.
‘add’. Если action равен ‘add’, то функция handleObject должна добавить новый ключ key в объект object 
и присвоить значение пустой строки “”. Также из функции необходимо возвратить обновленный объект obj.
‘delete’. Если action равен ‘delete’, то функция handleObject должна удалить свойство key из объекта obj 
и возвратить обновленный объект.
Если action равен любому другому значению, то функция handleObject должна возвратить объект obj.



Протестируйте функцию на этом коде:

const student = {
   name: 'Maxim',
   programmingLanguage: 'JavaScript',
}
 
const result = handleObjects(student, 'programmingLanguage', 'delete');
console.log('result', result);*/

const student = {
   name: 'Maxim',
   programmingLanguage: 'JavaScript',
   key: 'hey',
}

const handleObject = (obj, key, action) => {
   if (action === 'get') {
      obj.key = key
      return obj.key
      } else if (action === 'add') {
      obj.key = ''
      return obj
      } else if (action === 'delete') {
      delete obj.key
      return obj
      } else {
      return obj
      }
}
const result = handleObject(student, 'programmingLanguage', 'get');
console.log('result', result);