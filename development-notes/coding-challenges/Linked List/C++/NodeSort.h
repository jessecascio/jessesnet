#ifndef NODESORT_H
#define NODESORT_H

namespace DataStructures
{

template <class T> 
struct NodeSort 
{
	// @todo Update Node to be  struct and do inline there
	inline bool operator() (Node<T>* node1, Node<T>* node2) {
        return node1->read() < node2->read();
    }
};

}

#endif
