<?php

namespace Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * GroceryItem
 *
 * @ORM\Table(name="grocery_item")
 * @ORM\Entity(repositoryClass="Entity\Repository\GroceryItem")
 */
class GroceryItem
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var integer
     *
     * @ORM\Column(name="food_group_id", type="integer", nullable=false)
     */
    private $foodGroupId;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=100, nullable=false)
     */
    private $name;

    /**
     * @var Entity\FoodGroup
     *
     * @ORM\ManyToOne(targetEntity="Entity\FoodGroup")
     * @ORM\JoinColumn(name="food_group_id", referencedColumnName="id")
     */
    private $foodGroup;


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
     * Set foodGroupId
     *
     * @param integer $foodGroupId
     * @return GroceryItem
     */
    public function setFoodGroupId($foodGroupId)
    {
        $this->foodGroupId = $foodGroupId;

        return $this;
    }

    /**
     * Get foodGroupId
     *
     * @return integer 
     */
    public function getFoodGroupId()
    {
        return $this->foodGroupId;
    }

    /**
     * Set name
     *
     * @param string $name
     * @return GroceryItem
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set foodGroup
     *
     * @param Entity\FoodGroup $foodGroup
     * @return GroceryItem
     */
    public function setFoodGroup($foodGroup)
    {
        $this->foodGroup = $foodGroup;

        return $this;
    }

    /**
     * Get foodGroup
     *
     * @return Entity\FoodGroup 
     */
    public function getFoodGroup()
    {
        return $this->foodGroup;
    }

}
