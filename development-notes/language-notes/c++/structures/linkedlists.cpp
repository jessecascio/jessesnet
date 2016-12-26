#include <iostream>
using namespace std;

// g++ -std=c++11 intro.cpp -o name
// ./name

/*
	Arrays have to shift some elements in an array when a new element is inserted because memory of an array is sequentially allocated. 
	It is not necessary to know the size of a list when it is created, so it is treated as a dynamic data structure. 
	Rather than allocate memory for all elements when a list is initialized, memory is allocated for each node on demand 
	when it is inserted. The space efficiency of lists is better than arrays because there is no vacant memory in lists.

	It costs O(n) time to get the i th node in a list since it has to traverse nodes one by one starting from the head node. 
	It only takes O(1) time to get the i element in an array. Therefore, time efficiency to search lists is not as good as for arrays.
*/

int main()
{

}
