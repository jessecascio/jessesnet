<?php

class Witness
{
    private $events;

    public function __construct(array $events)
    {
        $this->events = $events;
    }

    /**
     * @return array
     */
    public function events()
    {
        return $this->events;
    }
}
