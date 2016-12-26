<?php

namespace Service;

use Monolog;
use Monolog\Formatter\LineFormatter;
use Monolog\Handler\StreamHandler;

/**
 * Logger Class
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */
class Logger
{
	/**
	 * @var Monolog\Logger
	 */
	private $Logger;

	/**
	 * @var string
	 */
	private $log_path;

	public function __construct()
	{
		// set a default path, should be in a config not hard coded
		$this->path(__DIR__."/../../logs/output.log");
	}

	/**
	 * Set path
	 * @param string
	 */
	public function path($path)
	{
		$this->log_path = $path;
		$this->Logger   = new Monolog\Logger('RabbitApp');
		
		// should verify path is writeable
		$Handler   = new StreamHandler($path, Monolog\Logger::DEBUG);
		$Formatter = new LineFormatter(null, null, false, true);
        $Handler->setFormatter($Formatter);

		$this->Logger->pushHandler($Handler);
	}

	/**
	 * Log info
	 * @param string
	 */
	public function info($log)
	{
		$this->Logger->addInfo($log);
	}

	/**
	 * Log error
	 * @param string
	 */
	public function error($log)
	{
		$this->Logger->addError($log);
	}

	/**
	 * Remove log file
	 */
	public function delete()
	{
		@unlink($this->log_path);
	}
}
