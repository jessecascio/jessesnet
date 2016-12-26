#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
	int min=1,max=20;
	int x,y,w,h;

	cout << "Enter value width: ";
	cin >> x;

	cout << "Enter value height: ";
	cin >> y;

	if (x<min||y<min||x>max||y>max) {
		cout << "Please enter value between 1 and 20\n";
		exit(1);
	}

	w = x + 2;
	h = y + 2;

	int **table = new int*[h];

	// setup
	for (int i=0; i<h; i++) {
		table[i] = new int[w];
	}

	table[0][0] = 0;

	// init
	for (int i=1; i<w; i++) {
		table[0][i] = i-1;
	}
	for (int i=1; i<h; i++) {
		table[i][0] = i-1;
	}

	// math
	for (int i=1;i<h;i++) {
		for (int j=1;j<w;j++) {
			table[i][j] = (i-1)*(j-1);
		}
	}

	/**
	 * Output
	 */	
	cout << "\n";

	for (int k=0; k<h; k++) {
		for (int l=0; l<w; l++) {
			cout << table[k][l];

			// conditional formatting
			if (k > 10 && l == 0) {
				cout << setw(5);
			} else {
				cout << setw(6);
			}
		}		

		cout << "\n";
	}

	cout << "\n";

	/**
	 * clean up
	 */
	for (int i=0; i<h; i++) {
		delete[] table[i];
	}
	
	delete[] table;
	table = NULL;
}
