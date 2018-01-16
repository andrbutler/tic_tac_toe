var comp;
var player;
var playerTurn;
var cWins = 0;
var pWins = 0;
var draws = 0;
var turnNum = 0;
var gameOver = false;

//select peice and start game.
function select(){
	
	player = '';
	comp = '';
	turnNum = 0;
	gameOver = false;
	clearBoard();
	$('.cover').removeClass('isHidden');
	$('.select').removeClass('isHidden');
	$('#selectX').on('click',function(){
		playerTurn = true;
		player = 'X';
		comp = 'O';
		$('.cover').addClass('isHidden');
		$('.select').addClass('isHidden');
	});
	$('#selectO').on('click',function(){
		playerTurn = false;
		player = 'O';
		comp = 'X';
		$('.cover').addClass('isHidden');
		$('.select').addClass('isHidden');
		turnNum = 1;
		setTimeout(compTurn, 2500);
	});
}
//trigger end and start new game.
function endAlert(type, count){
	clearTimeout(compTurn);
	$('.endGame').removeClass('isHidden');
	$('.cover').removeClass('isHidden');
	$('.' + type).text(count);
	if(type == 'draws'){
		$('.winMessage').text('Draw!');
	}else if(type == 'pWins'){
	$('.winMessage').text('Player Wins!')
	}else if(type == 'cWins'){
	$('.winMessage').text('Computer Wins!')
	}
	$('#restart').on('click',function(){
		$('.endGame').addClass('isHidden');
		select();
		});
}
//player inputs.
$('.box').on('click',function(){
	if(playerTurn == true){
		
	if($(this).text() == ''){
		$(this).text(player);
		playerTurn = false;
		turnNum++;
		checkStatus();
		}
		
		if (gameOver == false ){
		setTimeout(compTurn, 2000);
		turnNum++;
		}
	}
});
//ai
function compTurn(){
	
	if(turnNum == 1){
	$('.BR').text(comp);
	}
	if(turnNum == 2){
		if($('.CC').text() == player){
			$('.BR').text(comp);
		}
		else {
			$('.CC').text(comp);
		}
	}
	if(turnNum == 3){
		if($('.CC').text() == player){
			$('.TL').text(comp);
		}else{
			$('.CC').text(comp);
		}
	}
	if(turnNum == 4){
		if($('.CC').text() == player){
			if($('.BC').text() == player && $('.TC').text() == ''){
			$('.TC').text(comp);
			}else if($('.BL').text() == player && $('.TR').text() == ''){
			$('.TR').text(comp);
			}else if($('.CL').text() == player && $('.CR').text() == ''){
			$('.CR').text(comp);
			}else if($('.TC').text() == player && $('.BC').text() == ''){
			$('.BC').text(comp);
			}else if($('.TR').text() == player && $('.BL').text() == ''){
			$('.BL').text(comp);
			}else if($('.BC').text() == player && $('.TC').text() == ''){
			$('.TC').text(comp);
			}else if($('.CR').text() == player && $('.CL').text() == ''){
			$('.CL').text(comp);
			}else if($('.TL').text() == player){
			$('.BL').text(comp);
			}
		}else{
			if($('.BL').text() == player && $('.TR').text() == player){
				$('.BC').text(comp);
			}else if($('.BR').text() == player && $('.TL').text() == player){
				$('.BC').text(comp);
			}else if($('.BR').text() == player && $('.BC').text() == player && $('.BL').text() == ''){
			$('.BL').text(comp);	
			}else if($('.BR').text() == player && $('.BL').text() == player && $('.BC').text() == ''){
			$('.BC').text(comp);	
			}else if($('.BL').text() == player && $('.BC').text() == player && $('.BR').text() == ''){
			$('.BR').text(comp);	
			}else if($('.BL').text() == player && $('.CL').text() == player && $('.TL').text() == ''){
			$('.TL').text(comp);	
			}else if($('.BL').text() == player && $('.TL').text() == player && $('.CL').text() == ''){
			$('.CL').text(comp);	
			}else if($('.TL').text() == player && $('.CL').text() == player && $('.BL').text() == ''){
			$('.BL').text(comp);	
			}else if($('.TL').text() == player && $('.TC').text() == player && $('.TR').text() == ''){
			$('.TR').text(comp);	
			}else if($('.TL').text() == player && $('.TR').text() == player && $('.TC').text() == ''){
			$('.TC').text(comp);	
			}else if($('.TR').text() == player && $('.TC').text() == player && $('.TL').text() == ''){
			$('.TL').text(comp);	
			}else if($('.TR').text() == player && $('.CR').text() == player && $('.BR').text() == ''){
			$('.BR').text(comp);	
			}else if($('.TR').text() == player && $('.BR').text() == player && $('.CR').text() == ''){
			$('.CR').text(comp);	
			}else if($('.BR').text() == player && $('.CR').text() == player && $('.BR').text() == ''){
			$('.BR').text(comp);	
			}else if($('.TC').text() == player && $('.BL').text() == player){
				$('.TL').text(comp);
			}else if($('.TC').text() == player && $('.BR').text() == player){
				$('.TR').text(comp);
			}else if($('.BC').text() == player && $('.TL').text() == player){
				$('.BL').text(comp);
			}else if($('.BC').text() == player && $('.TR').text() == player){
				$('.BR').text(comp);
			}else if($('.CL').text() == player && $('.TR').text() == player){
				$('.TL').text(comp);
			}else if($('.CL').text() == player && $('.BR').text() == player){
				$('.BL').text(comp);
			}else if($('.CR').text() == player && $('.TL').text() == player){
				$('.TR').text(comp);
			}else if($('.CR').text() == player && $('.BL').text() == player){
				$('.BR').text(comp);
			}else if($('.CR').text() == player && $('.BC').text() == player){
				$('.BR').text(comp);
			}else if($('.BC').text() == player && $('.CL').text() == player){
				$('.BL').text(comp);
			}else if($('.CL').text() == player && $('.TC').text() == player){
				$('.TL').text(comp);
			}else if($('.TC').text() == player && $('.CR').text() == player){
				$('.TR').text(comp);
			}else{
				$('.BR').text(comp);
			}
		}
	}
	if(turnNum == 5){
		if($('.CC').text() == comp){
			if($('.TL').text() == ''){
			$('.TL').text(comp);
			}else if($('.TL').text() == player && $('.TR').text() == player){
			$('.TC').text(comp);
			}else if($('.TL').text() == player && $('.TC').text() == player){
			$('.TR').text(comp);	
			}else if($('.TL').text() == player && $('.CL').text() == player){
			$('.BL').text(comp);
			}else{
			$('.CL').text(comp);
			}
		}else{
			if($('.TR').text() == player){
				$('.BL').text(comp);
			}else if($('.BL').text() == player){
				$('.TR').text(comp);
			}else if($('.CL').text() == player){
			$('.CR').text(comp);
			}else if($('.TC').text() == player){
			$('.BC').text(comp);
			}else if($('.CR').text() == player){
			$('.CL').text(comp);
			}else if($('.BC').text() == player){
			$('.TC').text(comp);
			}
		}
	}
	if(turnNum == 6){
		if($('.CC').text() == player){
			if($('.BR').text() == comp && $('.BC').text() == comp && $('.BL').text() == ''){
			$('.BL').text(comp);	
			}else if($('.BR').text() == comp && $('.BL').text() == comp && $('.BC').text() == ''){
			$('.BC').text(comp);	
			}else if($('.BL').text() == comp && $('.CL').text() == comp && $('.TL').text() == ''){
			$('.TL').text(comp);	
			}else if($('.BL').text() == comp && $('.TL').text() == comp && $('.CL').text() == ''){
			$('.CL').text(comp);	
			}else if($('.TL').text() == comp && $('.CL').text() == comp && $('.BL').text() == ''){
			$('.BL').text(comp);	
			}else if($('.TL').text() == comp && $('.TC').text() == comp && $('.TR').text() == ''){
			$('.TR').text(comp);	
			}else if($('.TL').text() == comp && $('.TR').text() == comp && $('.TC').text() == ''){
			$('.TC').text(comp);	
			}else if($('.TR').text() == comp && $('.TC').text() == comp && $('.TL').text() == ''){
			$('.TL').text(comp);	
			}else if($('.TR').text() == comp && $('.BR').text() == comp && $('.CR').text() == ''){
			$('.CR').text(comp);	
			}else if($('.BR').text() == comp && $('.CR').text() == comp && $('.TR').text() == ''){
			$('.TR').text(comp);	
		    }else if($('.BC').text() == player && $('.TC').text() == ''){
			$('.TC').text(comp);
			}else if($('.BL').text() == player && $('.TR').text() == ''){
			$('.TR').text(comp);
			}else if($('.CL').text() == player && $('.CR').text() == ''){
			$('.CR').text(comp);
			}else if($('.TC').text() == player && $('.BC').text() == ''){
			$('.BC').text(comp);
			}else if($('.TR').text() == player && $('.BL').text() == ''){
			$('.BL').text(comp);
			}else if($('.BC').text() == player && $('.TC').text() == ''){
			$('.TC').text(comp);
			}else if($('.CR').text() == player && $('.CL').text() == ''){
			$('.CL').text(comp);
			}
		}else{
			if($('.BR').text() == comp && $('.TL').text() == ''){
				$('.TL').text(comp);
			}else if($('.BC').text() == comp && $('.TC').text() == ''){
				$('.TC').text(comp);
			}else if($('.BL').text() == comp && $('.TR').text() == ''){
				$('.TR').text(comp);
			}else if($('.CL').text() == comp && $('.CR').text() == ''){
				$('.CR').text(comp);
			}else if($('.TL').text() == comp && $('.BR').text() == ''){
				$('.BR').text(comp);
			}else if($('.TC').text() == comp && $('.BC').text() == ''){
				$('.BC').text(comp);
			}else if($('.TR').text() == comp && $('.BL').text() == ''){
				$('.BL').text(comp);
			}else if($('.CR').text() == comp && $('.CL').text() == ''){
				$('.CL').text(comp);
			}else if($('.BR').text() == comp && $('.BC').text() == comp && $('.BL').text() == ''){
			$('.BL').text(comp);	
			}else if($('.BR').text() == comp && $('.BL').text() == comp && $('.BC').text() == ''){
			$('.BC').text(comp);	
			}else if($('.BL').text() == comp && $('.BC').text() == comp && $('.BR').text() == ''){
			$('.BR').text(comp);	
			}else if($('.BL').text() == comp && $('.CL').text() == comp && $('.TL').text() == ''){
			$('.TL').text(comp);	
			}else if($('.BL').text() == comp && $('.TL').text() == comp && $('.CL').text() == ''){
			$('.CL').text(comp);	
			}else if($('.TL').text() == comp && $('.CL').text() == comp && $('.BL').text() == ''){
			$('.BL').text(comp);	
			}else if($('.TL').text() == comp && $('.TC').text() == comp && $('.TR').text() == ''){
			$('.TR').text(comp);	
			}else if($('.TL').text() == comp && $('.TR').text() == comp && $('.TC').text() == ''){
			$('.TC').text(comp);	
			}else if($('.TR').text() == comp && $('.TC').text() == comp && $('.TL').text() == ''){
			$('.TL').text(comp);	
			}else if($('.TR').text() == comp && $('.CR').text() == comp && $('.BR').text() == ''){
			$('.BR').text(comp);	
			}else if($('.TR').text() == comp && $('.BR').text() == comp && $('.CR').text() == ''){
			$('.CR').text(comp);	
			}else if($('.BR').text() == comp && $('.CR').text() == comp && $('.BR').text() == ''){
			$('.BR').text(comp);	
			} else if($('.BR').text() == player && $('.BC').text() == player && $('.BL').text() == ''){
			$('.BL').text(comp);	
			}else if($('.BR').text() == player && $('.BL').text() == player && $('.BC').text() == ''){
			$('.BC').text(comp);	
			}else if($('.BL').text() == player && $('.BC').text() == player && $('.BR').text() == ''){
			$('.BR').text(comp);	
			}else if($('.BL').text() == player && $('.CL').text() == player && $('.TL').text() == ''){
			$('.TL').text(comp);	
			}else if($('.BL').text() == player && $('.TL').text() == player && $('.CL').text() == ''){
			$('.CL').text(comp);	
			}else if($('.TL').text() == player && $('.CL').text() == player && $('.BL').text() == ''){
			$('.BL').text(comp);	
			}else if($('.TL').text() == player && $('.TC').text() == player && $('.TR').text() == ''){
			$('.TR').text(comp);	
			}else if($('.TL').text() == player && $('.TR').text() == player && $('.TC').text() == ''){
			$('.TC').text(comp);	
			}else if($('.TR').text() == player && $('.TC').text() == player && $('.TL').text() == ''){
			$('.TL').text(comp);	
			}else if($('.TR').text() == player && $('.CR').text() == player && $('.BR').text() == ''){
			$('.BR').text(comp);	
			}else if($('.TR').text() == player && $('.BR').text() == player && $('.CR').text() == ''){
			$('.CR').text(comp);	
			}else if($('.BR').text() == player && $('.CR').text() == player && $('.BR').text() == ''){
			$('.BR').text(comp);	
			}
		}
	}
	if(turnNum == 7){
		if($('.CC').text() == player){
			if($('.BL').text() == '' && $('.BC').text() == comp){
				$('.BL').text(comp);
			}else if($('.TC').text() == player){
                            if ($('.BC').text() == comp) {
				$('.TR').text(comp);
                            }else{
				$('.BC').text(comp);
                            }
			}else if($('.BL').text() == player){
				$('.TR').text(comp);
			}else if($('.TR').text() == player){
				$('.BL').text(comp);
			}else if($('.TR').text() == player){
				if($('.CL').text() == player){
					$('.BC').text(comp);
				}
				else{
					$('.CL').text(comp);
				}
			}else if($('.BL').text() == player){
				if($('.TC').text() == player){
					$('.CR').text(comp);
				}else{
					$('.TC').text(comp);
				}
			}
		}
	else if($('.TC').text() == comp){
		if($('.BC').text() == ''){
			$('.BC').text(comp);
		}else{
			$('.CL').text(comp);
		}
	
	}else if($('.CL').text() == comp){
		if($('.CR').text() == ''){
			$('.CR').text(comp);
		}else{
			$('.TC').text(comp);
		}
	}else if($('.BL').text() == player && $('.TL').text() == player){
		$('.CL').text(comp);
	}else if($('.TR').text() == comp && $('.BL').text() == ''){
		$('.BL').text(comp);
	}else{
		$('.TR').text(comp);}
}
	if(turnNum == 8){
			if($('.CC').text() == player){
			if($('.BR').text() == comp && $('.BC').text() == comp && $('.BL').text() == ''){
			$('.BL').text(comp);	
			}else if($('.BR').text() == comp && $('.BL').text() == comp && $('.BC').text() == ''){
			$('.BC').text(comp);	
			}else if($('.BL').text() == comp && $('.CL').text() == comp && $('.TL').text() == ''){
			$('.TL').text(comp);	
			}else if($('.BL').text() == comp && $('.TL').text() == comp && $('.CL').text() == ''){
			$('.CL').text(comp);	
			}else if($('.TL').text() == comp && $('.CL').text() == comp && $('.BL').text() == ''){
			$('.BL').text(comp);	
			}else if($('.TL').text() == comp && $('.TC').text() == comp && $('.TR').text() == ''){
			$('.TR').text(comp);	
			}else if($('.TL').text() == comp && $('.TR').text() == comp && $('.TC').text() == ''){
			$('.TC').text(comp);	
			}else if($('.TR').text() == comp && $('.TC').text() == comp && $('.TL').text() == ''){
			$('.TL').text(comp);	
			}else if($('.TR').text() == comp && $('.BR').text() == comp && $('.CR').text() == ''){
			$('.CR').text(comp);	
			}else if($('.BR').text() == comp && $('.CR').text() == comp && $('.TR').text() == ''){
			$('.TR').text(comp);	
		    }else if($('.BC').text() == player && $('.TC').text() == ''){
			$('.TC').text(comp);
			}else if($('.BL').text() == player && $('.TR').text() == ''){
			$('.TR').text(comp);
			}else if($('.CL').text() == player && $('.CR').text() == ''){
			$('.CR').text(comp);
			}else if($('.TC').text() == player && $('.BC').text() == ''){
			$('.BC').text(comp);
			}else if($('.TR').text() == player && $('.BL').text() == ''){
			$('.BL').text(comp);
			}else if($('.BC').text() == player && $('.TC').text() == ''){
			$('.TC').text(comp);
			}else if($('.CR').text() == player && $('.CL').text() == ''){
			$('.CL').text(comp);
			}else if($('.BC').text() == ''){
				$('.BC').text(comp);
			}
		}else{
			if($('.BR').text() == comp && $('.TL').text() == ''){
				$('.TL').text(comp);
			}else if($('.BC').text() == comp && $('.TC').text() == ''){
				$('.TC').text(comp);
			}else if($('.BL').text() == comp && $('.TR').text() == ''){
				$('.TR').text(comp);
			}else if($('.CL').text() == comp && $('.CR').text() == ''){
				$('.CR').text(comp);
			}else if($('.TL').text() == comp && $('.BR').text() == ''){
				$('.BR').text(comp);
			}else if($('.TC').text() == comp && $('.BC').text() == ''){
				$('.BC').text(comp);
			}else if($('.TR').text() == comp && $('.BL').text() == ''){
				$('.BL').text(comp);
			}else if($('.CR').text() == comp && $('.CL').text() == ''){
				$('.CL').text(comp);
			}else if($('.BR').text() == comp && $('.BC').text() == comp && $('.BL').text() == ''){
			$('.BL').text(comp);	
			}else if($('.BR').text() == comp && $('.BL').text() == comp && $('.BC').text() == ''){
			$('.BC').text(comp);	
			}else if($('.BL').text() == comp && $('.BC').text() == comp && $('.BR').text() == ''){
			$('.BR').text(comp);	
			}else if($('.BL').text() == comp && $('.CL').text() == comp && $('.TL').text() == ''){
			$('.TL').text(comp);	
			}else if($('.BL').text() == comp && $('.TL').text() == comp && $('.CL').text() == ''){
			$('.CL').text(comp);	
			}else if($('.TL').text() == comp && $('.CL').text() == comp && $('.BL').text() == ''){
			$('.BL').text(comp);	
			}else if($('.TL').text() == comp && $('.TC').text() == comp && $('.TR').text() == ''){
			$('.TR').text(comp);	
			}else if($('.TL').text() == comp && $('.TR').text() == comp && $('.TC').text() == ''){
			$('.TC').text(comp);	
			}else if($('.TR').text() == comp && $('.TC').text() == comp && $('.TL').text() == ''){
			$('.TL').text(comp);	
			}else if($('.TR').text() == comp && $('.CR').text() == comp && $('.BR').text() == ''){
			$('.BR').text(comp);	
			}else if($('.TR').text() == comp && $('.BR').text() == comp && $('.CR').text() == ''){
			$('.CR').text(comp);	
			}else if($('.BR').text() == comp && $('.CR').text() == comp && $('.BR').text() == ''){
			$('.BR').text(comp);	
			}else if($('.BR').text() == player && $('.BC').text() == player && $('.BL').text() == ''){
			$('.BL').text(comp);	
			}else if($('.BR').text() == player && $('.BL').text() == player && $('.BC').text() == ''){
			$('.BC').text(comp);	
			}else if($('.BL').text() == player && $('.BC').text() == player && $('.BR').text() == ''){
			$('.BR').text(comp);	
			}else if($('.BL').text() == player && $('.CL').text() == player && $('.TL').text() == ''){
			$('.TL').text(comp);	
			}else if($('.BL').text() == player && $('.TL').text() == player && $('.CL').text() == ''){
			$('.CL').text(comp);	
			}else if($('.TL').text() == player && $('.CL').text() == player && $('.BL').text() == ''){
			$('.BL').text(comp);	
			}else if($('.TL').text() == player && $('.TC').text() == player && $('.TR').text() == ''){
			$('.TR').text(comp);	
			}else if($('.TL').text() == player && $('.TR').text() == player && $('.TC').text() == ''){
			$('.TC').text(comp);	
			}else if($('.TR').text() == player && $('.TC').text() == player && $('.TL').text() == ''){
			$('.TL').text(comp);	
			}else if($('.TR').text() == player && $('.CR').text() == player && $('.BR').text() == ''){
			$('.BR').text(comp);	
			}else if($('.TR').text() == player && $('.BR').text() == player && $('.CR').text() == ''){
			$('.CR').text(comp);	
			}else if($('.BR').text() == player && $('.CR').text() == player && $('.BR').text() == ''){
			$('.BR').text(comp);	
			}else if($('.TL').text() == ''){
				$('.TL').text(comp);
			}else if($('.TC').text() == ''){
				$('.TC').text(comp);
			}else if($('.TR').text() == ''){
			$('.TR').text(comp);
			}else if($('.CL').text() == ''){
			$('.CL').text(comp);
			}else if($('.CC').text() == ''){
			$('.CC').text(comp);
			}else if($('.CR').text() == ''){
			$('.CR').text(comp);
			}else if($('.BL').text() == ''){
			$('.BL').text(comp);
			}else if($('.BC').text() == ''){
			$('.BC').text(comp);
			}else if($('.BR').text() == ''){
			$('.BR').text(comp);
			}
		}
	}
	if(turnNum == 9){
	if($('.TL').text() == ''){$('.TL').text(comp);}
	if($('.TC').text() == ''){$('.TC').text(comp);}
	if($('.TR').text() == ''){$('.TR').text(comp);}
	if($('.CL').text() == ''){$('.CL').text(comp);}
	if($('.CC').text() == ''){$('.CC').text(comp);}
	if($('.CR').text() == ''){$('.CR').text(comp);}
	if($('.BL').text() == ''){$('.BL').text(comp);}
	if($('.BC').text() == ''){$('.BC').text(comp);}
	if($('.BR').text() == ''){$('.BR').text(comp);}
	}
	checkStatus();
	playerTurn = true;
}
function clearBoard(){
	
	$('.TL').text('');
	$('.TC').text('');
	$('.TR').text('');
	$('.CL').text('');
	$('.CC').text('');
	$('.CR').text('');
	$('.BL').text('');
	$('.BC').text('');
	$('.BR').text('');
	
}
//check if end game state has been reached.
function checkStatus(){
	//O wins
	if($('.TL').text() == 'O' && $('.TC').text() == 'O' && $('.TR').text() == 'O'){
		gameOver = true;
		if(player == 'O'){
		pWins++;
		endAlert('pWins', pWins)
		}
		if(comp == 'O'){
			cWins++;
			endAlert('cWins', cWins)
		}
	}
	else if($('.CL').text() == 'O' && $('.CC').text() == 'O' && $('.CR').text() == 'O'){
		gameOver = true;
		if(player == 'O'){
		pWins++;
		endAlert('pWins', pWins)
		}
		if(comp == 'O'){
			cWins++;
			endAlert('cWins', cWins)
		}
	}
	else if($('.BL').text() == 'O' && $('.BC').text() == 'O' && $('.BR').text() == 'O'){
		gameOver = true;
		if(player == 'O'){
		pWins++;
		endAlert('pWins', pWins)
		}
		if(comp == 'O'){
			cWins++;
			endAlert('cWins', cWins)
		}
	}
	else if($('.TL').text() == 'O' && $('.CL').text() == 'O' && $('.BL').text() == 'O'){
		gameOver = true;
		if(player == 'O'){
		pWins++;
		endAlert('pWins', pWins)
		}
		if(comp == 'O'){
			cWins++;
			endAlert('cWins', cWins)
		}
	}
	else if($('.TC').text() == 'O' && $('.CC').text() == 'O' && $('.BC').text() == 'O'){
		gameOver = true;
		if(player == 'O'){
		pWins++;
		endAlert('pWins', pWins)
		}
		if(comp == 'O'){
			cWins++;
			endAlert('cWins', cWins)
		}
	}
	else if($('.TR').text() == 'O' && $('.CR').text() == 'O' && $('.BR').text() == 'O'){
		gameOver = true;
		if(player == 'O'){
		pWins++;
		endAlert('pWins', pWins)
		}
		if(comp == 'O'){
			cWins++;
			endAlert('cWins', cWins)
		}
	}
	else if($('.TL').text() == 'O' && $('.CC').text() == 'O' && $('.BR').text() == 'O'){
		gameOver = true;
		if(player == 'O'){
		pWins++;
		endAlert('pWins', pWins)
		}
		if(comp == 'O'){
			cWins++;
			endAlert('cWins', cWins)
		}
	}
	else if($('.TR').text() == 'O' && $('.CC').text() == 'O' && $('.BL').text() == 'O'){
		gameOver = true;
		if(player == 'O'){
		pWins++;
		endAlert('pWins', pWins)
		}
		if(comp == 'O'){
			cWins++;
			endAlert('cWins', cWins)
		}
	}
	//X wins
	else if($('.TL').text() == 'X' && $('.TC').text() == 'X' && $('.TR').text() == 'X'){
		gameOver = true;
		if(player == 'X'){
		pWins++;
		endAlert('pWins', pWins)
		}
		if(comp == 'X'){
			cWins++;
			endAlert('cWins', cWins)
		}
	}
	else if($('.CL').text() == 'X' && $('.CC').text() == 'X' && $('.CR').text() == 'X'){
		gameOver = true;
		if(player == 'X'){
		pWins++;
		endAlert('pWins', pWins)
		}
		if(comp == 'X'){
			cWins++;
			endAlert('cWins', cWins)
		}
	}
	else if($('.BL').text() == 'X' && $('.BC').text() == 'X' && $('.BR').text() == 'X'){
		gameOver = true;
		if(player == 'X'){
		pWins++;
		endAlert('pWins', pWins)
		}
		if(comp == 'X'){
			cWins++;
			endAlert('cWins', cWins)
		}
	}
	else if($('.TL').text() == 'X' && $('.CL').text() == 'X' && $('.BL').text() == 'X'){
		gameOver = true;
		if(player == 'X'){
		pWins++;
		endAlert('pWins', pWins)
		}
		if(comp == 'X'){
			cWins++;
			endAlert('cWins', cWins)
		}
	}
	else if($('.TC').text() == 'X' && $('.CC').text() == 'X' && $('.BC').text() == 'X'){
		gameOver = true;
		if(player == 'X'){
		pWins++;
		endAlert('pWins', pWins)
		}
		if(comp == 'X'){
			cWins++;
			endAlert('cWins', cWins)
		}
	}
	else if($('.TR').text() == 'X' && $('.CR').text() == 'X' && $('.BR').text() == 'X'){
		gameOver = true;
		if(player == 'X'){
		pWins++;
		endAlert('pWins', pWins)
		}
		if(comp == 'X'){
			cWins++;
			endAlert('cWins', cWins)
		}
	}
	else if($('.TL').text() == 'X' && $('.CC').text() == 'X' && $('.BR').text() == 'X'){
		gameOver = true;
		if(player == 'X'){
		pWins++;
		endAlert('pWins', pWins)
		}
		if(comp == 'X'){
			cWins++;
			endAlert('cWins', cWins)
		}
	}
	else if($('.TR').text() == 'X' && $('.CC').text() == 'X' && $('.BL').text() == 'X'){
		gameOver = true;
		if(player == 'X'){
		pWins++;
		endAlert('pWins', pWins)
		}
		if(comp == 'X'){
			cWins++;
			endAlert('cWins', cWins)
		}
	}
	//Draw	
	else if($('.TL').text() != '' && $('.TC').text() != '' && 
	$('.TR').text() != '' && $('.CL').text() != '' && $('.CC').text() != '' && 
	$('.CR').text() != '' && $('.BL').text() != '' && $('.BC').text() != '' && 
	$('.BR').text() != ''){
		gameOver = true;
		draws++;
		endAlert('draws', draws);
	}
}
$(document).ready(function(){
	select();
})
