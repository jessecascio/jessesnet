#!/usr/bin/php
<?php

/**
 * @since  February 28, 2015
 * @see    Coding Interviews: Questions, Analysis, and Solutions
 * @author http://jessesnet.com
 *
 * GOAL:
 * 
 * (1) An array contains n numbers ranging from 0 to n-2. There is exactly one number duplicated in the array. 
 * How do you find the duplicated number? For example, if an array with length 5 contains numbers {0, 2, 1, 3, 2}, 
 * the duplicated number is 2.
 *
 * (2) An array contains n numbers ranging from 0 to n-1. There are some numbers duplicated in the array. 
 * It is not clear how many numbers are duplicated or how many times a number gets duplicated. 
 * How do you find a duplicated number in the array? For example, if an array of length 7 contains 
 * the numbers {2, 3, 1, 0, 2, 5, 3}, the implemented function (or method) should return either 2 or 3.
 */

/**
 * One
 */
$array = [0,0,1];
 
$dupe = method1(0, $array);

if ($dupe === false) {
    echo "(1) No Duplicates" . PHP_EOL;
} else {
    echo "Duplicate: " . $dupe . PHP_EOL;
}

// O(n)
function method1($index, $array) 
{
    if (!isset($array[$index])) {
        return false;
    }

    $element = $array[$index];
    unset($array[$index]);

    if (in_array($element, $array)) {
        return $element;
    }    

    return method1(++$index, $array);
}

return;

/**
 * Two
 * @todo
 */
$array = [923,378,295,932,48,481,472,582,492,572,481,583,58,43,21,93,27,48,32,48];

$dupe = method1(0, $array);

if ($dupe === false) {
    echo "(2) No Duplicates" . PHP_EOL;
} else {
    echo "Duplicate: " . $dupe . PHP_EOL;    
}


