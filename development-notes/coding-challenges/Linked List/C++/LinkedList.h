#ifndef LINKEDLIST_H
#define LINKEDLIST_H

#include <stack>
#include <algorithm>
#include <vector>

#include "Node.h"
#include "NodeSort.h"

namespace DataStructures
{

template <class T>
class LinkedList 
{
	Node<T> *active = NULL;
	Node<T> *head   = NULL; 
	Node<T> *tail   = NULL; // grow the tail

	std::stack<Node<T>*> stack;

	int listsize  = 0;
	int iteration = 0;
	bool stackset = false;

	public:
		LinkedList<T>* reset();
   		
   		bool isEmpty();
		int size();
   		
   		bool iterate();
   		bool reverse();

   		T read();
   		T first();
   		T last();

   		void sort(bool asc);

		void insertFirst(T element);
		void insertLast(T element);
		void removeFirst();
		void removeLast();

	private:
		void buildStack();
		bool sortFunction(Node<T>* node1, Node<T>* node2);
};

template <class T>
bool LinkedList<T>::iterate()
{
	if (!this->head) {
		return false;
	}

	if (this->iteration == 0) {
		this->active = this->head;
	} else {

		if (!this->active->next) {
			return false;
		}
		
		this->active = this->active->next;
	}

	this->iteration++;

	return true;
}

template <class T>
bool LinkedList<T>::reverse()
{
	if (!this->stackset) {
		this->buildStack();
	}

	if (this->stack.empty()) {
		this->stackset = false;
		return false;
	}

	this->active = this->stack.top();
	this->stack.pop();
	
	return true;
}

template <class T> 
void LinkedList<T>::sort(bool asc=true) // add desc option
{
	// try to create on the heap w/ new keyword
	std::vector<Node<T>*> container;

	this->reset();

	while (this->iterate()) {
		container.push_back(this->active);
	}

	std::sort (container.begin(), container.end(), NodeSort<T>());
	
	int size = container.size();

	for(int i=0; i < size; i++){

		if (i == 0) {
			this->head = container[i];
		}
		if (i == (size-1)) {
			this->tail = container[i];
		}

		container[i]->next = container[(i+1)] ? container[(i+1)] : NULL;
	}

	this->reset();
	// delete[] container;
}

template <class T> // private
bool LinkedList<T>::sortFunction(Node<T>* node1, Node<T>* node2)
{
	return true;
}

template <class T> // private
void LinkedList<T>::buildStack()
{
	this->reset();

	while (this->iterate()) {
		this->stack.push(this->active);
	}

	this->stackset = true;
}

template <class T>
LinkedList<T>* LinkedList<T>::reset()
{
	if (!this->head) {
		throw false;
	}

	this->active    = this->head;
	this->iteration = 0;

	if (this->stackset) {
		while (!this->stack.empty()) {
			this->stack.pop();
		}
	}
	
	this->stackset = false;

	return this;
}

template <class T>
T LinkedList<T>::read()
{
	if (!this->active) {
		throw false;
	}

	return this->active->read();
}

template <class T>
T LinkedList<T>::first()
{
	if (!this->head) {
		throw false;
	}

	return this->head->read();
}

template <class T>
T LinkedList<T>::last()
{
	if (!this->tail) {
		throw false;
	}

	return this->tail->read();
}

template <class T>
void LinkedList<T>::insertFirst(T data)
{
	Node<T> *element = new Node<T>;
	
	element->set(data);
	element->next = head;

	this->active = element;
	this->head   = element;
	
	if (!this->tail) {
		this->tail = element;
	}

	this->listsize++;
}

template <class T>
void LinkedList<T>::insertLast(T data)
{
	Node<T> *element = new Node<T>;
	
	element->set(data);
	element->next = NULL;

	if (this->tail) {
		this->tail->next = element; 
	}
	
	if (!this->head) {
		this->head = element;
	}

	this->active = element;
	this->tail   = element;
	
	this->listsize++;
}

template <class T>
bool LinkedList<T>::isEmpty()
{
	return this->listsize == 0 ? true : false;
}

template <class T>
int LinkedList<T>::size()
{
	return this->listsize;
}

}

#endif
