#include <iostream>
using namespace std;

// g++ -std=c++11 intro.cpp -o name
// ./name

int main()
{
	// to output: std.cout << "Do you want to proceed (y or n)?\n";
	// to input : std.cin >> var
	char answer='n';
	
	cout << "Do you think I am smart [y/n]: ";
	cin  >> answer; // automatic new line
	
	// dont need a break;
	switch (answer) {
		case 'y':
			cout << "whoop";
		case 'n':
			cout << "boo";
		default:
			cout << "Youre not";
	}

	cout << "\n";
}