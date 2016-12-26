<?php

require_once 'src/Graph.php';
require_once 'src/Witness.php';
require_once 'src/Investigation.php';

/**
 * File Checks
 */
if (!isset($argv[1]) || !is_file($argv[1])) {
    die("Need to specify a valid file path: php detective.php file.json" . PHP_EOL);
}

$input = json_decode(file_get_contents($argv[1]), true);

if (!is_array($input) || !count($input)) {
    die("Unable to parse JSON file" . PHP_EOL);
}

/**
 * Set up Graph
 */
$graph     = new Graph();
$witnesses = [];

// build graph
foreach ($input as $events) {

	$witnesses[] = new Witness($events);

    foreach ($events as $k => $event) {
        $graph->addVertex($event);

        // connect edges to future events
        if (isset($events[($k+1)])) {
            $graph->addEdge($event, $events[($k+1)]);
        }
    }
}

/**
 * Start investigation
 */
$investigation = new Investigation($graph);

foreach ($witnesses as $witness) {
	$investigation->interrogate($witness);
}

print(json_encode($investigation->prosecute(), JSON_PRETTY_PRINT));
