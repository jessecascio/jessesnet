<?php


/**
 * @param  int
 * @return int
 */
function depth($n)
{
	$n = intval($n);

	if ($n<1) {
		return 0;
	}
	
    return intval(floor(log($n,2)))+1;
}
