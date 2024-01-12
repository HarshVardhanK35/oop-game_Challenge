function Player (name){
  this.name = name;
  this.lvl = 1;
  this.points = 0
}

Player.prototype.gainXp(xp){
  this.points = this.points + 1;

  if(this.points >= 10){
    this.lvl = this.lvl + 1;
    this.points = this.points - 10;
  }
}

Player.prototype.describe = function( ){
  return (`${this.name} is at level - ${this.lvl} with points ${this.points}`)
}

const player1 = new Player('Bob');
const player2 = new Player('Alice');

player1.gainXp(5)
player2.gainXp(7)
player1.gainXp(2)
player2.gainXp(1)
player1.gainXp(8)
player2.gainXp(9)
player1.gainXp(3)
player2.gainXp(7)
player1.gainXp(2)
player2.gainXp(4)

