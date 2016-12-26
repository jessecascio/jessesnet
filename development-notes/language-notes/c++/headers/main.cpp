#include <iostream>
#include "multiply.h"

/*
    - http://www.learncpp.com/cpp-tutorial/19-header-files/
    - iostream is the header file
    - Keep in mind that header files typically only contain declarations. They do not define how something is implemented.
    - It is implemented in the C++ runtime support library, which is automatically linked into your program during the link phase.
    - dont put definitions in headers
    - keep header files granular to minimize number needed to included
    - map header files to their code files using the same names
*/

int main()
{
    using namespace std;
    cout << multiply(2,4) << "\n";
    return 0;
}
