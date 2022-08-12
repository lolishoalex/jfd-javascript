const hero = {
    name: 'Batman',
    health: 100,
    heatHero: function(obj) {
        obj.health = obj.health - 10
        console.log('hero.heatHero', obj.health)//debug
    }
 }

 const enemy = {
    name: 'Joker',
    health: 100,
    heatEnemy: function(obj) {
        obj.health = obj.health - 10
        console.log('enemy.heatEnemy', obj.health)//debug
    }
 } 


//вариант не в обЪекте
 /* const heatEnemy = (enemy) => {
    enemy.health = enemy.health - 10
    console.log('enemy.health', enemy.health)//debug
}


const heatHero = (hero) => {
    hero.health = hero.health - 10
    console.log('hero.health', hero.health)//debug
} */



const startGame = (heroPlayer, enemyPlayer) => {

    while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
        
        const min = 0
        const max = 2
        
        function getRandomNumberInRange(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        let result = getRandomNumberInRange(min, max)
        console.log('result', result)//debug

        if (result === 0) {
        console.log('enemyPlayer.health', enemyPlayer.health)//debug
        enemyPlayer.heatEnemy(heroPlayer)
        } else if (result === 1) {
        console.log('heroPlayer.health', heroPlayer.health)//debug
        heroPlayer.heatHero(enemyPlayer)
        }
    }
    console.log('heroPlayer.health', heroPlayer.health)//debug
    console.log('enemyPlayer.health', enemyPlayer.health)//debug

    /* if (heroPlayer.health > 0) {//вариант с 0
        console.log(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`)
    } else if (enemyPlayer.health > 0) {
        console.log(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`)
    } */

    /* if (heroPlayer.health > enemyPlayer.health) {//вариант сравнения значений health у игроков
        console.log(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`)
    } else {
        console.log(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`)
    } */
    //вариант с тернарным оператором
    heroPlayer.health > enemyPlayer.health
     ? console.log(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`) 
     : console.log(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`)
}
startGame(hero, enemy);