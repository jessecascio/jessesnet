
var Person = require('./Person.js');

class Controller
{
  async action()
  {
    let lisa = new Person('lisa');
    
    // catch the resolve argument

    /*
    lisa.worklong();
    lisa.worklong();
    lisa.worklong();
    lisa.worklong();
    lisa.worklong();
    lisa.worklong();

    lisa.workshort();

    console.log('continuing on....');
    */

    /*
    await lisa.worklong(); 
    lisa.workshort();

    console.log('continuing on....');
	*/

	await lisa.chores();
	lisa.workshort();

    console.log('continuing on....');

    // or dont wait
    lisa.chores();
    lisa.worklong();

    console.log('continuing on....');
  }
}

module.exports = Controller;