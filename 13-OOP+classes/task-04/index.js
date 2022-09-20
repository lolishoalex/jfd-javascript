class Dictionary {

   constructor(name) {
      this.name = name
      this.words = {}
   }
 
   add(word, description) {
      const key = this.words[word]?.word
      if (key !== word) {
         this.words[word] = {'word': word, 'description': description}
         console.log('this.words', this.words)
      }
      //if (this.words[word]?.word !== word) this.words[word] = {'word': word, 'description': description} //prodvinutiy variant
   }

   remove(word) {
      delete this.words[word]
      console.log('this.words', this.words)
   }

   get(word) {
      const test = this.words[word]
      console.log('test', test)
   }

   showAllWords() {
      Object.keys(this.words).forEach((item) => {
         console.log('item', this.words[item])
         console.log(`${this.words[item].word} - ${this.words[item].description}`)
      })
   }
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
//dictionary.get('Веб-разработчик');
dictionary.remove('JavaScript');
dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие