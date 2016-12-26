<?php

namespace app;

/**
 * Bootstrap Application
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */
abstract class Bootstrap
{
	/**
	 * Bootstrap application
	 */
	public static function init()
	{
		// required inits
		self::initAutoload();
		self::loadConfig();
		self::initMemory();
	}

	/**
	 * Set up autoloading
	 */
	private static function initAutoload()
	{
		require __DIR__ . "/../vendor/autoload.php";
	}

	/**
	 * Load the environment vars
	 */
	private static function loadConfig()
	{
		// check for local copy, default to development
		if (file_exists(__DIR__ . "/config/config.php")) {
			require __DIR__ . "/config/config.php";
		} else {
			require __DIR__ . "/config/config.development.php";
		}
	}

	/**
	 * Override memory limit
	 */
	public static function initMemory($mb=512)
	{
		// only allow 256 - 2048 MB
		if ($mb > 2048 || $mb < 256) {
			return;
		}
	
		ini_set("memory_limit", $mb . "M");
	}

	/**
	 * Optional: Ensure garbage collection is on
	 */
	public static function initGC()
	{
		gc_enable();
	}
	
}
