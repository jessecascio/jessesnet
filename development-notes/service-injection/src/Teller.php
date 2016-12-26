<?php

class Teller
{	
	private $tellerId;

	public function __construct($tellerId)
	{
		// would load teller info, or create new one on null
		$this->tellerId = $tellerId;
	}

	public function getId()
	{
		return $this->tellerId;
	}

	public function setId($tellerId)
	{
		$this->tellerId = $tellerId;
	}
}