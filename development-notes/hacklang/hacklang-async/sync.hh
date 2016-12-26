#!/usr/bin/hhvm
<?hh

use Symfony\Component\Stopwatch\Stopwatch;

/**
 * Example of an synchronous multi curl handler 
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */

require "vendor/autoload.php";

$Stopwatch = new Stopwatch();
$Stopwatch->start('timer');

$Source = new Source();
$Client = new SyncHTTPClient();

$API = new SyncAPI($Client);
$API->request($Source->getData());

$StopWatchEvent = $Stopwatch->stop('timer');

echo "\n";
echo "Total Time (s): ".number_format($StopWatchEvent->getDuration()/1000,3)."\n";
echo "Total Memory (MB): ".number_format($StopWatchEvent->getMemory()/(1024*1024),3)."\n";

die(PHP_EOL);