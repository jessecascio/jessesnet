#include <stdio.h>

void funky(int *); // force pointers as params
void swap(int *, int *);
void arth();

int main() {
    printf("Grasshopper\n");

    int x = 1;

    // access the memory
    int ip, tmp;
    ip = &x;

    printf("Address: %d", ip); // prints the address

    // to access value must use pointer in type declaration
    int *p, y = 2;
    p = &y;
    printf("\nhmmm: %d", *p);

    // test
    int *j;
    j = &y;

    printf("\nMemory address: %d, var value: %d", j, *j);

    // passing a pointer to a function
    funky(p);

    int t = 10, s = 15;
    printf("\npre t and s: %d and %d", t, s);

    // passing var memory addresses to a function
    swap(&t, &s);
    printf("\npost t and s: %d and %d", t, s);

    t = 111;
    printf("\nreassigned t and s: %d and %d", t, s);

    arth();

    return 0;
}

// define function params to accept pointer args
void funky(int * p) {
    printf("\nin: %d", *p);
}

// passing in pointers to memory addresses
void swap(int *a, int *b) {
    int tmp;

    tmp = *a;
    *a = *b;
    *b = tmp;
}

// pointer arithmetic
void arth() {
    int arti[] = {1, 4, 5, 10, 12};
    int *p  = arti; // pointer to begining of array

    printf("\nBeg of array: %d", *p);
    printf("\nArr length: %d", sizeof(arti)/ sizeof(int)); // get array size

    for (int i=0; i<sizeof(arti)/ sizeof(int); ++i) {
        printf("\nElement: %d", *p++);
    }


}