
class AdressBook
{
  constructor() {
    this.addresses = {
      'bob': {
        'city': 'seattle',
        'state': 'wa'
      },
      'jon': {
        'city': 'denver',
        'state': 'co'
      },
      'berta': {
        'city': 'cheyenne',
        'state': 'wy'
      }
    }
  }

  * [Symbol.iterator]() {
    
    for (let name in this.addresses) {
      yield {
        'name': name,
        'info': this.addresses[name]
      }
    }

  }

}

module.exports = AdressBook;