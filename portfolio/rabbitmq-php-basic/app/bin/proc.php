#!/usr/bin/php
<?php

namespace app\bin;

use app;
use Service;

/**
 * Control the worker processes
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */

/**
 * 	c => command to run: start, status, kill
 * 	p => number of processes to started, required with -c start
 */

require __DIR__.'/../Bootstrap.php';
app\Bootstrap::init();

// grab the commnd
$opts = getopt("c:p:");

$Supervisor = new Service\Supervisor();

// check command
if (isset($opts['c'])) {
	switch ($opts['c']) {
		case 'kill':
			echo "Killed " . $Supervisor->running() . " processes" . PHP_EOL;
			$Supervisor->kill();
			break;
		case 'status':
			break;
		case 'start':
			if (!isset($opts['p'])) {
				die("Must specify number of processes".PHP_EOL);
			}

			// check how many new workers can be started
			$available = Service\Supervisor::MAX_WORKERS - $Supervisor->running();
			$Supervisor->start(intval($opts['p']));

			echo $opts['p'] < $available ? "Started ".$opts['p']." processes" : "Started ".$available." processes";
			echo PHP_EOL;
			break;
	}
}

echo $Supervisor->running() . " worker processes running";
die(PHP_EOL);