<?php

namespace Service;

class Transaction
{
	private $teller;

	public function __construct(Teller $teller)
	{
		$this->teller = $teller;
	}

	public function charge(Account $account, $amount)
	{

	}

	public function credit(Account $account, $amount)
	{

	}
}