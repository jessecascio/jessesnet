<?php

namespace Service;

class Transaction
{
	private $teller;

	public function __construct($tellerId)
	{
		$this->teller = new Teller($tellerId);
	}

	public function charge(Account $account, $amount)
	{
		$account->subtract($this->teller, $amount);
	}

	public function credit(Account $account, $amount)
	{
		$account->add($this->teller, $amount);
	}
}