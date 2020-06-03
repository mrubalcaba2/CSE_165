#include <TicTacToe.h>

void TicTacToe::DrawShape(int index, int xcount, int ocount){
	if(board[index] == 0){

		if(xcount == 0 || xcount == ocount){
			board[index] = 1;
		}
		else if(xcount > ocount){
			board[index] = 2;
		}
	}

}

TicTacToe::TicTacToe(){

	ucm::json ans;
	for (int i = 0; i < 9; i++){
		board.push_back(0); // make the board empty
	}
}

ucm::json TicTacToe::Reset(){

	ucm::json ans;
	for (int i = 0; i < 9; i++){
		board[i] = 0; // make the board empty
	}

	ans["board"] = board;

	return ans;
}


ucm::json TicTacToe::getBoard(){

	ucm::json ans;

	ans["board"] = board;

	return ans;

}


ucm::json TicTacToe::clicked(int x, int y){
	ucm::json ans;
	int xcount = 0;
	int ocount = 0;

	for(int i = 0; i < 9; i++){
		if(board.at(i) == 1){
				xcount++;
		}
		if(board.at(i) == 2){
				ocount++;
		}
	}

	if(x == 0 && y == 0)
		DrawShape(0, xcount, ocount);
	if( x == 0 && y == 1)
		DrawShape(1, xcount, ocount);
	if (x == 0 && y == 2)
		DrawShape(2, xcount, ocount);
	
	if(x == 1 && y == 0)
		DrawShape(3, xcount, ocount);
	if (x == 1 && y == 1)
		DrawShape(4, xcount, ocount);
	if (x == 1 && y == 2)
		DrawShape(5, xcount, ocount);

	if(x == 2 && y == 0)
		DrawShape(6, xcount, ocount);
	if (x == 2 && y == 1)
		DrawShape(7, xcount, ocount);
	if (x == 2 && y == 2)
		DrawShape(8, xcount, ocount);

	ans["board"] = board;

	return ans;
}

