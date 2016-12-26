<?php

/**
 * Used to generate dummy data
 */

require __DIR__ . "/../Bootstrap.php";
Bootstrap::init();

$dsn = 'mysql:host='.MYSQL_HOST.';port='.MYSQL_PORT.';';
$usr = MYSQL_USR;
$pwd = MYSQL_PWD;

$pdo = new PDO($dsn, $usr, $pwd);

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->setAttribute(PDO::ATTR_CASE, PDO::CASE_LOWER);
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

/* SHOPPING LIST

$inserts = [];

for ($i=1;$i<21;$i++) {
	$list_id = $i;

	// 1 - 35 items
	$items  = mt_rand(12,20);
	$bought = [];

	for ($j=1; $j<=$items; $j++) {

		do {
			$use = mt_rand(1,35);	
		} while (in_array($use, $bought));
		
		$bought[]  = $use;
		$price     = floatval((mt_rand(2,20)*1.67)/mt_rand(2,4));
		$inserts[] = "($list_id, $use, $price)";
	}
}

$sql = "INSERT INTO doctrine.shopping_list (list_id, grocery_item, price) VALUES " . implode(',', $inserts);

$pdo->exec($sql);

*/

/* SHOPPER LIST

$inserts = [];

for ($i=1; $i<=325; $i++) {

	$peeps = mt_rand(1,3);
	$shoppers = [];

	for ($j=1; $j<=$peeps; $j++) {
		
		do {
			$use = mt_rand(1,15);	
		} while (in_array($use, $shoppers));

		$shoppers[] = $use;

		$inserts[] = "($use, $i)";
	}
}

$sql = "INSERT INTO doctrine.shopper_list (shopper_id, list_id) VALUES " . implode(',', $inserts);

$pdo->exec($sql);
*/