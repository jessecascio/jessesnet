#include <iostream>
using namespace std;

// g++ -std=c++11 intro.cpp -o name
// ./name

/*
	Task - replace each space with a %20
*/

int main()
{
	string str = " heel ow rold from  all  ";

	// cout << "Please enter a string: ";
	// cin >> str;

	std::size_t found = str.find(' ');

	while (found != std::string::npos) {
		str.replace(found, 1, "%20");
		found = str.find(" ");
	}

	cout << str << "\n";
}

