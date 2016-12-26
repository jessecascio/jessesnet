#include <iostream>
using namespace std;

// g++ -std=c++11 intro.cpp -o name
// ./name

/*
	MORE

	decltype - Sometimes we want to define a variable with a type that the compiler deduces from
		       an expression but do not want to use that expression to initialize the variable
*/

// global variable
string available = "hello world";

int main()
{
	cout << available << "\n";
}

void variables()
{
	/*
		Most computers deal with memory as chunks of bits
		The basic unit of storage, usually a small number of bytes, is referred to as a “word.”
		On most machines a byte contains 8 bits and a word is either 32 or 64 bits, that is, 4 or 8 bytes.
	*/

	/*
							min size
		bool				n/a
		char				8 bits
		short				16 bits (int)
		int 				16 bits
		long				32 bits (int)
		long long			64 bits (int)
		float 				6 sigfigs (single precision floating point)
		double				10 sigfigs (double precision floating point)
		long double			10 sigfigs (extended precision floating point)
	*/

	// floats get truncated when assigned to an int
	int age;
	age=5;
	age=6.5;

	cout << age;
	cout << "\n";

	// can place int in a float
	double ds;
	ds=5;

	cout << ds;
	cout << "\n";

	// can use {} instead of = but wont truncate
	int size{7};
	int len{10};
	// int vag{12.2}, error

	// can auto assign
	auto unknown = "true";

	// sizes
	int isize = 238.1; // 4
	float fsize = 238.1; // 4
	double dsize = 238.1; // 8
	auto asize = 238.1; // 8

	cout << sizeof(isize);
	cout << "\n";
	cout << sizeof(fsize);
	cout << "\n";
	cout << sizeof(dsize);
	cout << "\n";
	cout << sizeof(asize);
	cout << "\n";

	// constants
	const int dmv = 124;
	constexpr double res = dmv * 2; // efficient, must be a constant expression

	// unsigned ints, only +
	int unsigned positive = 7;
	int unsigned negative = -8; // prints as max int, ~4 trillion
	// for tiny int w/ calcs
	char unsigned flag = 1;

	cout << negative << "\n";

	// throws an error
	// int unsigned renegative{-8};

	// can override type definitions with custom definitions
	typedef int hours;
	hours jesse = 78.9;

	cout << jesse << "\n";
}
