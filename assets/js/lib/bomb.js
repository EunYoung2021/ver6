

class Bomb {

  constructor() {
    this.xx = 8
    // this.y =723
    // this.y =623
    // this.y =580
    this.y = document.documentElement.scrollHeight / 1.5;
    this.pic = new Image()
    this.pic.src = './assets/img/game6/bomb.png'
  }

  draw(canvas, ctx) {
    ctx.drawImage(this.pic,this.xx,this.y,canvas.width/13, canvas.height/9);
    // console.log(canvas.height/9) // 97.777
    // console.log(document.documentElement.clientHeight)
    // console.log(document.documentElement.scrollHeight)
  }

  moveBomb(canvas){
    if(this.xx > canvas.width){
      this.xx = 8;
    } else {
      this.xx += 8;
    }
  }

  moveBomb2(canvas){
    if(this.xx < -10){
      this.xx =canvas.width;
    } else {
      this.xx -= 2;
    }
  }

  moveBomb3(canvas){
    if(this.xx > canvas.width){
      this.xx = 8;
    } else {
      this.xx += 2;
    }
  }
}

export default Bomb;
