#include <stdio.h>
#include <stdlib.h>

void arrays() {
    int i[] = {3, 4, 5, 6};

    printf("Storage size for an int array: %lu byte(s)", sizeof(i));
    printf("\nNumber of elements in array: %d", sizeof(i) / sizeof(int));
    printf("\nAccess an array element: %d", i[2]);

    int j[100];
    printf("\nStorage size for an unused int array: %lu byte(s)", sizeof(j)); // uses a lot of space

    // cant do dynamic like this, need to specify the need for memory
    int *l;
    // l[0] = 3; // will throw an error

    // dynamic array with malloc(), returns void pointer must cast
    int *k = (int *) malloc (1 * sizeof (int)); // need to block out space

    if ( k == NULL ) { // will return NULL pointer on no memory
        fprintf (stderr, "calloc failed\n");
        exit(EXIT_FAILURE);
    }

    k[0] = 3;
    k[1] = 4;
    k[2] = 5;
    k[3] = 6;
    printf("\nAccess a pointer array element: %d - %d - %d - %d", k[0], k[1], k[2], k[3]);
    printf("\nStorage size for a dynamic int array w/ pointer: %lu byte(s)", sizeof(k)); // smaller than setting vals

    free(k); // always release the memory back, realloc() will shrink / grow prev requested mem block

    int m[] = {}; // can do dynamic arrays with pointers as well
    int *r = m;

    *r = 2;
    r++;
    *r = 3;
    r++;
    *r = 4;
    r++;
    *r = 5;

    printf("\nAccess a pointer array element w/ MATHs: %d - %d - %d - %d", m[0], m[1], m[2], m[3]);
    printf("\nStorage size for a dynamic int array w/ pointer MATH: %lu byte(s)", sizeof(r)); // same as other pointer version

    //int r = 3;

    //q = &r;
    // *(q++) = 4;

    //*(++q) = 4;

    //printf("\nAccess a pointer array element w/ MATHs: %d - %d - %d - %d", q[0], q[0], q[0], q[0]);

    // multi dimensions
    int md[4][4] = { {10, 5, 6}, {9, 19, 29}, {8, 82, 74} };
    printf("\nAccess an 2D array element: %d", md[1][1]);

}