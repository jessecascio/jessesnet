<?hh //strict

namespace storage;

/**
 * Consume stored items on drive
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */
class Consumer<Tk, Tv>
{
	public function __construct(protected Drive<Tk, Tv> $Drive) {}

	/**
	 * Consume item with a key
	 */
	public function consume(Tk $key): void
	{
		// use the data
		var_dump($this->Drive->fetch($key))."\n";
	}
}