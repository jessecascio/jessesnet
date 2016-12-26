<?php

namespace Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ShoppingList
 *
 * @ORM\Table(name="shopping_list")
 * @ORM\Entity
 */
class ShoppingList
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="smallint", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var boolean
     *
     * @ORM\Column(name="list_id", type="boolean", nullable=true)
     */
    private $listId;

    /**
     * @var boolean
     *
     * @ORM\Column(name="grocery_item", type="boolean", nullable=false)
     */
    private $groceryItem;

    /**
     * @var float
     *
     * @ORM\Column(name="price", type="float", precision=5, scale=2, nullable=false)
     */
    private $price;



    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set listId
     *
     * @param boolean $listId
     * @return ShoppingList
     */
    public function setListId($listId)
    {
        $this->listId = $listId;

        return $this;
    }

    /**
     * Get listId
     *
     * @return boolean 
     */
    public function getListId()
    {
        return $this->listId;
    }

    /**
     * Set groceryItem
     *
     * @param boolean $groceryItem
     * @return ShoppingList
     */
    public function setGroceryItem($groceryItem)
    {
        $this->groceryItem = $groceryItem;

        return $this;
    }

    /**
     * Get groceryItem
     *
     * @return boolean 
     */
    public function getGroceryItem()
    {
        return $this->groceryItem;
    }

    /**
     * Set price
     *
     * @param float $price
     * @return ShoppingList
     */
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get price
     *
     * @return float 
     */
    public function getPrice()
    {
        return $this->price;
    }
}
