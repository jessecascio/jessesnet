#ifndef PERSON_H
#define PERSON_H

#include <string> // uses std namespace

/*
	Bad practice to use using in header files as they are included in each calling file
*/

struct Person {
	std::string name;
	int age=18;
	float hourly=0;
};

#endif