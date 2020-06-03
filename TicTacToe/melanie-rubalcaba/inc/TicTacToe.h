#ifndef TICTACTOE_H
#define TICTACTOE_H

#include <vector>
#include <server.h>

class TicTacToe{

	std::vector<int> board;

public:
	TicTacToe();					// Default constructor
	//TicTacToe(const TicTacToe&);	// Copy Constructor
	void DrawShape(int,int,int);
	void checkWin(int);
	void checkRows();
	void checkColumns();
	void checkDiagonals();

	ucm::json Reset();
	ucm::json getBoard();
	ucm::json clicked(int, int);

	//~TicTacToe();					// Destructor

};



#endif
