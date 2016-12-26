#ifndef PLAYER_H
#define PLAYER_H

/**
 * Player
 */
struct Player {
	int id;
	std::string name;
	char token;

	// @todo Check how to do statically
	bool validName(std::string name)
	{
		// @todo use regex and string length, only letters and numbers
		return true;
	}
};

#endif