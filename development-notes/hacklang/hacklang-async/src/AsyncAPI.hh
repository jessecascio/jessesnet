<?hh //strict

/**
 * Sample API for making asynchronous API calls
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */
class AsyncAPI
{
	/**
	 * Construct
	 */
	public function __construct(protected AsyncHTTPClient $HTTP) {}

	/**
	 * Make the requests
	 */
	public async function request(Vector<string> $requests): ?Awaitable<void>
	{
		$calls = [];

		// use multi curl, and batch request the urls
		$requests = array_chunk($requests, 3);
		
		foreach ($requests as $batch) {
			// each batch will be its own "thread"
			$calls[] = $this->HTTP->batch($batch);
		}
			
		// execute batches in parallel
		$data = await GenArrayWaitHandle::create($calls);
	}

}