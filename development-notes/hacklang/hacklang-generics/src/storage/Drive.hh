<?hh //strict

namespace storage;

/**
 * Drive for storing items
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */
class Drive <Tk, Tv>
{	
	protected Map<Tk, Tv> $storage = Map{};

	/**
	 * Place item into storage
	 */
	public function store(Tk $key, Tv $val): void
	{
		$this->storage[$key] = $val;
	}

	/**
	 * Retrieve from storage
	 */
	public function fetch(Tk $key): ?Tv
	{
		return $this->storage[$key];
	}
}