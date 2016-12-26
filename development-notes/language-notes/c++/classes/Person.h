#ifndef PERSON_H
#define PERSON_H

class Person 
{
	int age;
	std::string name, city, fname, lname;

	public:
		static int people; // cannot have a default value
		const std::string connection = "connection string";

		std::string available = "woo hoo";

		Person();
		Person(std::string city);
		// can do default inits
		Person (std::string fname, std::string lname);

		int getAge();
		std::string getName();
		void setAge(int age);
		void setName(std::string name);
		std::string getFullName();

	private:
		void internal();

};

// contructors have no return types
// can be overloaded
Person::Person(std::string new_city)
{
	city = new_city;
}

// to hit one with no params, leave off the ()
// or use {} to hit an empty constructor
Person::Person()
{
	// this->people++;
}

// default init
Person::Person(std::string f, std::string l) : fname(f), lname(l) {};

std::string Person::getFullName()
{
	return this->fname + " " + this->lname;
}

int Person::getAge()
{
	return this->age;
}

std::string Person::getName()
{
	return this->name;
}

void Person::setAge(int age)
{
	this->age = age;
}

void Person::setName(std::string name)
{
	this->name = name;
}

void Person::internal()
{

}

#endif
