<?php

namespace Entity\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * GroceryItem
 */
class GroceryItem extends EntityRepository
{     
    public function getOneBy(array $search=[])
    {   
        $where = "";

        if (count($search)) {
            $wheres = [];

            foreach ($search as $col=>$val) {

                if (is_array($val)) {
                    /**
                     * @todo Finish
                     */
                    // $wheres[] = "gi.$col IN ('".implode("','", $val)."')";
                } else {
                    $wheres[] = "gi.$col=:$col";    
                }
                
            }

            $where = " WHERE " . implode(' AND ', $wheres);
        }

        $query = $this->getEntityManager()
                      ->createQuery(
                        'SELECT gi, fg FROM Entity\GroceryItem gi
                         JOIN gi.foodGroup fg' . $where
                     )->setParameters($search);
        
        return $query->getSingleResult();
    }
}
