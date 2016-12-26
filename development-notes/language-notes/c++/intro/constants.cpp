#include <iostream>
using namespace std;

// g++ -std=c++11 intro.cpp -o name
// ./name

// global variable
string available = "hello world";

int main()
{
	cout << available << "\n";
}

void pointerReference()
{
	// A reference is similar to a pointer,
	// except that you don’t need to use a prefix ∗ to access the value referred to by the reference

	// T* p - T* is a pointer to T
	// T& r - T& is a reference to T
	// T f(A) - T(A) function taking an argument
}

void variables()
{
	// constants
	const int dmv = 124;
	constexpr double res = dmv * 2; // efficient, must be a constant expression

	// To define a single instance of a const variable, we use the keyword extern
	// i.e. will be same constant as defined in another file
	extern const int word; // can initialize as pulled from other source

	// constants can also be references or pointers
}
