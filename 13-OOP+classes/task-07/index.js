class Developer {//sozdala osnovnoy klas Developer

   constructor(fullName, age, position) {
      this.fullName = fullName
      this.age = age
      this.position = position
      this.technologies = []//po usloviu pustoy vasiv i v parametry ne peredaetsya
   }

   code() {//po usloviu pustoy metod

   }

   learnNewTechnology(technology) {
      //parametr technology dobavlyau v konec masiva technologies po usloviu
      this.technologies.push(technology)
   }
}

class JuniorDeveloper extends Developer {//sozdala 1-iy docherniy klas JuniorDeveloper
   constructor(fullName, age) {
       super(fullName, age)
       this.position = 'Junior'//po usloviu v parametry ne peredaetsya a znachenie Junior po umolchaniu
   }

   code() {//pereopredelila metod
      console.log(`${this.position} разработчик пишет код...`)
   }
}

class MiddleDeveloper extends Developer {//sozdala 2-oy docherniy klas MiddleDeveloper
   constructor(fullName, age) {
       super(fullName, age)
       this.position = 'Middle'//po usloviu v parametry ne peredaetsya a znachenie Middle po umolchaniu
   }

   code() {//pereopredelila metod
      console.log(`${this.position} разработчик пишет код...`)
   }
}

class SeniorDeveloper extends Developer {//sozdala 3-iy docherniy klas SeniorDeveloper
   constructor(fullName, age) {
       super(fullName, age)
       this.position = 'Senior'//po usloviu v parametry ne peredaetsya a znachenie Senior po umolchaniu
   }

   code() {//pereopredelila metod
      console.log(`${this.position} разработчик пишет код...`)
   }
}

const developer = new Developer()


const juniorDeveloper = new JuniorDeveloper('Анастасия', 20, 'Junior')
console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position); // 'Анастасия', 20, 'Junior'
juniorDeveloper.code(); // Junior разработчик пишет код...
developer.learnNewTechnology('HTML')
developer.learnNewTechnology('CSS')
developer.learnNewTechnology('JavaScript')
console.log(developer.technologies)

const middleDeveloper = new MiddleDeveloper('Игорь', 25, 'Middle')
console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position); // 'Игорь', 25, 'Middle'
middleDeveloper.code(); // Middle разработчик пишет код...
developer.learnNewTechnology('React')
console.log(developer.technologies)

const seniorDeveloper = new SeniorDeveloper('Максим', 30, 'Senior')
console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position); // 'Максим', 30, 'Senior'
seniorDeveloper.code(); // Senior разработчик пишет код...
developer.learnNewTechnology('NodeJS')
console.log(developer.technologies)