<?php

namespace InfluxDB\UDP;

use InfluxDB;

/**
 * UDP Socket Connection
 *
 * @package UDP
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com
 */
class Socket implements InfluxDB\Socket
{	
	/**
	 * @var string
	 */
	const PROTOCOL = "udp";

	/**
	 * @var string
	 */
	private $host;

	/**
	 * @var int
	 */
	private $port;

	/**
	 * @var resource
	 */
	private $socket;

	/**
	 * @param string
	 * @param int
	 */
	public function __construct($host, $port)
	{
		$this->host = $host;
		$this->port = intval($port);

		$connection = sprintf('%s://%s:%d',
			self::PROTOCOL,
			$this->host,
			$this->port
		);

		$this->socket = stream_socket_client($connection);
	}

	/**
	 * @return resource
	 */
	public function getSocket()
	{
		return $this->socket;
	}

	/**
	 * @return string
	 */
	public function getHost()
	{
		return $this->host;
	}

	/**
	 * @return int
	 */
	public function getPort()
	{
		return $this->port;
	}	

	/**
	 * @param array
	 */
	public function write(array $data)
	{
		stream_socket_sendto($this->socket, json_encode([$data]));
	}
	
	/**
	 * Clean up
	 */
	public function __destruct()
	{
		stream_socket_shutdown($this->socket, STREAM_SHUT_RDWR);
	}
}
