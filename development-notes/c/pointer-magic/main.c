#include <stdio.h>
#include <string.h>

void fun(void * str);

int main() {
    char header[] = "woot";
    fun(&header);

    printf("yeax: %s\n", header);

    return 0;
}

void fun(void* str) {
    printf("yeay: %s\n", str);
    char tok = strtok(str, "o");
}