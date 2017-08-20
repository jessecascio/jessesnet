#include <stdio.h>
#include <string.h>

void chars() {

    printf("Storage size for a char: %lu byte(s)\n", sizeof(char));

    unsigned char un; // 0 - 255 int

    char t;
    t = 'L'; // single chars require single quotes
    printf("Single char: %c", t);

    char c[100] = "STRING";
    printf("\nMulti chars: %s", c);

    char a[100];
    // a = "string"; // cannot assign after declartion
    strcpy(a, "STRING"); // must copy the string in, i.e array to array copy (use memcpy for non-strings)
    printf("\nMulti chars assign: %s", a);

    strcat(a, "-NEW-STRING");
    printf("\nMulti chars concat: %s", a); // can append to an array

    // char b[]; // cant have dynamic array lengths
    // b = "string";

    char *p; // use pointers to get dynamic arrays
    char *q;

    p = "SIZZLE";
    q = "BAG";
    printf("\nDynamic string (arrays): %s - %s", p, q);

    // check the size of the diff string approaches
    char *x = "HELLOHELLOHELLOHELLOHELLOHELLO";
    char y[] = "HELLOHELLOHELLOHELLOHELLOHELLO";

    printf("\nSize of pointer declaration: %zu byte(s)", sizeof(x));
    printf("\nSize of array declaration: %zu byte(s)", sizeof(y)); // much bigger

}