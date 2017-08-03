#include <stdio.h>
#include <stdbool.h>

void floater();
void bozzle();
void arris();

int main() {
    unsigned char c = 1; // 1 byte,  0 - 255
    int i = 3; // 2 or 4 bytes, ~65k or ~4.2m
    short s = 1; // 2 byte int
    long l = 2; // 4 byte int

    return 0;

    printf("Storage size for char: %lu byte(s)\n", sizeof(char));
    printf("Storage size for char: %lu byte(s)\n", sizeof(int));

    bozzle();

    char num;

    printf("Enter a char yo: ");
    num = getchar();
    printf("Number: %c\n", num);

    char nombre[40];

    printf("Enter name: ");
    scanf("\nName is: %s", &nombre);

    return 0;
}

void floater() {
    float f = 24.4; // 4 byte, 6 decimals, ~4.6 X 10 ^ 38
    double d = 41.214124; // 8 byte, 15 decimals, ~4 X 10 ^ 308
    long double ld = 323.34; // 16 byte, 4.5 X 10 ^ 4932
}

void bozzle() {
    bool valid = false;
    if (!valid) {
        printf("Ok\n");
    }
}

void arris() {
    int stuff[5];
    int otro[] = {1, 4, 5};

    char name[] = "Jesse C";
}
