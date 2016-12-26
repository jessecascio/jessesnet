<?php

namespace Proc\Daemon;

use app;
use Service;
use Broker\RabbitClient;

/**
 * RabbitMQ Worker
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */

require __DIR__.'/../../../app/Bootstrap.php';
app\Bootstrap::init();
app\Bootstrap::initMemory(512); // limit memory
app\Bootstrap::initGC();        // ensure garbage collection

$Container     = new Service\Container();
$RabbitClient  = $Container->get('rabbit-client');
$RabbitHandler = $Container->get('rabbit-handler');
$Logger        = $Container->get('logger');

$AMQChannel = $RabbitClient->getChannel();

// hook to job queue
$AMQChannel->basic_consume(RabbitClient::DEFAULT_QUEUE, '', false, false, false, false, [$RabbitHandler, 'consume']);

// ouput worker started
$Logger->info("Worker started on PID ".getmypid().", listening to... " . RabbitClient::DEFAULT_QUEUE);

// listen for new jobs being added to the queue
while(count($AMQChannel->callbacks)) {
   $AMQChannel->wait();
}

