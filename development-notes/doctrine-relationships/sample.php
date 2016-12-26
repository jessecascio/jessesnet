<?php

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

require_once __DIR__ . "/Bootstrap.php";
Bootstrap::init();

$db = [
	'connection_info' => [
		'driver'   => 'pdo_mysql',
		'user'     => MYSQL_USR,
		'password' => MYSQL_PWD,
		'dbname'   => MYSQL_DB,
		'host'     => MYSQL_HOST,
		'port'     => MYSQL_PORT
	],
    'meta_data_config' => [__DIR__.'/Entity']
];

$setupConfig = Setup::createAnnotationMetadataConfiguration($db['meta_data_config'], false, null, null, false);

$em = EntityManager::create($db['connection_info'], $setupConfig);
