<?php

require_once 'src/Graph.php';
require_once 'src/Witness.php';
require_once 'src/Investigation.php';

class detectiveTest extends PHPUnit_Framework_TestCase
{
	private $graph;

	public function testSample1()
	{
		$ws = $this->getWitnesses('samples/sample1.json');
		$ts = $this->investigate($ws);
		
		$this->assertEquals(count($ts), 1);
		$this->assertEquals($ts[0], json_encode(["fight","gunshot","falling","fleeing"]));
	}

	public function testSample2()
	{
		$ws = $this->getWitnesses('samples/sample2.json');
		$ts = $this->investigate($ws);
		
		$this->assertEquals(count($ts), 2);
		$this->assertEquals($ts[0], json_encode(["shadowy figure","demands","scream","siren"]));
		$this->assertEquals($ts[1], json_encode(["shadowy figure","pointed gun","scream","siren"]));
	}

	public function testSample3()
	{
		$ws = $this->getWitnesses('samples/sample3.json');
		$ts = $this->investigate($ws);
		
		$this->assertEquals(count($ts), 3);
		$this->assertEquals($ts[0], json_encode(["argument","coverup","pointing"]));
		$this->assertEquals($ts[1], json_encode(["press brief","scandal","pointing"]));
		$this->assertEquals($ts[2], json_encode(["argument","bribe"]));
	}

	public function testSample4()
	{
		$ws = $this->getWitnesses('samples/sample4.json');
		$ts = $this->investigate($ws);

		$this->assertEquals(count($ts), 1);
		$this->assertEquals($ts[0], json_encode(["anger","shouting","fight","gunshot","panic","fleeing"]));
	}

	public function testSample5()
	{
		$ws = $this->getWitnesses('samples/sample5.json');
		$ts = $this->investigate($ws);

		$this->assertEquals(count($ts), 2);
		$this->assertEquals($ts[0], json_encode(["buying gas","pouring gas","laughing","lighting match","fire","smoke"]));
		$this->assertEquals($ts[1], json_encode(["buying gas","pouring gas","crying","fire","smoke"]));
	}

	public function testSample6()
	{
		$ws = $this->getWitnesses('samples/sample6.json');
		$ts = $this->investigate($ws);

		$this->assertEquals(count($ts), 4);
		$this->assertEquals($ts[0], json_encode(["shadowy figure","demands","scream","siren"]));
		$this->assertEquals($ts[1], json_encode(["shadowy figure","pointed gun","scream","siren"]));
		$this->assertEquals($ts[2], json_encode(["wind","shadowy figure","demands","scream","siren"]));
		$this->assertEquals($ts[3], json_encode(["wind","scream","siren"]));
	}

	public function testSample7()
	{
		return;
		$ws = $this->getWitnesses('samples/sample7.json');
		$ts = $this->investigate($ws);

		$this->assertEquals(count($ts), 1);
		$this->assertEquals($ts[0], json_encode(["meteor","crash","zombies","carnage","guns","fort","survival"]));
	}

	private function investigate($ws)
	{
		$investigation = new Investigation($this->graph);

		foreach ($ws as $witness) {
			$investigation->interrogate($witness);
		}

		return $investigation->prosecute();
	}

	private function getWitnesses($path)
	{
		$input = json_decode(file_get_contents($path), true);

		$this->graph     = new Graph();
		$witnesses = [];

		// build graph
		foreach ($input as $events) {

			$witnesses[] = new Witness($events);

		    foreach ($events as $k => $event) {
		        $this->graph->addVertex($event);

		        // connect edges to future events
		        if (isset($events[($k+1)])) {
		            $this->graph->addEdge($event, $events[($k+1)]);
		        }
		    }
		}

		return $witnesses;
	}
}