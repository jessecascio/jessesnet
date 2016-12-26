<?php

namespace test\Service;

use Service;

/**
 * Logger Test
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */
class LoggerTest extends \PHPUnit_Framework_TestCase
{	
	protected $Logger;

	protected function setUp()
	{
		$DIContainer  = new Service\Container();
		$this->Logger = $DIContainer->get('logger');
		// wouldnt be hard coded here, in a config file
		$this->path = __DIR__."/../../logs/test_".md5(microtime()).".log";
		$this->Logger->path($this->path);
	}

	public function testInfo()
	{	
		$this->Logger->info('stuff');
		$this->assertTrue(file_exists($this->path));
	}

	public function testError()
	{	
		$this->Logger->error('stuff');
		$this->assertTrue(file_exists($this->path));
	}

	public function tearDown()
	{
		unlink($this->path);
	}
} 