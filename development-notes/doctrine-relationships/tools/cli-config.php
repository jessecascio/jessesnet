<?php

/**
 * Used to generate doctrin entities from database
 */
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

/*
 * Example to create Entities from the database.
 * NOTE: All tables must have a primary key
 *
 *  ** Run directy in the tools directory
 *  ** Last param is directory to map to
 *
 * 		doctrine orm:convert-mapping --from-database --namespace "Entity\\" annotation ../src/
 *
 * After creating the files, to create getters and setters on the file, run
 *
 * 		doctrine orm:generate-entities ../src/
 */

require __DIR__ . "/../Bootstrap.php";
Bootstrap::init();

$db = [
    'driver'   => 'pdo_mysql',
    'user'     => MYSQL_USR,
    'password' => MYSQL_PWD,
    'dbname'   => MYSQL_DB,
    'host'     => MYSQL_HOST,
    'port'     => MYSQL_PORT
];

$src = __DIR__ . "/../src";

$setupConfig   = Setup::createAnnotationMetadataConfiguration([$src.'/Entity'], false, null, null, false);
$EntityManager = EntityManager::create($db, $setupConfig);

return $helperSet = new \Symfony\Component\Console\Helper\HelperSet(array(
    'db' => new \Doctrine\DBAL\Tools\Console\Helper\ConnectionHelper($EntityManager->getConnection()),
    'em' => new \Doctrine\ORM\Tools\Console\Helper\EntityManagerHelper($EntityManager)
));