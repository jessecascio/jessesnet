<?php

namespace test\Proc;

use Proc;

/**
 * Factory Test
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */
class FactoryTest extends \PHPUnit_Framework_TestCase
{	
	public function testFactoryGet()
	{
		$this->assertInstanceOf('Proc\Worker\APIClient', Proc\Factory::get('api_call', []));
		$this->assertInstanceOf('Proc\Worker\Worker', Proc\Factory::get('api_call', []));
	}

	/**
	 * @expectedException \Exception
	 */
	public function testGetFail()
	{
		Proc\Factory::get('api_callz', []);
	}

	public function testXMLWorkerLoad()
	{
		$config = simplexml_load_file(__DIR__.'/../../app/config/proc/workers.xml');

		foreach ($config->worker as $worker) {
			$type = (string) $worker->job_type;
			$this->assertInstanceOf('Proc\Worker\Worker', Proc\Factory::get($type, []));
		}
	}
} 