#include <iostream>
#include "LinkedList.h"

using namespace DataStructures;
using namespace std;

void reverse(LinkedList<int> list);
void iterate(LinkedList<int> list);
void sort(LinkedList<int> list);

int main()
{
	LinkedList<int> list;

	list.insertFirst(1);
	list.insertFirst(14);
	list.insertFirst(23);
	list.insertFirst(2938);
	list.insertFirst(2183);
	list.insertFirst(12);

	cout << "\n";
	
	iterate(list);
	reverse(list);
	sort(list);
}

void sort(LinkedList<int> list)
{
	list.sort();
	list.reset();

	cout << "SORTED: \n";

	while(list.iterate()) {
		cout << list.read() << "\n";
	};

	cout << "\n";
}

void reverse(LinkedList<int> list)
{
	list.reset();

	cout << "REVERSED: \n";

	while(list.reverse()) {
		cout << list.read() << "\n";
	}	

	cout << "\n";
}

void iterate(LinkedList<int> list)
{
	list.reset();

	cout << "DISPLAYED: \n";

	while(list.iterate()) {
		cout << list.read() << "\n";
	};
		
	cout << "\n";
}