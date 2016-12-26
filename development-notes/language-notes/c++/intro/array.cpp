#include <iostream>
#include <vector>
using namespace std;

// g++ -std=c++11 intro.cpp -o name
// ./name

/*
	- arrays only hold specific types of ojects, and are of fixed size
	- can have better performance than a vector
	- can have an array of pointers but not references
	- when using an array the compiler generally converts array to pointer
	- pointers are also iterators so can move to next element with ++
	- you can use an array to init a vector
*/
int main()
{
	int scores[10];
	int numbers[3] = {13,45,33};

	// cannot assign one array to another

	int photos[3];
	photos[0] = 123;
	cout << photos[0] << "\n";
	photos[-1] = 342; // can have negative keys
	cout << photos[-1] << "\n";	

	// copy an array
	std::array<string,5> arrayc;
	std::copy(array1.begin(), array1.begin()+5, arrayc.begin());
}

/*
Elements are sequentially stored in continuous memory
in arrays. When an array is created, its size should be specified. Even though it may only store one
element at first, the size is required because we have to allocate memory for all of the elements. Since
there may be vacancies in arrays, they are not efficient in memory utilization.

In order to improve space efficiency, dynamic arrays were developed. The class vector in the
standard template library (STL) of C++ is one such example. Memory is allocated for a few elements in
dynamic arrays at first. When the number of elements is greater than the capacity of a dynamic array,
more memory is allocated (the capacity doubles when it has to enlarge the capacity of a vector in C++),
existing elements are copied to the newly allocated space, and the previous memory is released. It
reduces waste in memory, but many extra operations are required to enlarge capacity, so it has negative
impact on time efficiency. 

Therefore, it is better to reduce the times needed to enlarge the capacity of
dynamic arrays. The type ArrayList in both C# and Java is similar to vector in C++.

Because memory allocation for arrays is sequential, it only costs O(1) time to access to an element
based on its index, and it is very efficient. A simple hash table can be implemented with an array to
utilize its advantage of time efficiency. Each index is treated as a key and every element in an array is
treated as a value, so an index and its corresponding element form a pair of key and value.
*/