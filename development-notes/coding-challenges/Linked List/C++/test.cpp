#define CATCH_CONFIG_MAIN  
#include <iostream>
#include <string>
#include "catch.hpp"
#include "LinkedList.h"

using namespace DataStructures;

TEST_CASE( "LinkedList is iterated w/ first", "[iterate]" ) {
	LinkedList<int> list;

	list.insertFirst(1);
	list.insertFirst(14);
	list.insertFirst(23);
	list.insertFirst(2938);

	list.iterate();
    REQUIRE( 2938 == list.read() );
    list.iterate();
    REQUIRE( 23 == list.read() );
    list.iterate();
    REQUIRE( 14 == list.read() );
    list.iterate();
    REQUIRE( 1 == list.read() );
}

TEST_CASE( "LinkedList is iterated w/ last", "[iterate]" ) {
	LinkedList<int> list;

	list.insertLast(1);
	list.insertLast(14);
	list.insertLast(23);
	list.insertLast(2938);

	list.iterate();
    REQUIRE( 1 == list.read() );
    list.iterate();
    REQUIRE( 14 == list.read() );
    list.iterate();
    REQUIRE( 23 == list.read() );
    list.iterate();
    REQUIRE( 2938 == list.read() );
}

TEST_CASE( "LinkedList is iterated w/ first and last", "[iterate]" ) {
	LinkedList<int> list;

	list.insertFirst(1);
	list.insertLast(14);
	list.insertFirst(23);
	list.insertLast(2938);

	list.iterate();
    REQUIRE( 23 == list.read() );
    list.iterate();
    REQUIRE( 1 == list.read() );
    list.iterate();
    REQUIRE( 14 == list.read() );
    list.iterate();
    REQUIRE( 2938 == list.read() );
}

TEST_CASE( "LinkedList is iterated in reverse", "[iterate]" ) {
	LinkedList<int> list;

	list.insertFirst(1);
	list.insertLast(14);
	list.insertFirst(23);
	list.insertLast(2938);
return;
	list.reverse();
    REQUIRE( 2938 == list.read() );
    list.reverse();
    REQUIRE( 14 == list.read() );
    list.reverse();
    REQUIRE( 1 == list.read() );
    list.reverse();
    REQUIRE( 23 == list.read() );
}


TEST_CASE( "LinkedList is sorted with int", "[sort]" ) {
	LinkedList<int> list;

	list.insertFirst(1);
	list.insertLast(14);
	list.insertFirst(23);
	list.insertLast(2938);
	list.insertFirst(289);
	list.insertLast(17);
	
	list.sort();

	list.iterate();
    REQUIRE( 1 == list.read() );
    list.iterate();
    REQUIRE( 14 == list.read() );
    list.iterate();
    REQUIRE( 17 == list.read() );
    list.iterate();
    REQUIRE( 23 == list.read() );
    list.iterate();
    REQUIRE( 289 == list.read() );
    list.iterate();
    REQUIRE( 2938 == list.read() );
}

TEST_CASE( "LinkedList is sorted with string", "[sort]" ) {
	LinkedList<std::string> list;

	list.insertLast("houses");
	list.insertFirst("jump");
	list.insertFirst("fleet");
	list.insertLast("foxes");
	list.insertLast("over");
	list.insertFirst("tiny");
	
	list.sort();
	
	list.iterate();
    REQUIRE( "fleet" == list.read() );
    list.iterate();
    REQUIRE( "foxes" == list.read() );
    list.iterate();
    REQUIRE( "houses" == list.read() );
    list.iterate();
    REQUIRE( "jump" == list.read() );
    list.iterate();
    REQUIRE( "over" == list.read() );
    list.iterate();
    REQUIRE( "tiny" == list.read() );
 }
