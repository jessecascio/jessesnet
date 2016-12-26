#include <iostream>
using namespace std;

// g++ -std=c++11 intro.cpp -o name
// ./name

/*
	- http://www.tutorialspoint.com/cplusplus/cpp_dynamic_memory.htm

	- stack - memory from within a function
	- heap - unused memory for whole program, can be created as dynamic memory
	- new operator create memory on the heap
	- dynamic memory cant have a name, must be refered to (via pointer)
*/
int main()
{
	
/*
	// int* found = new int[largest]; // if allocation fails, an exception is thrown 
	int *found = new (nothrow) int[largest];

	if (found == nullptr) {
		cout << "No memory\n";
		delete[] found;
		found=0;
		return -1;
	}

	for (int val : array) {
		if (found[val] == 1) {
			delete[] found;
			found=0;
			return val;
		}

		found[val] = 1;
	}

	delete[] found;
	found=0;
	return -1;
	*/
}

