
class SimpleBook
{
  constructor() {
    this.people = {
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

  [Symbol.iterator]() {
    let i = 0;
    let data = [];

    // try a destructurer
    for (let t in this.people) {
      data.push({
        'name': t,
        'info': this.people[t]
      });
    }

    return {
      next() {
        if (i<data.length) {
          return {value: data[i++]};
        } else {
          return {done: true};
        }
      }
    }
  }

}

module.exports = SimpleBook;