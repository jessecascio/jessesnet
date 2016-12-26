<?php

namespace Service;

/**
 * Worker Supervisor
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */
class Supervisor
{
	/**
	 * @var int
	 */
	const MAX_WORKERS = 10;

	/**
	 * @var string
	 */
	const WORKER = 'Proc/Daemon/rabbitworkerd.php';

	/**
	 * Start worker processes
	 * @param int
	 */
	public function start($start)
	{
		$start = intval($start);

		// validate range of workers
		if ($start < 0 || $start > self::MAX_WORKERS) {
			return;
		}

		// make sure there arent too many workers already running
		if ($this->running() + $start > self::MAX_WORKERS) {
			$start = self::MAX_WORKERS - $this->running();
		}
		
		for ($i=0; $i<$start; $i++) {
			exec("php ".escapeshellarg(__DIR__."/../").escapeshellarg(self::WORKER)." >> /dev/null 2>&1 &");
		}
	}	

	/**
	 * Kill all processes
	 */
	public function kill()
	{
		exec("pkill -f ".escapeshellarg(self::WORKER));
	}

	/**
	 * Count processes
	 * @return int
	 */
	public function running()
	{
		return intval(exec("ps -ef | grep -c ".escapeshellarg(self::WORKER)))-2;
	}
}