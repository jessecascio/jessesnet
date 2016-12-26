
class Person
{
  
  /**
   * @var string
   */
  name;

  constructor(name)
  {
    this.name = name;
  }

  setname(name)
  {
    this.name = name;
  }

  getName() 
  {
    return this.name;
  }

}

module.exports = Person;