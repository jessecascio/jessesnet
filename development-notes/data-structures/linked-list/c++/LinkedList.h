#ifndef LINKEDLIST_H
#define LINKEDLIST_H

#include "Node.h"

namespace DataStructures
{

template <class T>
class LinkedList 
{
	Node<T> *active = NULL;
	Node<T> *head   = NULL; 
	Node<T> *tail   = NULL; // grow the tail

	int listsize  = 0;
	int iteration = 0;

	public:
		LinkedList<T>* reset();
   		
   		bool isEmpty();
		int size();
   		bool iterate();

   		T read();
   		T first();
   		T last();

		void insertFirst(T element);
		void insertLast(T element);
		void removeFirst();
		void removeLast();
		
		// int before(int position);
		// int after(int position);
		// void insertBefore(int position, T element); // should these be after nodes ???
		// void insertAfter(int position, T element); // after a node, insert this node
};

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

template <class T>
bool LinkedList<T>::iterate()
{
	if (!this->head || !this->active->next) {
		return false;
	}

	if (this->iteration == 0) {
		this->active = this->head;
	} else {
		this->active = this->active->next;
	}

	this->iteration++;

	return true;
}

template <class T>
LinkedList<T>* LinkedList<T>::reset()
{
	if (!this->head) {
		throw false;
	}

	this->active    = head;
	this->iteration = 0;

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
	// delete element; ??? needed
}

}

#endif
