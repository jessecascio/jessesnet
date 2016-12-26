#ifndef STORE_H
#define STORE_H

template <class T>
class Store 
{
	T storage[10];
	int count;

	public:

		Store() {this->count = 0;}

		void set(T value);
		T get(int key);
};

template <class T>
void Store<T>::set(T value)
{
	this->storage[this->count] = value;
	this->count++;
}

template <class T>
T Store<T>::get(int key)
{
	return this->storage[key];
}

#endif
