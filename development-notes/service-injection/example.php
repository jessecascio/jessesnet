<?php

require_once "vendor/autoload.php";

$teller      = new Teller(2367);
$account     = new Account(3433);

$transaction = new Injection\Transaction($teller, $account);

$transaction->credit(34.34);
$transaction->credit(34.34);
$transaction->debit(68.68);

