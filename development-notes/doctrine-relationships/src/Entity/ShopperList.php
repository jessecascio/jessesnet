<?php

namespace Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ShopperList
 *
 * @ORM\Table(name="shopper_list")
 * @ORM\Entity
 */
class ShopperList
{
    /**
     * @var boolean
     *
     * @ORM\Column(name="shopper_id", type="boolean", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $shopperId;

    /**
     * @var integer
     *
     * @ORM\Column(name="list_id", type="smallint", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $listId;



    /**
     * Set shopperId
     *
     * @param boolean $shopperId
     * @return ShopperList
     */
    public function setShopperId($shopperId)
    {
        $this->shopperId = $shopperId;

        return $this;
    }

    /**
     * Get shopperId
     *
     * @return boolean 
     */
    public function getShopperId()
    {
        return $this->shopperId;
    }

    /**
     * Set listId
     *
     * @param integer $listId
     * @return ShopperList
     */
    public function setListId($listId)
    {
        $this->listId = $listId;

        return $this;
    }

    /**
     * Get listId
     *
     * @return integer 
     */
    public function getListId()
    {
        return $this->listId;
    }
}
