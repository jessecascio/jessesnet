#include <stdlib.h>
#include "./../model/Person.h"

struct Person * factoryPerson() {
    return (struct Person *) malloc(1 * sizeof (struct Person));
}
