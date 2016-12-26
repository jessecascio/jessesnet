#include <iostream>
#include <vector>
#include <algorithm> 
#include <fstream>
#include <typeinfo>
using namespace std;

// g++ -std=c++11 intro.cpp -o out
// ./out



int main()
{

	ifstream file ( "file.csv" ); // declare file stream: http://www.cplusplus.com/reference/iostream/ifstream/
	string value;

	vector<vector<string>> m;
	vector<string> v;

	while ( file.good() )
	{
	    getline(file, value, ',');

	    // cout << value;

	    if (value[1] == '\n') {
	    	v.push_back(value); // atoi(value.c_str())
	    	m.push_back(v);	
	    	v.clear();
	    }
		
		v.push_back(value);	    
	}
	
	cout << "\n\n";

	m.push_back(v);	

	for (vector<string> v : m) {
		for (string i : v) {
			cout << i << " ";
		}

		cout << "\n";
	}

	cout << "\n";
}
