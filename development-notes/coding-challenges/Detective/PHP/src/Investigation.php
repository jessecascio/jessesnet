<?php

class Investigation
{
	/**
	 * @var Graph
	 */
    private $graph;

    /**
     * @var array
     */
    private $timelines = [];

    /**
     * @param Graph
     */
    public function __construct(Graph $graph)
    {
        $this->graph = $graph;
    }

    /**
     * Build timeline for a witness
     * @param Witness
     */
    public function interrogate(Witness $witness)
    {
    	$timeline = [];
    	$events   = $witness->events();

        // always look backwards from the first event
        if (count($events)) {
            $timeline = $this->reverseTraversal($events[0]);
        }

        foreach ($events as $k => $vertex) {

            // include what witness saw
            $timeline[] = $vertex;

            // see if events diverge moving forward
            $diverge = $this->traversal($vertex, isset($events[($k+1)])?$events[($k+1)]:null);

            // track the timeline
            $timeline = array_merge($timeline, $diverge);
        }

        $this->timelines[] = json_encode($timeline);
    }

    /**
     * @return array
     */
    public function prosecute()
    {
    	return array_unique($this->timelines);
    }

    /**
     * Build timeline backwards from event
     * @param  string
     * @return array
     */
    private function reverseTraversal($vertex)
    {
    	$t  = [];
    	$in = $this->graph->edgesIn($vertex);

    	// can navigate vertexes with at most two versions of story
    	while (count($in) == 1 || count($in) == 2) {

    		// if a single preceding event, can use it, unless it connects to multiple nodes
    	    if (count($in) == 1 && count($this->graph->edgesOut($in[0])) == 1) {
    	        array_unshift($t, $in[0]);
    	        $in = $this->graph->edgesIn($in[0]); // onto next node
                continue;

    	    // if two preceding events, can use if connected to each other as well
    	    } elseif (count($in) == 2) {

    	        // see if nodes are connectd
    	        if ($this->graph->isConnected($in[0], $in[1]) && count($this->graph->edgesIn($in[1])) == 1) {
    	            array_unshift($t, $in[1]);
    	            array_unshift($t, $in[0]);
    	            $in  = $this->graph->edgesIn($in[0]);
    	            continue;
    	        }
    	        if ($this->graph->isConnected($in[1], $in[0]) && count($this->graph->edgesIn($in[0])) == 1) {
    	            array_unshift($t, $in[0]);
    	            array_unshift($t, $in[1]);
    	            $in  = $this->graph->edgesIn($in[1]);
    	            continue;
    	        }

    	        // no more options
    	        return $t;
    	    }

            // no requirements hit
            return $t;
    	}

    	// if there are multiple stories can only use if they all match exactly
    	if (count($in) > 2 && $this->graph->match($in)) {
    		array_unshift($t, $in[0]);
    	}

    	return $t;
    }

    /**
     * Build timeline forward from event
     * @param  string
     * @param  string
     * @return array
     */
    private function traversal($vertex, $future=null)
    {
    	$t   = [];
    	$out = $this->graph->edgesOut($vertex);
    	
    	// with only one or two divergences, we can make assumptions
    	while (count($out) == 1 || count($out) == 2) {
    	    
    	    // for two choices, and future events for this witness
    	    if (!is_null($future) && count($out) == 2) {

    	        // dont check self, verify connection, can only be one fork
    	        if ($future != $out[1] && $this->graph->isConnected($out[1], $future) && count($this->graph->edgesOut($out[1])) == 1) {
    	            array_push($t, $out[1]);
    	            $out  = $this->graph->edgesOut($out[1]);
    	            continue;
    	        }
    	        if ($future != $out[0] && $this->graph->isConnected($out[0], $future) && count($this->graph->edgesOut($out[0])) == 1) {
    	            array_push($t, $out[0]);
    	            $out  = $this->graph->edgesOut($out[0]);
    	            continue;
    	        }

    	        // no more options
    	        return $t;
    	    }

    	    // can use a single choice if its connected back to next element at some point
    	    if (!is_null($future) && count($out) == 1) {
    	    	if ($this->graph->isConnected($out[0], $future)) {
    	    		array_push($t, $out[0]);
    	    		$out  = $this->graph->edgesOut($out[0]);
    	            continue;
    	    	}
    	    }

    	    // end of current timeline, can still use single event
    	    if (is_null($future) && count($out) == 1) {
    	        array_push($t, $out[0]);
    	        $out = $this->graph->edgesOut($out[0]);
    	        continue;
    	    }

    	    // end of current timeline, multiple choices, use if they are interconnected
    	    if (is_null($future) && count($out) == 2) {
    	    	if ($this->graph->isConnected($out[0], $out[1])) {
    	    		array_push($t, $out[0]);
    	            $out  = $this->graph->edgesOut($out[0]);
    	            continue;
    	    	}
    	    	if ($this->graph->isConnected($out[1], $out[0])) {
    	    		array_push($t, $out[1]);
    	            $out  = $this->graph->edgesOut($out[1]);
    	            continue;
    	    	}
    	    }

    	    // end of timeline, two paths, can use if they match exactly
    	    if (is_null($future) && count($out) == 2 && $this->graph->match($out)) {
    	    	array_push($t, $out[0]);
    	    }    

    	    // no more checks
    	    return $t;
    	}

    	// if there are multiple accounts of the events, can only use if they all match
    	if (is_null($future) && count($out) > 2 && $this->graph->match($out)) {
    		array_push($t, $out[0]);
    	}

    	return $t;
    }

}
