#!/usr/bin/php
<?php

/**
 * @since  February 22, 2014
 * @see    http://programmingpraxis.com/2014/02/21/anagrams-within-words/
 * @author http://jessesnet.com
 *
 * GOAL: Given two words, determine if the first word, or any anagram of it, appears in consecutive characters 
 * of the second word. For instance, cat appears as an anagram in the first three letters of actor, but car does 
 * not appear as an anagram in actor even though all the letters of car appear in actor.
 *
 * DESIGN: The algorithm design loops through each character of the word (minus the anagram length +1)
 * and checks if the character is in the anagram.  If character is in anagram a segment (length of anagram)
 * is taken from the word and validation is done to verify EACH letter of the anagram appears in the segment
 * 
 * BIG O COMPLEXITY: n^2 * m
 *   n = length of word
 *   m = length of anagram
 * 
 * EXAMPLES: 
 *   Anagram: cat
 *   Word   : actor
 *   Outcome: true
 *
 *   Anagram: car
 *   Word   : actor
 *   Outcome: false
 *
 */
 
$anagram = preg_replace('/[^a-z]/i', '', readline("Enter anagram: "));
$word    = preg_replace('/[^a-z]/i', '', readline("Enter word: "));
 
var_dump(locate_anagram($anagram, $word));
 
/**
 * Loop through word characters to see if anagram letters are present
 */
function locate_anagram($anagram, $word)
{
    if ($anagram == $word) {
        return true;
    }
 
    for ($i=0; $i<strlen($word)-strlen($anagram)+1; $i++) {
 
        if (strpos($anagram, $word[$i]) !== false) {
           
            $segment = substr($word, $i, strlen($anagram));
 
            if (verify_anagram($anagram, $segment)) {
                return true;
            }
        }
    }
 
    return false;
}
 
/**
 * Loop through a phrase from the word to verify all anagram letters are present
 */
function verify_anagram($anagram, $segment)
{  
    if ($anagram == $segment) {
        return true;
    }
 
    $found = [];
 
    for ($j=0; $j<strlen($segment); $j++) {
       
        if (strpos($anagram, $segment[$j]) === false) {
            return false;
        }
 
        $found[] = $segment[$j];
    }
 
    // check if segment and anagram have same chars
    if (count(array_diff(str_split($anagram), $found))) {
        return false;
    }
 
    return true;
}
