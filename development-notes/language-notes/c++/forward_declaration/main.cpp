#include <iostream>

/*
    - you can use a forward-declaration and just type the declaration of the function yourself at the top of the file
    - with headers they are included into every single file, this prevents that
*/
int add(int x, int y);

int main()
{
    using namespace std;
    cout << "The sum of 3 and 4 is: " << add(3, 4) << endl;
    return 0;
}
