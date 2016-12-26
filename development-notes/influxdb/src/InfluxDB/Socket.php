<?php

namespace InfluxDB;

/**
 * Socket Connection Decorator
 *
 * @package InfluxDB
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com
 */
interface Socket
{	
	/**
	 * @param string
	 * @param int
	 */
	public function __construct($host, $port);

	/**
	 * @return resource
	 */
	public function getSocket();

	/**
	 * @param array
	 */
	public function write(array $data);

	public function __destruct();
}