#include <iostream>
#include <array>
using namespace std;

// g++ -std=c++11 array_duplication.cpp -o out
// ./out

std::array<int,8> numbers = {12342,923422,234278,23429,923422,23421,242342,242342};

int duplicate()
{
	// O(n^2) - could do better, bad solution
	for (int i=0; i<numbers.size(); i++) {
		for (int j=0; j<numbers.size(); j++) {
			if (i != j && numbers[i] == numbers[j]) {
				return numbers[i];
			}
		}
	}

	throw 0;
}

int main()
{
	try {
		cout << "Dupe found: " << duplicate() << "\n";
	} catch(...) {
		cout << "No duplicates\n";
	}	
}
