#include <iostream>
#include <vector>
using namespace std;

// g++ -std=c++11 intro.cpp -o name
// ./name

/*
	A vector is a collection of objects all having the same type, often called a container
	A vector is a class template, c++ supports both class and function templates.  templates are not functions
	or classes, rather instructions to the compiler on how to generate classes or functions.  Using a template called instantiation 
	Which is instantiate by the template determined by the <> after the template name
	Common use to define as empty, and populate at runtime (can be done efficiently)

	.push_back() - append value to end of vector
	.size() - returns the count
	.empty() - checks if empty

	** cann't use the range for loop if vector is continually growing
	** must pass values by reference into loops if you want to change them
*/
int main()
{
	vector<int> container; // dont have to initiate
	// vector<int> isetup = {43,64,34,26,49.8}; // wont automatically cast
	vector<int> setup2 = container; // make a copy, or setup2(setup)
	vector<int> config (10, 9); // 10 entries, all 9 ... can omit value and just use size (n)

	vector<int> setup = {43,64,34,26,49}; // dont need the =

	for (auto &score : setup) {
		cout << score << "\n";
	}

	cout << setup[2] << "\n"; // defaults to 0 if not set
	setup[11] = 78232; // can reasign
	cout << setup[11] << "\n"; 

	// setup["key"] = 89; // cant have a string key
	
	setup[892.89] = 89; // can have decimal values, and access as an int
	cout << setup[892] << "\n"; // can also access as decimal

	vector<int> holder;
	// cant subscript unless vector already has a value
	// holder[0] = 13; // seg faults
	holder.push_back(12);
	cout << holder[0] << "\n"; 
	holder[1] = 13;
	cout << holder[1] << "\n"; // this is ok 

	// cant use subscript with string values
	vector<string> v;
	v.push_back("init");
	v[1] = "seg faults";

	// can init with a single value
	vector<int> v(1);
	v[0] = 213; // ok
}

