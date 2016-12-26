<?php

ini_set('memory_limit','8G');

/**
 * Prerequisites
 */
// size of n and value of c
$opts = getopt("n:c:");

if (!isset($opts['n']) || !isset($opts['c']) ) {
	die('oops' . PHP_EOL);
}

$n = $opts['n'];
$c = $opts['c'];
$A = [];

// build array
for ($i=0; $i<$n; $i++) {
	$A[($i+1)] = mt_rand(1, 5*$n);
}	

/**
 * First Attempt - O(n^2)
 * Simple double iteration to find values
 */
$s = microtime(true);
$l = 0;
$i = -1;
$j = -1;

// iterate over every value
foreach ($A as $k => $v) {
	
	$l++;

	// value cannot be greater than c
	if ($v >= $c) {
		continue;
	}

	// compare to every other value
	foreach ($A as $k2 => $v2) {
		
		$l++;

		if ($v2 >= $c) {
			continue;
		}
		// i != j
		if ($k == $k2) {
			continue;
		}

		if ($v + $v2 == $c) {
			$i = $k;
			$j = $k2;
			break;
		}
	}

	if ($i > -1) {
		break;
	}
}

echo PHP_EOL;

if ($i > -1) {
	echo "FOUND at i=$i AND j=$j: {$A[$i]} + {$A[$j]} = $c";
} else {
	echo "NOT FOUND ($c)";
}

echo PHP_EOL;
echo "Loops: $l" . PHP_EOL;
echo "Time: " . (microtime(true) - $s) . PHP_EOL;
echo PHP_EOL;

/**
 * Second Attempt - O(nlog(n^2))
 * First sort the array and then search for needed value
 */
$s = microtime(true);
$l = 0;
$i = -1;
$j = -1;

asort($A); // nlogn 

foreach ($A as $k => $v) { // n
	$l++;

	$j = array_search($c-$v, $A); // logn

	if ($j > 0) { 
		$i = $k;
		break;
	}
}

// nlogn + n * logn
// n(logn + logn)
// nlog(n*n)

echo PHP_EOL;

if ($i > -1) {
	echo "FOUND at i=$i AND j=$j: {$A[$i]} + {$A[$j]} = $c";
} else {
	echo "NOT FOUND ($c)";
}

echo PHP_EOL;
echo "Loops: $l" . PHP_EOL;
echo "Time: " . (microtime(true) - $s) . PHP_EOL;
echo PHP_EOL;

/**
 * Third Attempt - O(2n)
 * Swap the keys and values and do a constant time key check
 */
$s = microtime(true);
$l = 0;
$i = -1;
$j = -1;

$tmp = array_flip($A); // n

foreach ($A as $k => $v) { // n
	$l++;

	if (isset($tmp[$c-$v])) { // c 
		$i = $k;
		$j = $tmp[$c-$v];
		break;
	}
}

echo PHP_EOL;

if ($i > -1) {
	echo "FOUND at i=$i AND j=$j: {$A[$i]} + {$A[$j]} = $c";
} else {
	echo "NOT FOUND ($c)";
}

echo PHP_EOL;
echo "Loops: $l" . PHP_EOL;
echo "Time: " . (microtime(true) - $s) . PHP_EOL;
echo PHP_EOL;

// eof
die(PHP_EOL);
