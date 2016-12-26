<?hh //strict

/**
 * Sample API for making synchrounous API calls
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */
class SyncAPI
{
	/**
	 * Construct
	 */
	public function __construct(protected SyncHTTPClient $HTTP) {}

	/**
	 * Make the requests
	 */
	public function request(Vector<string> $requests): void
	{
		$calls = [];

		// use multi curl, and batch request the urls
		$requests = array_chunk($requests, 3);
		
		foreach ($requests as $batch) {
			// make calls
			$this->HTTP->batch($batch);
		}
	}

}