#include <iostream>
#include <array>
#include <algorithm>
using namespace std;

// g++ -std=c++11 intro.cpp -o name
// ./name

void newArray();
void sameArray();

int main()
{
	cout << "With a new array: \n";
	newArray();

	cout << "\nWith the same array: \n";	
	sameArray();
}

// O(m+n)
void sameArray()
{
	std::array<string,10> array1;
	array1[0] = "apples";
	array1[1] = "carrots";
	array1[2] = "lettuce";
	array1[3] = "mango";
	array1[4] = "maple";

	std::array<string,5> array2;
	array2[0] = "bannana";
	array2[1] = "brocolli";
	array2[2] = "couliflower";
	array2[3] = "mayonese";
	array2[4] = "olives";

	int max1 = array1.size();
	int max2 = array2.size();

	int items = max1 + max2;
	int sorted=max1-1, i=max1-max2-1, j=max2-1;

	while (sorted >= 0) {

		// check boundries first to prevent invalid index
		if (i < 0) {
			array1[sorted] = array2[j];
			j--;
		} else if (j < 0) {
			array1[sorted] = array1[i];
			i--;
		} else if (array1[i] > array2[j]) {
			array1[sorted] = array1[i];
			i--;
		} else {
			array1[sorted] = array2[j];
			j--;
		}

		sorted--;
	}

	int order = 1;

	for (string fruit : array1) {
		cout << order << ") " << fruit << "\n";
		order++;
	}
}

// O(m+n)
void newArray()
{
	// less than means comes first
	// capital letters considered greater than
	std::array<string,5> array1;
	array1[0] = "apples";
	array1[1] = "carrots";
	array1[2] = "lettuce";
	array1[3] = "mango";
	array1[4] = "maple";

	std::array<string,5> array2;
	array2[0] = "bannana";
	array2[1] = "brocolli";
	array2[2] = "couliflower";
	array2[3] = "mayonese";
	array2[4] = "olives";
	
	std::array<string,10> merged;

	int max1 = array1.size();
	int max2 = array2.size();

	int items = max1 + max2;
	int sorted=0, i=0, j=0;

	while (sorted < items) {

		// check boundries first to prevent invalid index
		if (i >= max1) {
			merged[sorted] = array2[j];
			j++;
		} else if (j >= max2) {
			merged[sorted] = array1[i];
			i++;
		} else if (array1[i] < array2[j]) {
			merged[sorted] = array1[i];
			i++;
		} else {
			merged[sorted] = array2[j];
			j++;
		}

		sorted++;
	}
	
	int order = 1;

	for (string fruit : merged) {
		cout << order << ") " << fruit << "\n";
		order++;
	}
}
