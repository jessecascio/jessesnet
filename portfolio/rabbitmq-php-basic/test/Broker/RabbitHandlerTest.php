<?php

namespace test\Broker;

use Service;

/**
 * RabbitMQ Handler Test
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */
class RabbitHandlerTest extends \PHPUnit_Framework_TestCase
{
	protected $RabbitHandler;

	protected function setUp()
	{
		$DIContainer         = new Service\Container();
		$this->RabbitHandler = $DIContainer->get('rabbit-handler');
	}

	public function testHandler()
	{
		$this->assertInstanceOf('Broker\RabbitHandler', $this->RabbitHandler);
	}

	/**
	 * @depends testHandler
	 */
	public function testConsume()
	{	
		// create mock objects
		$AMQPChannel = \Phake::mock('\PhpAmqpLib\Channel\AMQPChannel');
		$AMQPMessage = \Phake::mock('\PhpAmqpLib\Message\AMQPMessage');
        $AMQPMessage->delivery_info['channel']      = $AMQPChannel;
        $AMQPMessage->delivery_info['delivery_tag'] = 'tag';

		$this->RabbitHandler->consume($AMQPMessage);

		\Phake::verify($AMQPChannel, \Phake::times(1))->basic_ack(\Phake::anyParameters());
	}	

	/**
	 * @depends testHandler
	 */
	public function testMessageReset()
	{
		// make private message available
		$Handler  = new \ReflectionClass("Broker\RabbitHandler");
		$property = $Handler->getProperty("AMQPMessage");
		$property->setAccessible(true);

		// create mock objects
		$AMQPChannel = \Phake::mock('\PhpAmqpLib\Channel\AMQPChannel');
		$AMQPMessage = \Phake::mock('\PhpAmqpLib\Message\AMQPMessage');
        $AMQPMessage->delivery_info['channel']      = $AMQPChannel;
        $AMQPMessage->delivery_info['delivery_tag'] = 'tag';

		$this->RabbitHandler->consume($AMQPMessage);

		$this->assertNull($property->getValue($this->RabbitHandler));
	}
} 
