<?php

namespace Broker;

use Service;
use Proc\Factory;

/**
 * RabbitMQ Handler
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */
class RabbitHandler
{	
	/**
	 * @var PhpAmqpLib\Message\AMQPMessage
	 */
	private $AMQPMessage;

	/**
	 * @var Service\Logger
	 */
	private $Logger;

	/**
	 * @param Service\Logger
	 */
	public function __construct(Service\Logger $Logger)
	{
		$this->Logger = $Logger;
	}

	/**
	 * Consume the RabbitMQ messages
	 * @param PhpAmqpLib\Message\AMQPMessage
	 */
	public function consume($AMQPMessage)
	{
		$this->AMQPMessage = $AMQPMessage;

		$body = json_decode($this->AMQPMessage->body, true);
		
		// make sure worker type is set
		if (isset($body['job_type'])) {
			// run the job, workers should never die
			try {
				$Worker = Factory::get($body['job_type'], $body);
				$Worker->run();	
				// success
				$this->Logger->info("Worker ".getmypid()." finished job key " . $body['key'] . ", job type: " . $body['job_type']);
			} catch (\Exception $e) {
				// log errors
				$this->Logger->error("Worker ".getmypid()." failed: " . $e->getMessage());
			}
			
		} else {
			// log errors, include message json
			$this->Logger->error("Worker ".getmypid()." failed: No job_type " . $this->AMQPMessage->body);
		}

		// track peak memory of worker
		// $this->Logger->info("Worker ".getmypid()." memory " . (memory_get_peak_usage(true)/(1024*1024)));
			
		// always acknowledge so jobs dont get stuck
		$this->acknowledge();
	}

	/**
	 * Acknowledge the message has been consumed
	 */
	public function acknowledge()
	{
		$this->AMQPMessage->delivery_info['channel']->basic_ack($this->AMQPMessage->delivery_info['delivery_tag']);
		unset($this->AMQPMessage); 
	}
}