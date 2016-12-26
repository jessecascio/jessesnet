#!/usr/bin/php
<?php

namespace app;

use Service;
use Broker\RabbitClient;
use PhpAmqpLib\Message\AMQPMessage;

/**
 * Send jobs
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */

/**
 * 	j => number of jobs, messages, to insert into queue
 * 	p => number of processes to start
 */

require __DIR__.'/Bootstrap.php';
Bootstrap::init();

// limit total number of jobs
define('MAX_JOBS', 100000);

$Container    = new Service\Container();
$RabbitClient = $Container->get('rabbit-client');
$Logger       = $Container->get('logger');

$AMQChannel = $RabbitClient->getChannel();

// reset the current processes
$Supervisor = new Service\Supervisor();
$Supervisor->kill();

// remove the old logs
$Logger->delete();

// read cmd line options
$opts = getopt("j:p:");

// number of jobs, processes
$jobs = isset($opts['j']) && intval($opts['j']) > 0 && intval($opts['j']) <= MAX_JOBS ? intval($opts['j']) : 100;
$proc = isset($opts['p']) && $opts['p'] <= Service\Supervisor::MAX_WORKERS ? $opts['p'] : 5;

$Supervisor->start($proc);

echo "Starting " . $proc . " processes..." . PHP_EOL;

// different job "types", handler could use to determine what to do with message
$types = [
	'api_call',
	'db_operation',
	'heavy_calculation',
	'intensive_io'
];

// define message properties
$msg_props = [
	'delivery_mode' => 2, // persistent
	'priority'		=> 1  // single priority
];

echo "Creating " . $jobs . " jobs..." . PHP_EOL;

// populate the job queue
for ($i=0; $i<$jobs; $i++) {
	$msg = [
		'key'      => $i,
		'job_type' => $types[mt_rand(0,count($types)-1)],
		'data' => [
			'hello' => 'world',
			'comp'  => uniqid('', true)
		]
	];

	$AMQChannel->basic_publish(new AMQPMessage(json_encode($msg), $msg_props), '', RabbitClient::DEFAULT_QUEUE);
}

echo "Queue populated";
die(PHP_EOL);

