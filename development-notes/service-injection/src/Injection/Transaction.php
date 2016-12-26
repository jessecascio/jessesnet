<?php

namespace Injection;

class Transaction
{
	private $teller;

	private $account;

	public function __construct(\Teller $teller, \Account $account)
	{
		$this->teller  = $teller;
		$this->account = $account;
	}

	public function debit($amount)
	{
		$this->account->debit($amount) ? $this->success('debit', $amount) : $this->fail('debit', $amount, 'Insufficient Funds');
	}

	public function credit($amount)
	{
		$this->account->credit($amount) ? $this->success('credit', $amount) : $this->fail('credit', $amount, 'Unknown Error');
	}

	private function success($type, $amount)
	{
		// would be another class
		$transaction = sprintf('Account#: %d - Teller#: %d - %s $%01.2f',
			$this->account->getId(),
			$this->teller->getId(),
			$type,
			$amount
		);

		echo "TRANSACTION: " . $transaction . PHP_EOL;
	}

	private function fail($type, $amount, $message)
	{
		// would be another class
		$transaction = sprintf('Account#: %d - Teller#: %d - %s $%01.2f - %s',
			$this->account->getId(),
			$this->teller->getId(),
			$type,
			$amount,
			$message
		);

		echo "FAILED: " . $transaction . PHP_EOL;
	}
}