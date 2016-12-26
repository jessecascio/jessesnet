<?hh //strict

/**
 * Simulate Data Source
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */
class Source
{
	/**
	 * URLs to be used with API calls
	 */
	public function getData(): Vector<string>
	{
		return Vector {
			'http://usnews.com',
			'http://wsj.com',
			'http://latimes.com',
			'http://seekingalpha.com',
			'http://politico.com',
			'http://cnn.com',
			'http://google.com',
			'http://finance.yahoo.com',
			'http://msn.com',
			'http://infoworld.com',
			'http://time.com',
			'http://npr.org',
			'http://nypost.com',
			'http://bloomberg.com',
			'http://reuters.com',
			'http://cbssports.com',
			'http://si.com',
			'http://forbes.com'
		};
	}
}