<?php

class Graph
{
    /**
     * @var array
     */
    private $in  = [];

    /**
     * @var array
     */
    private $out = [];
    
    /**
     * Return incoming nodes to a vertex
     * @param  string
     * @return array
     */
    public function edgesIn($id)
    {
        return isset($this->in[$id]) ? $this->in[$id] : [];
    }

    /**
     * Return outgoing nodes from a vertex
     * @param  string
     * @return array
     */
    public function edgesOut($id)
    {
        return isset($this->out[$id]) ? $this->out[$id] : [];
    }

    /**
     * See if vertexes match exactly
     * @param array
     */
    public function match(array $vertexes)
    {
        // could this be more efficient ???
        foreach ($vertexes as $v1) {
            foreach ($vertexes as $v2) {
                if ($v1 != $v2) {
                    return false;
                }
            }
        }

        return true;
    }

    /**
     * Check if two vertexes are connected
     * @param  string
     * @param  string
     * @return bool
     */
    public function isConnected($from, $to)
    {
        if (!isset($this->out[$from]) || !count($this->out[$from])) {
            return false;
        }

        // check direct connection
        if (in_array($to, $this->out[$from])) {
            return true;
        }

        $visted = [$from => 1];       // checked this node
        $vmap   =  $this->out[$from]; // check children nodes

        while (count($vmap)) {

            $vertex = array_pop($vmap);
            $visted[$vertex] = 1;
            
            if (in_array($to, $this->out[$vertex])) {
                return true;
            }

            foreach ($this->out[$vertex] as $next) {

                if (isset($visted[$next])) {
                    continue;
                }

                array_push($vmap, $next);
            }

        }

        return false;
    }

    /**
     * @param  string
     */
    public function addVertex($id)
    {
        if (isset($this->out[$id])) {
            return;
        }

        $this->out[$id] = [];
    }

    /**
     * @param  string
     * @param  string
     */
    public function addEdge($from, $to)
    {
        // consider different data structure, btree ???
        if (!isset($this->out[$from])) {
            return;
        }

        // init
        if (!isset($this->out[$from])) {
            $this->out[$from] = [];
        }

        // prevent dupes
        if (!in_array($to, $this->out[$from])) {
            $this->out[$from][] = $to;
        }
       
        // track edge in to prevent future complexity
        if (!isset($this->in[$to])) {
            $this->in[$to] = [];
        }

        // prevent dupes
        if (!in_array($from, $this->in[$to])) {
            $this->in[$to][] = $from; 
        }
    }

}
