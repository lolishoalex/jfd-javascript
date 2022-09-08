const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,
  checkChancesToWin: function (defenderObject) {
    let chancesToWin = 0
    const arrChancesToWin = []
    Object.keys(defenderObject).forEach((item) => {
      if (this[item] > defenderObject[item]) {
        chancesToWin = chancesToWin + 1
      }
    })
    arrChancesToWin.push(chancesToWin, Object.keys(defenderObject).length)
    return arrChancesToWin
  },
  improveArmy: function () {
    for (let key in this) {
      if (typeof this[key] === 'number') {
        this[key] = this[key] + 5;
      }
    }
  },
  attack: function (defender) {//ne znau! 1/4=0.25*100=25%
    const arr = this.checkChancesToWin(defender)
    if (arr[0]/arr[1]*100 < 70) {
      console.log(`Наши шансы равны ${arr[0]}/${arr[1]}. Необходимо укрепление!`)
      this.improveArmy()
    } else {
      console.log('Мы усилились! Мы несомненно победим! Наши шансы высоки!')
    }
  },
}

const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
}

attacker.attack(defender)
attacker.attack(defender)
attacker.attack(defender)