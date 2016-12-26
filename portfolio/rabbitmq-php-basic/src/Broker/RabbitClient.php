<?php

namespace Broker;

use PhpAmqpLib\Connection\AMQPConnection;

/**
 * RabbitMQ Client
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */
class RabbitClient 
{
	/**
	 * @var string
	 */
	const DEFAULT_QUEUE = 'job_queue';

    /**
     * @var RabbitClient
     */
    private static $instance;

    /**
     * @var PhpAmqpLib\Connection\AMQPConnection
     */
    private $AMQPConnection;

    /**
     * @var PhpAmqpLib\Channel\AMQPChannel
     */
    private $AMQPChannel;

    /**
     * Create connections on instantiation
     * @throws PhpAmqpLib\Exception\AMQPRuntimeException
     */
    private function __construct()
    {
    	// create connections, constants defined via Bootstrap
    	$this->AMQPConnection = new AMQPConnection(RABBIT_SERVER, RABBIT_PORT, RABBIT_USER, RABBIT_PWD);
        $this->AMQPChannel    = $this->AMQPConnection->channel();

    	// connect to the default queue
    	$this->connect();
    }

    /**
     * @return PhpAmqpLib\Connection\AMQPConnection
     */
    public function getConnection()
    {
        return $this->AMQPConnection;
    }

    /**
     * @return PhpAmqpLib\Channel\AMQPChannel
     */
    public function getChannel()
    {
        return $this->AMQPChannel;
    }

    /**
     * Connect to the broker
     * @param string
     */
    public function connect($queue_name=self::DEFAULT_QUEUE)
    {
        /**
         * @see   https://www.rabbitmq.com/amqp-0-9-1-reference.html#class.queue
         * @param string 
         * @param bool - $passive to raise an error if queue already exists
         * @param bool - $durable to write messages to disk, survive server restart
         * @param bool - $exlusive only accessible by this connection
         * @param bool - $auto_delete the queue is deleted when all connections close
         */
        $this->AMQPChannel->queue_declare($queue_name,false,true,false,false);

        /**
         * Set queue quality of service, prevents messages from queueing on slow workers
         * @see   https://www.rabbitmq.com/amqp-0-9-1-reference.html#class.basic
         * @param long  - $prefetch_size sets how many messages can be queued on a worker
         * @param short - $prefetch_count sets the prefetch window
         * @param bool  - $global 
         */
        $this->AMQPChannel->basic_qos(null, 1, null);
    }

    /**
     * Closes the connections
     */
    public function close()
    {
        $this->AMQPChannel->close();
        $this->AMQPConnection->close();
    }

    /**
     * Prevent multiple connections
     * @return RabbitClient
     */
    public static function getInstance()
    {
        if (is_null(self::$instance)) {
            self::$instance = new RabbitClient();
        }

        return self::$instance;
    }
} 