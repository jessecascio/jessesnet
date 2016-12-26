<?php

namespace Proc\Worker;

/**
 * Worker decorator
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */
interface Worker
{	
	/**
	 * @param array
	 */
	public function __construct($data);

	/**
	 * Run job
	 */
	public function run();
}