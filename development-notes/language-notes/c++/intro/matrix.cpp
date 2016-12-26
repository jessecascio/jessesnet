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
	int m[4][4]=
    {
        {1,2,3,4},
        {5,8,10,15},
        {18,28,34,47},
        {67,68,78,90}
    };

    vector<int> v;

    // flatten matrix
    for (int i=0; i<4; i++) {
    	for (int j=0; j<4; j++) {
    		v.push_back(m[i][j]);
    	}
    }

    std::vector<int>::iterator it = std::find(v.begin(), v.end(), 18);

    if (it != v.end())
    	cout << "Found: " << *it << "\n";
    else
    	cout << "Not Found" << "\n";
}
