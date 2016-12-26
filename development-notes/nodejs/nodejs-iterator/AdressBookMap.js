
class AdressBookMap
{
  constructor() {
    this.addresses = new Map();

    this.addresses.set('bob', {
      'city': 'seattle',
      'state': 'wa'
    });

    this.addresses.set('jon', {
      'city': 'denver',
      'state': 'co'
    });

    this.addresses.set('berta', {
      'city': 'cheyenne',
      'state': 'wy'
    });
  }

  * [Symbol.iterator]() {
    for (let [name, info] of this.addresses) {
      yield {name, info};
    }
  }

}

module.exports = AdressBookMap;