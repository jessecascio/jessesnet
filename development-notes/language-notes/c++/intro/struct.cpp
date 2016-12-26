#include <iostream>
#include "person.h"

using namespace std; 

// g++ -std=c++11 intro.cpp -o name
// ./name

/*
	The only difference between a class and a struct in C++ is that structs have default public members and bases 
	and classes have default private members and bases. Both classes and structs can have a mixture of public and 
	private members, can use inheritance, and can have member functions.

	I would recommend using structs as plain-old-data structures without any class-like features, 
	and using classes as aggregate data structures with private data and member functions.

	In order to ensure that the class definition is the same in each file, structs (and classes) are usually defined in header files.

	When building structs in a function, This function will actually make a copy of the ship local variable that it returns. 
	This means that it will copy every field of the structure into a new variable, one by one.  Avoided with pointers

	Structs are not passed by reference, again use pointers
*/

// struct used to define custom data structures
int main()
{
	Person Jesse, Panda;

	Jesse.name   = "Jesse";
	Jesse.age    = 31;
	Jesse.hourly = 18.92; 

	cout << Jesse.name + "\n";
}


