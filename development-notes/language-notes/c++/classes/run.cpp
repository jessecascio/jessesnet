#include <iostream>
#include "Person.h"
#include "Store.h"
using namespace std;

// g++ -std=c++11 intro.cpp -o name
// ./name

/*
	- can overload operators inside of class i.e. +, -, =,
	- the ~ operator is called when a class is deletes ???
	- can have constant classes and functions, const function cannot edit non static vars
	- const objects can only access const properties

	- namespace declarations should encapsulate the class code
*/

/*
	- templates can have different definitions depending on the calls type 
*/

void classFun();
void templateFun();

int main()
{
	// classFun();
	templateFun();
}

void templateFun()
{
	Store<float> mountainview;
	mountainview.set(12.99);
	mountainview.set(8.99);

	cout << mountainview.get(1) << "\n";

	Store<string> lakeboat;
	lakeboat.set("howdy");
	lakeboat.set("fisher");

	cout << lakeboat.get(1) << "\n";

	Person a, b, c;

	// Person people[10];
	// people[0] = a;
	
	//Store<Person> confined;
	//confined.set(a);
	//confined.set(b);

	// c.setAge(99);

	// confined.set(c);

	// cout << confined.get(2).getAge() << "\n";
}

void classFun()
{
	Person jesse("Seattle");
	// Person sarah = "Baz"; // should work ???
	Person geoff {"Clevland"};
	Person abe = {"Ghettsburg"};

	jesse.setAge(31);
	cout << jesse.getAge() << "\n";
	// cout << jesse.age << "\n"; // by default properties are private
	// jesse.internal(); // cant call a private function
	cout << jesse.available << "\n";

	// special init
	Person singer ("John", "Denver");
	cout << singer.getFullName() << "\n";

	// static counters
	// Person::people = 0; // must be init outside of class

	Person a;
	//cout << Person::people << "\n";

	// constants, refrenced through an instance
	Person b;
	cout << b.connection << "\n";
}
