#include <stdio.h>
#include <stdlib.h>
#include <string.h>"
#include "service/factory.h"

/**
 * REQs:
 *  - insert a name
 *  - retrieve a name
 */
int main() {
    /*
    struct Person *j = factoryPerson();
    j->fname = "jesse";
    printf("%s\n", j->fname);

    struct Person *k = factoryPerson();
    k->fname = "frank";
    printf("%s\n", k->fname);
    */

    /*
    struct Person * *q = (struct Person *) malloc(1 * sizeof (struct Person));

    q[0] = factoryPerson();
    q[1] = factoryPerson();

    q[0]->fname = "uno";
    q[1]->fname = "dos";

    printf("%s\n", q[0]->fname);
    printf("%s\n", q[1]->fname);
    *
     *
    // printf("\nNumber of elements in array: %d", sizeof(q) / sizeof(struct Person));

    /*
    struct Person *j;
    j->fname = "jesse";
    printf("%s\n", j->fname);

    struct Person *k = ;
    k->fname = "josh";
    printf("%s\n", k->fname);
    */

    struct Person * *book = (struct Person *) malloc(1 * sizeof (struct Person));
    int cnt = 0;

    while (1) {
        char in[100];

        printf("\nEnter name (or 'exit'): ");
        scanf("%s", in);

        if (strcmp(in, "exit") == 0) {
            break;
        }

        book[cnt] = factoryPerson();
        book[cnt]->fname = in;

        cnt++;
    }

    printf("\nNames...");

    for (int i=0; i<cnt; ++i) {
        printf("\nName: %s", book[i]->fname);
    }


    //printf("%c", done);

    /*
    char str1[20] = "jesse";
    unsigned short cnt = 0;
    struct Person * *book = (struct Person *) malloc(1 * sizeof (struct Person));

    //str1 = "jesse";
    book[0] = factoryPerson();
    book[0]->fname = str1;

    printf("Name: %s", book[0]->fname);

    char str2[20];
    printf("\nEnter name: ");
    scanf("%s", str2);
    printf("Name Dos: %s", str2);

    book[1] = factoryPerson();
    book[1]->fname = str2;

    //str2 = "shit";

    printf("\nName Yo: %s", book[1]->fname);
    */

    return 0;
}


