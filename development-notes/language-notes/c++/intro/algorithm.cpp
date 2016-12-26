#include <iostream>
#include <vector>
#include <algorithm> 
using namespace std;

// g++ -std=c++11 intro.cpp -o out
// ./out

vector<int> vec {2,928,8,9,1,83,9,21,47,28,18,96,82,47,57,18,92,901};

bool isSorted();

int main()
{
	cout << "the following is sorted: " << isSorted() << "\n";
}

bool isSorted()
{
	std::array<int,17> sortie {2,4,1,3,8,93,947,83,478,28,273,58,47,12,48,59,28};

	return std::is_sorted(sortie.begin(), sortie.end());
}