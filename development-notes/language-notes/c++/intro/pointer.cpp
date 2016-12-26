#include <iostream>
#include <vector>
using namespace std;

// g++ -std=c++11 intro.cpp -o name
// ./name

/*
	Book Notes

	- Programs define memory usage before being ran, via variable declaration
	- Pointers used to add more memory to programs while they are running
	- They "point" to locations in memory, similar concept to a link, linking to a var or data structure
	- Can ask for more memory and point to it via pointers
	- think of memory as a long array of chars, holding 1 byte of val 0-255, or a spreadshow row
	- it is much more efficient to pass a pointer into a function than a large dataset, prevents copying of the struct
	- using a pointer without initializing it first can lead to bad memory usage
	- when using pointers know you always have the most current copy of the var
	- can init a pointer with = NULL, then check != NULL
	- references are similar but once init they cannot be changed to reference something different

	- stack - part of memory used to store variables from a function currently in scope, being executed
	- heap (free store) - unallocated which can be requested in chunks, managed by the OS
	- all memory taken from the heap, must be placed back on the heap 	

	- dynamic allocation is requesting as much memory as needed while the program is running
	- use the new keyword to get a pointer from the heap
	- all dynamic vars must free the memory once they are done using it
	- returned to the heap with the delete keyword, should also reset the pointer = NULL
	- can create dynamic arrays: int *p = new int[size]

*/

/*
	- http://www.cplusplus.com/doc/tutorial/pointers/

	- useful for having multiple vars point to same large space in memory
	- passing variables by reference is done with pointers
	- can use large data structures outside of the defined scope
	- Get in the habit of assigning your pointers to 0 both when they are declared 
	  (unless assigned to another address), and after they are deleted. It will save you a lot of grief.
*/

void pointers();
void dynamic();
int* dynamicArray(int s);

int main()
{	
	int var = 1;
	int *ptr;
	
	// set the pointer equal to the reference (memory location) of the var
	ptr = &var;

	cout << ptr << "\n"; // shows memory address
	cout << *ptr << "\n"; // shows the value, * is dereference

	// can set the actual value
	*ptr = 5;
	// which changes the original variable name
	cout << var << "\n";

	// dynamic memory
	int *ptrs = new int;
	cout << *ptrs << "\n"; // defaults to a value of 0
	cout << ptrs << "\n"; // address is on the heap

	exit(1);
}

int* dynamicArray(int s)
{
	int *p = new int[s];
	p[0] = 12;
	p[1] = 32;

	return p;

	/*
	int *p;
	p = dynamicArray(x);
	cout << p[1] << "\n";
	*/
}

void dynamic()
{
	int *p = new int;
	*p = 4;

	cout << *p << "\n";

	delete p;
	p = NULL;

	int *o = new int[10];
	delete[] o;
}

void pointers()
{
	int x = 5;
	int *p = &x;

	cout << *p << "\n"; // prints value
	cout << p << "\n"; // prints memory location

	// int o = NULL;
	// *o = 2;

	int &r = x; // cant be reassigned

	cout << &r << "\n"; // memory location
	cout << r << "\n";  // value

}
