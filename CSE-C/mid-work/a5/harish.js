var x;
var max = 10;
var user = [];
var chances = 0;

function newGame(){
	window.location.reload();
}

function initialize(){
	x = Math.floor(Math.random() * 100 + 1);
}

function comprar(){
	var y = " "+document.getElementById('inter').value;

	user.push(y);
	console.log(user);
	document.getElementById('guess').innerHTML = user;

	chances++;
	document.getElementById('chances').innerHTML = chances;

	if(user.length< max){
		if(y>x){
			document.getElementById('ans').style.visibility = "visible";
			document.getElementById('wrri').style.visibility = "visible";
			document.getElementById('ans').innerHTML = 'Your guess is high.';
			document.getElementById('inter').value = "";
		}
		else if(y<x){
			document.getElementById('ans').style.visibility = "visible";
			document.getElementById('wrri').style.visibility = "visible";
			document.getElementById('ans').innerHTML = 'Your guess is low.';
			document.getElementById('inter').value = "";
		} 
		else if(x==y){
			document.getElementById('wrri').style.visibility = "visible";
			document.getElementById('wrri').innerHTML = "You Got It!";
			document.getElementById('wrri').style.backgroundColor = "green";
			document.getElementById('ans').style.visibility = "hidden";
		}
	}
	else{
		if(y>x){
			document.getElementById('ans').innerHTML = 'You Lose!';
		}
		else if(y<x){
			document.getElementById('ans').innerHTML = 'You Lose!';
		}
	}

}

