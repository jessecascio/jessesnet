#include <iostream>
#include <limits> 

#include "player.h"
#include "gamepiece.h"
#include "game.h"

using namespace std;

// g++ -std=c++11 connectfour.cpp -o name
// ./name

void buildBoard(Game& game);
void setPlayers(Game& game);

/**
 * Challenging game of Connect Four
 */
int main()
{
	Game game;
	
	buildBoard(game);
	setPlayers(game);
		
	// game on 
	game.displayBoard();

	while (true) {		

		int column = 0;
		bool valid = false;

		do {
			
			cout << game.player->name << " (" << game.player->token << ") - Add to which column: ";
			cin >> column;

			if (cin.fail()) {
				std::cin.clear(); 
   				std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n'); 
				continue;
			}

			if (column <= game.width && column > 0) {			
				try {
					game.addPiece(column);
					valid = true;
				} catch (bool overflow) {
					// ran out of vertical space, try again
				} 
			}

		} while (!valid);

		// check for connect four
		if (game.connectFour()) {
			game.showWinner();
			game.displayBoard();
			break;
		}

		// next players turn
		game.nextPlayer();
		game.displayBoard();
	}

	// good habits
	game.destruct();
}

/**
 * Build the board from entered dimensions
 */
void buildBoard(Game& game)
{
	int x,y;
	bool validboard = false;

	do {

		cout << "\nEnter board width: ";
		cin >> x;

		if (cin.fail()) {
			std::cin.clear(); 
   			std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n'); 
			continue;
		}

		cout << "Enter board height: ";
		cin >> y;

		if (cin.fail()) {
			std::cin.clear(); 
   			std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n'); 
			continue;
		}

		if (game.validSize(x,y)) {
			
			validboard = true;

			try {
				game.buildBoard(x, y);
			} catch (bool cantBuild) {
				cout << "Error building the game board \n\n";
				exit(1);
			}

		} else {
			cout << "\nBoard width/height must be between 4 and 20 \n";
		}

	} while (!validboard);
}

/**
 * Set the players names
 */
void setPlayers(Game& game)
{
	string player1, player2;
	bool valid = false;

	cout << "\n";

	do {
		
		cout << "Enter Player 1 Name (no spaces): ";
		cin >> player1;

		if (cin.fail()) {
			std::cin.clear(); 
   			std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n'); 
			continue;
		}

		if (game.validName(player1)) {
			valid = true;
		}

	} while (!valid);

	game.players[0].name = player1;
	valid = false;

	do {
		
		cout << "Enter Player 2 Name (no spaces): ";
		cin >> player2;

		if (cin.fail()) {
			std::cin.clear(); 
   			std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n'); 
			continue;
		}

		if (game.validName(player2)) {
			valid = true;
		}

	} while (!valid);

	game.players[1].name = player2;	
}