<?hh //strict

/**
 * Synchrounous HTTP Handler
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */
class SyncHTTPClient
{
	/**
	 * Batch request URLs
	 */
	public function batch(array<string> $requests): void
	{
		$MultiHandle = curl_multi_init();
		
		foreach ($requests as $request) {

			$handle = curl_init();

			curl_setopt($handle, CURLOPT_URL, $request);
			curl_setopt($handle, CURLOPT_HEADER, 0);
			curl_setopt($handle, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($handle, CURLOPT_FOLLOWLOCATION, 1);

			curl_multi_add_handle($MultiHandle, $handle);
		}

		$results = $this->process($MultiHandle);
	}

	/**
	 * Process the curl multi handle
	 */
	protected function process(resource $MultiHandle): void
	{	
		$running = 1;
		$results = [];

		// inline outputs for demonstration purposes
		echo "Requesting 3 via curl_multi...\n";

		do {
		    curl_multi_exec($MultiHandle, $running);
		} while($running > 0);

		while ($multiInfo = curl_multi_info_read($MultiHandle)) {
		    $results[] = curl_getinfo($multiInfo['handle']);
		    curl_multi_remove_handle($MultiHandle, $multiInfo['handle']);
		    curl_close($multiInfo['handle']);
		}
		
		// would really return the data
		foreach ($results as $result) {
			echo $result['http_code'].' from '.$result['url']." doing work...\n";
			// simulate doing "expensive" actions on the result
			usleep(mt_rand(1,2) * 1000000);
			echo $result['http_code'].' from '.$result['url']." processed...\n";
		}
	}
}