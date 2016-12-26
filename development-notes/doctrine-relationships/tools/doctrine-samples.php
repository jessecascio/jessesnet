<?php

/**
 * REFERENCE
 * @see Querying      - http://doctrine-orm.readthedocs.org/en/latest/reference/working-with-objects.html#querying
 * @see DQL           - http://doctrine-orm.readthedocs.org/en/latest/reference/dql-doctrine-query-language.html
 * @see Relationships - http://doctrine-orm.readthedocs.org/en/latest/reference/association-mapping.html
 * @see Annotations   - http://doctrine-orm.readthedocs.org/en/latest/reference/annotations-reference.html
 *
 * @todo Research cache factory
 */

/*
	Most of the ORM interactions are made through the Entity Manger ($em)
*/

// repositories used to search specific entities
$Repo = $em->getRepository('Entity\\GroceryItem');
// to load all rows from a table (entity)
$items = $Repo->findAll();

foreach ($items as $Item) {
	// can access columns via access methods
	$Item->getName();

	// can access relational tables, however using proxy classes makes multiple calls
	// proxy loading requires correct @ORM mappings i.e: @ORM\JoinColumn(name="type_id", referencedColumnName="id")
	$FoodGroup = $Item->getFoodGroup(); // returns Proxy class
	$FoodGroup->getName();

	// can update values
	$Item->setName('new item name');
	$em->persist($Item);
	// calling flush() at end allows for batch updating
	$em->flush();
}

// can query Entities based on primary key
$Item = $em->find('Entity\\GroceryItem', 1);
// can query the objects
// for list of all the different query options see querying reference (above)
$items = $em->findBy(array('type_id' => 2));
// to not return an array, but an entity 
$items = $em->findOneBy(array('type_id' => 2));

// better to use custom repo dql queries for loading joined tables
$query = $em->createQuery(
                'SELECT t, tt FROM GroceryItem t
                  JOIN t.type tt WHERE t.id = :id'
            )->setParameter('id', $id);
// will hydrate all the objects with a single sql call
$query->getResult();

// if a direct connection is needed
$sql  = "SELECT * FROM grocery_item";

// @SEE http://www.doctrine-project.org/api/dbal/2.1/class-Doctrine.DBAL.Connection.html

$conn = $em->getConnection();
$stmt = $conn->prepare($sql);
$stmt->execute();

$stmt->fetchAll();