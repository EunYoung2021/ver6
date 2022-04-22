class Queue {
    constructor() {
      this._arr = [];
    }
    enqueue(item) {
      this._arr.push(item);
    }
    dequeue() {
      return this._arr.shift();
    }
    isEmpty() {
        if(this._arr.length == 0) {
            return true;
        }
        return false;
    }
}

function shuffle_11(array) { 
    for (let index = array.length - 1; index > 0; index--) { 
        // 무작위 index 값을 만든다. (0 이상의 배열 길이 값) 
        const randomPosition = Math.floor(Math.random() * (index + 1)); 
        // 임시로 원본 값을 저장하고, randomPosition을 사용해 배열 요소를 섞는다. 
        const temporary = array[index]; 
        array[index] = array[randomPosition]; 
        array[randomPosition] = temporary; 
    } 
}
const questions_rand = [0, 1, 2, 3, 4, 5, 6, 7]; // 문제 목록
/* 
1번 온음표
2번 점2분음표
3번 2분음표
4번 4분음표
5번 점4분음표
6번 8분음표
7번 16분음표
8번 16분 쉼표
*/
const koreanQuestions = ['온음표', '점2분음표', '2분음표', '4분음표', '점4분음표', '8분음표', '16분음표', '16분 쉼표'];

shuffle_11(questions_rand); // 무작위로 섞기

const questions = new Queue();


for(let i = 0; i < 8; i++) {
    questions.enqueue(questions_rand[i]); // 문제 목록 큐에 넣기
}

