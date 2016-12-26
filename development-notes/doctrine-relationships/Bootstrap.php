<?php

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

class Bootstrap
{
	public static function init()
	{
		require_once __DIR__ . "/vendor/autoload.php";

		if (file_exists(__DIR__ . "/config/config.php")) {
			require_once __DIR__ . "/config/config.php";
		} else {
			require_once __DIR__ . "/config/config.default.php";
		}
	}

	public static function entityManager()
	{
		// the connection configuration
		$db = [
			'connection_info' => [
				'driver'   => 'pdo_mysql',
				'user'     => MYSQL_USR,
				'password' => MYSQL_PWD,
				'dbname'   => MYSQL_DB,
				'host'     => MYSQL_HOST,
				'port'     => MYSQL_PORT
			],
		    'meta_data_config' => [__DIR__.'/src/Entity']
		];

		$setupConfig = Setup::createAnnotationMetadataConfiguration($db['meta_data_config'], false, null, null, false);
		$setupConfig->setAutoGenerateProxyClasses(true);

		return EntityManager::create($db['connection_info'], $setupConfig);
	}
}