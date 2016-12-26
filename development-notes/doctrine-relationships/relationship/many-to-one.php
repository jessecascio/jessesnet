<?php

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Configuration;

require_once __DIR__ . "/Bootstrap.php";
Bootstrap::init();

$em = Bootstrap::entityManager();

/**
 * Example 1 - Load with default functions
 */

$Item = $em->getRepository('Entity\\GroceryItem')->findOneBy(['name'=>'Milk']);

echo "You found " . $Item->getName() . PHP_EOL;
echo "Food group ID: " . $Item->getFoodGroupId() . PHP_EOL;

$FoodGroup = $Item->getFoodGroup();

echo "Food group name: " . $FoodGroup->getName() . PHP_EOL;
echo "FoodGroup class: " . get_class($FoodGroup) . PHP_EOL;

/*
	(1) SELECT t0.id AS id1, t0.food_group_id AS food_group_id2, t0.name AS name3, t0.food_group_id AS food_group_id4 FROM grocery_item t0 WHERE t0.name = 'Milk' LIMIT 1
	(2) SELECT t0.id AS id1, t0.name AS name2 FROM food_group t0 WHERE t0.id = 1
*/
echo "Ran 2 queries" . PHP_EOL;

/**
 * Example 2 - Load with DQL
 */
echo PHP_EOL;
$Item = $em->getRepository('Entity\\GroceryItem')->getOneBy(['name'=>'Milk']); 

echo "You found " . $Item->getName() . PHP_EOL;
echo "Food group ID: " . $Item->getFoodGroupId() . PHP_EOL;

$FoodGroup = $Item->getFoodGroup();

echo "Food group name: " . $FoodGroup->getName() . PHP_EOL;
echo "FoodGroup class: " . get_class($FoodGroup) . PHP_EOL;

/*
	(1) SELECT g0_.id AS id0, g0_.food_group_id AS food_group_id1, g0_.name AS name2, f1_.id AS id3, f1_.name AS name4, g0_.food_group_id AS food_group_id5 FROM grocery_item g0_ INNER JOIN food_group f1_ ON g0_.food_group_id = f1_.id WHERE g0_.name = 'Milk'
*/
echo "Ran 1 query" . PHP_EOL;

return;
