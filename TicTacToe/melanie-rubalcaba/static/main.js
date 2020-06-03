function updateBoard(board) {
	for (var i in board) {
		if (board[i] == 1) {
			board[i] = '<img src="x.png" style="width:100px; height:100px">';
		} else if (board[i] == 2) {
			board[i] = '<img src="o.png" style="width:100px; height:100px">';
		} else {
			board[i] = '';
		}
	}

	$('#00').html(board[0]);
	$('#01').html(board[1]);
	$('#02').html(board[2]);

	$('#10').html(board[3]);
	$('#11').html(board[4]);
	$('#12').html(board[5]);

	$('#20').html(board[6]);
	$('#21').html(board[7]);
	$('#22').html(board[8]);
}

function isBoardFull(board) {
	for (var i in board) {
		if (board[i] == '' || board[i] == 0) return 0;
	}
	return 1;
}
function nextTurn(board) {
	var xcount = 0;
	var ocount = 0;
	for (var i in board) {
		if (board[i] == '<img src="x.png" style="width:100px; height:100px">') {
			xcount++;
		} else if (board[i] == '<img src="o.png" style="width:100px; height:100px">') {
			ocount++;
		}
	}
	if (xcount == 0 || xcount == ocount) {
		console.log(xcount, ocount);
		document.getElementById('testID').innerHTML = 'Player Ones Turn!';
	} else if (xcount > ocount) {
		console.log('2');
		document.getElementById('testID').innerHTML = 'Player Twos Turn!';
	}
	checkDraw(board);
	checkRows(board);
	checkColumns(board);
	checkDiagonals(board);
}

function checkDraw(board) {
	if (isBoardFull(board) == 1) {
		document.getElementById('testID').innerHTML = 'Its a draw!';
	}
}

function checkWin(board) {
	if (board == '<img src="x.png" style="width:100px; height:100px">') {
		document.getElementById('testID').innerHTML = 'Player 1 Wins!';
	} else if (board == '<img src="o.png" style="width:100px; height:100px">') {
	}
	/*	else{
		if(isBoardFull(board) == 1){
		document.getElementById("testID").innerHTML = 'Its a draw!';
		}
	}*/
}
function checkRows(board) {
	//	console.log(board);
	if (board[0] == board[1] && board[1] == board[2]) {
		checkWin(board[0]);
	} else if (board[3] == board[4] && board[4] == board[5]) {
		checkWin(board[3]);
	} else if (board[6] == board[7] && board[7] == board[8]) {
		checkWin(board[6]);
	}
}

function checkColumns(board) {
	if (board[0] == board[3] && board[3] == board[6]) {
		checkWin(board[0]);
	} else if (board[1] == board[4] && board[4] == board[7]) {
		checkWin(board[1]);
	} else if (board[2] == board[5] && board[5] == board[8]) {
		checkWin(board[2]);
	}
}

function checkDiagonals(board) {
	if (board[0] == board[4] && board[4] == board[8]) {
		checkWin(board[0]);
	} else if (board[2] == board[4] && board[4] == board[6]) {
		checkWin(board[2]);
	}
}

$(document).ready(function() {
	$.get('/init', {}, function(response) {
		var data = JSON.parse(response);

		var board = data['board'];

		updateBoard(board);

		$('#resetButton').click(function() {
			var location = { x: 3, y: 3 };
			$.get('/click', location, function(response) {
				var data = JSON.parse(response);
				var board = data['board'];
				console.log(board);
				for (var i in board) {
					board[i] = '';
				}
				updateBoard(board);

				nextTurn(board);
			});
		});
		$('#00').click(function() {
			var location = { x: 0, y: 0 };
			$.get('/click', location, function(response) {
				var data = JSON.parse(response);

				var board = data['board'];

				updateBoard(board);

				nextTurn(board);
			});
		});
		$('#01').click(function() {
			var location = { x: 0, y: 1 };
			$.get('/click', location, function(response) {
				var data = JSON.parse(response);

				var board = data['board'];

				updateBoard(board);

				nextTurn(board);
			});
		});
		$('#02').click(function() {
			var location = { x: 0, y: 2 };
			$.get('/click', location, function(response) {
				var data = JSON.parse(response);

				var board = data['board'];

				updateBoard(board);

				nextTurn(board);
			});
		});
		$('#10').click(function() {
			var location = { x: 1, y: 0 };
			$.get('/click', location, function(response) {
				var data = JSON.parse(response);

				var board = data['board'];

				updateBoard(board);

				nextTurn(board);
			});
		});
		$('#11').click(function() {
			var location = { x: 1, y: 1 };
			$.get('/click', location, function(response) {
				var data = JSON.parse(response);

				var board = data['board'];

				updateBoard(board);

				nextTurn(board);
			});
		});
		$('#12').click(function() {
			var location = { x: 1, y: 2 };
			$.get('/click', location, function(response) {
				var data = JSON.parse(response);

				var board = data['board'];

				updateBoard(board);

				nextTurn(board);
			});
		});
		$('#20').click(function() {
			var location = { x: 2, y: 0 };
			$.get('/click', location, function(response) {
				var data = JSON.parse(response);

				var board = data['board'];

				updateBoard(board);

				nextTurn(board);
			});
		});
		$('#21').click(function() {
			var location = { x: 2, y: 1 };
			$.get('/click', location, function(response) {
				var data = JSON.parse(response);

				var board = data['board'];

				updateBoard(board);

				nextTurn(board);
			});
		});
		$('#22').click(function() {
			var location = { x: 2, y: 2 };
			$.get('/click', location, function(response) {
				var data = JSON.parse(response);

				var board = data['board'];

				updateBoard(board);

				nextTurn(board);
			});
		});
	});
});
