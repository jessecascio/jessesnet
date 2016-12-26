#ifndef NODE_H
#define NODE_H

namespace DataStructures
{

template <class T>
class Node 
{
	T data;

	public:
		Node<T> *next = NULL;
		T read();
		void set(T value);
};

template <class T>
T Node<T>::read()
{
	return this->data;
}

template <class T>
void Node<T>::set(T data)
{
	this->data = data;
}

}

#endif
