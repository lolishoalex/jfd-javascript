class Dictionary {
   #name
   #words

   constructor(name) {
      this.#name = name
      this.#words = {}
   }

   get mainName() {
      return this.#name
   }

   set setMainName(name) {
      this.#name = name
   }

   get allWords() {
      return this.#words
   }

   addNewWord(word, description) {
      this.#words[word] = {'word': word, 'description': description}//нет
   }
 
   add(word, description) {
      const key = this.#words[word]?.word
      if (key !== word) {
         this.#words[word] = {'word': word, 'description': description}
         console.log('this.words', this.#words)
      }
   }

   remove(word) {
      delete this.#words[word]
      console.log('this.#words', this.#words)
   }

   get(word) {
      const test = this.#words[word]
      console.log('test', test)
   }

   showAllWords() {
      Object.keys(this.#words).forEach((item) => {
         console.log('item', this.#words[item])
         console.log(`${this.#words[item].word} - ${this.#words[item].description}`)
      })
   }
}

class HardWordsDictionary extends Dictionary {

   constructor(name) {
       super(name)
   }

   add(word, description) {  
      const key = this.get(word)
      if (key !== word) {
         this.addNewWord (word, description)
      }
   }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
 
hardWordsDictionary.remove('неологизм');
hardWordsDictionary.showAllWords();
 
console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.setMainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова дилетант и квант