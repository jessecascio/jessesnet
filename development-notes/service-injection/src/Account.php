<?php

class Account
{	
	private $accountId;

	private $balance = 0;

	public function __construct($accountId)
	{
		// would load account info, or create new one on null
		$this->accountId = $accountId;
	}

	public function balance()
	{
		return $this->balance;
	}

	public function getId()
	{
		return $this->accountId;
	}

	public function setId($accountId)
	{
		$this->accountId = $accountId;
	}

	public function credit($amount)
	{
		$amount = floatval($amount);
		$this->balance += $amount;

		return true;
	}

	public function debit($amount)
	{
		$amount = floatval($amount);

		if ($this->balance - $amount < 0) {
			return false;
		}

		$this->balance -= $amount;

		return true;
	}
}