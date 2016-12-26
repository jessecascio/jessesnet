
module.exports =  class Generator
{

	nombre;

	fulson;

	set nombre (nombre) {}

	get nombre () {}


	constructor()
	{

	}

	*multiple ()
	{
		yield 1;
		yield 2;
		yield 3;
		yield 4;
	}

	*multitude ()
	{
		yield 5;
		yield 6;
		yield 7;
		yield 8;
	}
}
