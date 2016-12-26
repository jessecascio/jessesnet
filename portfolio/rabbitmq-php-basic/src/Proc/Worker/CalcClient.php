<?php

namespace Proc\Worker;

/**
 * Worker
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */
class CalcClient implements Worker
{	
	/**
	 * @var array
	 */
	private $data = [];

	/**
	 * @param array
	 */
	public function __construct($data)
	{
		$this->data = $data;
	}

	/**
	 * Run job
	 */
	public function run()
	{
		echo "Executing work " . __CLASS__ . PHP_EOL;
	}
}