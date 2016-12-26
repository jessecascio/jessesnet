#include <iostream>
using namespace std;

// g++ -std=c++11 intro.cpp -o name
// ./name

/*
	MORE
	
	- strings always end with a special character \0, hello -> is really 6 chars
*/

// global variable
string available = "hello world";

int main()
{
	cout << available << "\n";
}

