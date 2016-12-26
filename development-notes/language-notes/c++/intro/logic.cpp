#include <iostream>
using namespace std;

// g++ -std=c++11 intro.cpp -o name
// ./name

int main()
{
	// simplified for loop
	for (int x : {10,21,32,43,54,65})
		cout << x << '\n';
}

void loops()
{
	for (auto x : {10,21,32,43,54,65})
	cout << x << '\n';
}
