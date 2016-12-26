#!/usr/bin/php
<?php

namespace app\bin;

use app;
use Service;

/**
 * Verify RabbitMQ connection is available
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */

require __DIR__.'/../Bootstrap.php';
app\Bootstrap::init();

try {
	// get connection
	$Container     = new Service\Container();
	$RabbitClient  = $Container->get('rabbit-client');
	echo "Successfully connected to queue" . PHP_EOL;
} catch (\Exception $e) {
	echo "ERROR: Unable to connect to queue: " . $e->getMessage() . PHP_EOL;
}

// display worker processes running
$Supervisor = new Service\Supervisor();
echo $Supervisor->running() . " worker processes running";

die(PHP_EOL);