currentQuestion = 0; 	  /*현재 문제*/

		//[m,n] 사이에 무작위 정수를 만드는 데 사용됩니다.
		function getRandom(m,n){
			return m +  Math.round((n-m)*Math.random());
		}
		
		//풍선의 생성
		function Balloon(){
			var position = [
				"0 0 ","-96px 0","-192px 0","-288px 0",
				"0 -123px ","-96px -123px","-192px -123px","-288px -123px",
			]
			//속성 쓰기
			this.ele = document.createElement("div");
			this.ele.className = "balloon";//
			this.mark  = 0;
			this.speed = 0 ;
			
			this.reBirth(); //임의의 속성 설정

			var that = this;

			this.ele.addEventListener("animationend",function(){
				// alert("animationend");

				this.className = "balloon";
				that.reBirth();
			})
			// document.body.appendChild(this.ele);
			document.getElementById('game_11_board').appendChild(this.ele);
		}

		//prototype에 풍선의 움직임을 쓰는 방법
		Balloon.prototype.move = function(){
			
			//현재 top 가져오기
			//console.info( this.ele.offsetTop);
			var currentTop = this.ele.offsetTop;

			// currentTop < - 123 이라면 땅속에서 다시 자란다
			if(currentTop < 0){ //123은 풍선의 높이이다.
				console.info("땅속에서 다시 자라나다");
				this.reBirth();
			}
			else{

				//탑을 자꾸 작게 (올라가)
				var newTop = currentTop - this.speed;

				//dom 요소에 업데이트하기
				this.ele.style.top = newTop +"px";
			}

		}

		//prototype에 풍선을 써서 다시 태어나는 방법
		Balloon.prototype.reBirth = function(){

			this.ele.style.top = getRandom(500,600) +"px"; //top 값 설정
			this.ele.style.left = (document.documentElement.offsetWidth - 96) * Math.random() + "px";
			
			this.mark = getRandom(1,8);//무작위로 점수가 하나 [1,8]

			this.speed = this.mark;// 위로 날아가는 속도는 점수에 비례한다: 점수가 클수록 빨리 날아간다.
			
			//this.ele.style.backgroundPosition = position[ this.mark - 1  ] ; //여기 몇 그룹을 만들어서 - 1로 표시합니다.
			this.ele.style.backgroundPositionX  = (this.mark-1)%4 * -96 +"px"
			this.ele.style.backgroundPositionY  = (Math.ceil( this.mark/4) - 1)  * -123 +"px";
			
		}

		Balloon.prototype.die = function(){

				this.ele.className = "balloon blow";
				score_11.update(this.mark);

				console.info("맞았다"+this.mark);
			}
		
		Balloon.prototype.gameover = function(){
			$('.balloon').addClass('blow');
		}
		// var b1 = new Balloon();
		// console.dir(b1);

		// setInterval(function(){
		// 	b1.move();
		// },50);

		//총 추가
		var gun = {
			ele:document.createElement("div"),
			init:function(){
				this.ele.style.zIndex = 100;
				this.ele.style.width  = "96px";
				this.ele.style.height = "96px";
				this.ele.style.background = "url(./assets/img/game-11-img/gun.png) no-repeat center center";
				this.ele.style.position = "absolute";
				// document.body.appendChild(this.ele);
				document.getElementById('game_11_board').appendChild(this.ele);
				var that = this;
				document.body.addEventListener("mousemove",function(e){
					//console.info(e.clientX,e.clientY);
					that.move(e.clientX,e.clientY);

				})
			},
			move:function(x,y){
				x = x - 48;
				y = y - 48;
				this.ele.style.left = x +"px";
				this.ele.style.top  = y +"px";
			}
		}

		//점수 추가
		var score_11 = {
			ele:document.createElement("div"),
			mark:0,
			init:function(){
				this.ele.style.position="absolute";
				this.update(0);						//갱신점수
				//document.body.appendChild(this.ele);
			},
			update:function(s){
				//원점수에 s점수 추가
				this.mark += s;

				//dom 요소에 업데이트하기
				//this.ele.innerHTML = this.mark;
			}
		}

		//구름 추가
		function Cloud(){
			//속성
			this.ele = document.createElement("div");
			this.height = getRandom(30,100);
			this.width = 2  * this.height; //그림의 크기에 비례하여 관계를 유지하기 위해 *2입니다.원도는 1:2이다.
			this.ele.style.backgroundImage = "url(./assets/img/game-11-img/cloud.png)";
			this.ele.style.backgroundRepeat = "no-repeat";
			this.ele.style.backgroundSize = this.width+"px "+this.height+"px";
			this.ele.style.width = this.width +"px";
			this.ele.style.height = this.height +"px";
			this.ele.style.position="absolute";
			this.ele.style.top  = getRandom(0,100) + "px";
			this.ele.style.left = getRandom(0,document.documentElement.offsetWidth-this.width) + "px";


			this.speed = getRandom(1,4); //수평 이동 속도


			//body에 추가하기
			// document.body.appendChild(this.ele);
			document.getElementById('game_11_board').appendChild(this.ele);

			
		}
		//구름 추가 무브 방법
		Cloud.prototype.move = function(){
			//좌우 이동
			//left 값만 바꾸면 왼쪽으로 이동한다고 가정합니다 (상당히 left 값을 계속 작게 변경합니다)
			var oldleft = this.ele.offsetLeft;
			if(oldleft < -1 * this.width){ //맨 왼쪽으로 날아가다
				var newLeft = document.documentElement.offsetWidth ;//화면 맨 오른쪽
				this.ele.style.top  = getRandom(0,100) + "px"; //구름의 top 위치 재설정
				this.ele.style.left = newLeft +"px";
				this.speed = getRandom(1,4); //구름 재설정 속도
			}
			else{
				var newLeft = oldleft - this.speed;

				this.ele.style.left = newLeft +"px";
			}

		}
		var background = {
			src:"img/bg.jpg",  //기본 배경
			setSrc:function(newSrc){
				var newSrc  = newSrc || this.src;
				// document.body.style.backgroundImage = "url("+ newSrc + ")";
				document.getElementById('game_11_board').style.backgroundImage = "url("+ newSrc + ")";
			}
		}
		
		// 문제 문구
		var koreanQuestionsWirte = {
			init:function() {
				currentQuestion = questions.dequeue();
				const quizText = document.createElement('h3');
				quizText.innerHTML = `${koreanQuestions[currentQuestion]}를 맞춰주세요.`;
				quizText.classList.add('quiz-text');
				// document.body.append(quizText);
				document.getElementById('game_11_board').append(quizText);
			},
			update:function() {
				currentQuestion = questions.dequeue();
				document.querySelector('.quiz-text').innerHTML = `${koreanQuestions[currentQuestion]}를 맞춰주세요.`;
			},
			gameover:function(){
				document.querySelector('.quiz-text').innerHTML = `Stage Clear!! 다음 방으로 이동해주세요!`;
			}
		}


		var game = {

			frameIndex:0,
			ballnoonNumber:10,    /*게임 내 풍선 총 개수*/
			currentBallNumber:0,  /*현재 풍선 개수*/
			actors : [],
			start : function(){
				var that = this;  /*저장 this*/

				koreanQuestionsWirte.init();
				background.setSrc('./assets/img/game-11-img/gamebg.jpg'); /*배경 설정*/
				score_11.init();        //초기화 점수
				gun.init();          //gun 초기화

				//body에 클릭 이벤트 추가하기
				// document.body.addEventListener("click",function(e){
                    document.getElementById('game_11_board').addEventListener("click", function(e){

					document.getElementById("audio").play();//총 쏘는 소리
					//console.info(e.clientX,e.clientY);

					//현재 마우스 위치에서 각 풍선의 중심점을 계산합니다.
					for (var i = 0;i< that.actors.length;i++){

						var obj = that.actors[i];
						if(obj.constructor === Balloon){	//풍선 하나하나에 대해서
							//중심점 획득
							var x = obj.ele.offsetLeft +  96/2;
							var y = obj.ele.offsetTop +  96/2;

							// 마우스 위치와 중심점 사이의 거리를 계산합니다. 이 거리가 24 이하면 맞습니다.
							if( Math.pow(x-e.clientX,2) + Math.pow(y-e.clientY,2) < Math.pow(24,2) ){
								//console.info( " 여기 이 풍선이 맞았어. ");
								//console.info(obj)
								console.log(obj.mark);
								console.log(currentQuestion + 1);
								if(obj.mark - 1 == currentQuestion) {
									koreanQuestionsWirte.update();
									obj.die();
								}
								// 문제가 다 되면
								if(questions.isEmpty()) {
									alert('클리어하였습니다!');
									gun.ele.remove();
									$('#game_11_board').css('cursor', 'default');
									var next_button = $("#next");
									next_button.removeClass('disabled');
									next_button.addClass('next');
									$('quiz-text').css('top', '50%');
									koreanQuestionsWirte.gameover();
									Balloon.prototype.gameover();
								}
							}
							
						}
					}
					
				})

				for(var i=0;i<3;i++){ /*구름 넣기*/
					this.actors.push( new Cloud() );
				}


				setInterval(function(){

					that.frameIndex++;

					//모든 풍선이 생성되었는지 검사해 보도록 하겠습니다.
					if(that.frameIndex % 10 == 0 && that.currentBallNumber < that.ballnoonNumber)
					{
						//5. 5초 간격으로 풍선 하나 만들어 볼 필요가 있는지 체크하기
						//console.info(Date.now() +  "시간 간격이 되면, 풍선이 생길지 여부를 검사하러 간다." );
						that.currentBallNumber++ ;//풍선의 수에 1을 더한다.
						that.actors.push( new Balloon() );      //풍선을 액터스에 넣는다.
						
					}
					
					for (var i = 0;i< that.actors.length;i++){
						that.actors[i].move();
					}

					//console.info(that.frameIndex);

				},50)
			}
		}
		
		game.start();