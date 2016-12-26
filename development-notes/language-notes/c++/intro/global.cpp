#include <iostream>
#include <vector>
using namespace std;

// g++ -std=c++11 intro.cpp -o name
// ./name

vector<int> vec {2,928,8,9,1,83,9,21,47,28,18,96,82,47,57,18,92,901};

int ohN()
{
	vector<int> found (vec.size()+1, 0);

	cout << "starting " << found[901] << "\n";
	cout << "starting found \n";

	for (int val : found) {

		cout << "in found " << val << "\n";
	}

	for (int val : vec) {
		cout << "val " << val << "\n";
		cout << "fval " << found[val] << "\n";

		if (found[val] == 1) {
			found.clear();
			return val;
		}

		found[val] = 1;
	}

	return 0;
}

int main()
{
	// simplified for loop
	cout << "dupe " << ohN() << "\n";
	cout << "dupe " << ohN() << "\n";
}

