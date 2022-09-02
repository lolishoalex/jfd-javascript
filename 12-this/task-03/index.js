const footballer = {
  fullName: 'Cristiano Ronaldo',
  /*
  // так не работает (this отсутствует у стрелочной функции)   
  attack: () => {
      console.log(${this.fullName} сейчас с мячом и начинает атаку!);
      console.log(this) //Debug
  },
  */
  /*   // заменяем стрелочную функцию на обычную
  attack: function () {
    console.log(${this.fullName} сейчас с мячом и начинает атаку!);
    // console.log(this) //Debug
  }, */
  attack() {
    let arrow = () => {
      return console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
    };
    arrow();
  },
  scoreGoal(sound) {
      console.log(`${this.fullName} забил гол! Вот это да!`);
      this.celebrate(sound);
  },
  celebrate(sound) {
      console.log(sound);
  },
  goToSubstitution: function(newPlayer) {
      console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
  }
}

const attack = footballer.attack
attack.bind(footballer)();

const score = footballer.scoreGoal;
score.call(footballer, 'Сиииии')

const substitute = footballer.goToSubstitution;
substitute.apply(footballer, ['Paulo Dibala'])