#include <iostream>
using namespace std;

// g++ -std=c++11 intro.cpp -o name
// ./name

/*
	references and pointers are both considered compound types

	A reference defines an alternative name for an object. A reference type “refers to” another type. 
	We define a reference type by writing a declarator of the form &d, where d is the name being declared.
	Reference is just a different name for an already existing object
	
	A pointer is a compound type that “points to” another type. Like references, pointers are used for 
	indirect access to other objects. Unlike a reference, a pointer is an objectin its own right. 
	Pointers can be assigned and copied; a single pointer can point to several different objects over 
	its lifetime. Unlike a reference, a pointer need not be initialized at the time it is defined. 
	Like other built-in types, pointers defined at block scope have undefined value if they are not initialized.
	Since references arent objects cant point a pointer at a reference, can but will refer to whatever is referenced
	Pointer type must match the objects its pointing to type
	void pointer can hold any type of objet, void *p;
	Can have a pointer to a pointer with **
*/

void reference()
{	
	int ival  = 1024;
	int ival2 = 7823;
	
	int &refVal = ival;  // refVal refers to (is another name for) ival
	
	cout << refVal << "\n";
	ival = 8273; // changing original value, changes the references value
	cout << refVal << "\n";
	
	// int &refVal2; // references must be initialized
	int &refVal2 = ival;
	// dont use & when printing true value, &refVal2 prints the address to original value
	cout << refVal2 << "\n";
	// &refVal2 = ival2; // cant re-assign reference
	refVal2 = ival2; // can reuse var name
	cout << refVal2 << "\n";	
}

void pointer()
{
	int ival = 78;
	int *p;

	p = &ival; // assign to address

	cout << p << "\n"; // prints address
	cout << *p << "\n"; // prints value

	ival = 672;

	cout << *p << "\n"; // changing original changes the pointer

	// changing pointer does not change address, does change ival
	cout << p << "\n"; // prints address
	*p = 735;
	cout << p << "\n";    // prints address
	cout << ival << "\n"; // changed ival

}

int main()
{
	// reference();
	pointer();
}

void pointerReference()
{
	// A reference is similar to a pointer,
	// except that you don’t need to use a prefix ∗ to access the value referred to by the reference

	// T* p - T* is a pointer to T
	// T& r - T& is a reference to T
	// T f(A) - T(A) function taking an argument
}