<?php

namespace test\Service;

use Service;

/**
 * Supervisor Test
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */
class SupervisorTest extends \PHPUnit_Framework_TestCase
{	
	protected $Supervisor;

	protected function setUp()
	{
		$this->Supervisor = new Service\Supervisor();
		$this->Supervisor->kill();
	}

	public function testStatus()
	{	
		$this->assertTrue(is_int($this->Supervisor->running()));
		$this->assertEquals($this->Supervisor->running(), 0);
	}

	/**
	 * @depends testStatus
	 */
	public function testStart()
	{
		$this->Supervisor->start(5);
		$this->assertEquals($this->Supervisor->running(), 5);
	}

	/**
	 * @depends testStatus
	 */
	public function testKill()
	{
		$this->Supervisor->start(3);
		$this->Supervisor->kill();
		$this->assertEquals($this->Supervisor->running(), 0);
	}

	public function testRange()
	{
		$this->Supervisor->start(11);
		$this->assertEquals($this->Supervisor->running(), 0);
	}

	public function tearDown()
	{
		$this->Supervisor->kill();
	}
} 