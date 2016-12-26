#!/usr/bin/hhvm
<?hh

use storage;

/**
 * Example of storage using generics
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 */

require 'vendor/autoload.php';

/**
 * Create a new drive for storing items
 */
$Drive = new storage\Drive();

/**
 * Store a variety of different keys/items
 */
$Drive->store('oa1', new storage\ObjA());
$Drive->store('oa2', new storage\ObjA());
$Drive->store('oa3', new storage\ObjA());
$Drive->store('ob1', new storage\ObjB());
$Drive->store('oc1', new storage\ObjC());
$Drive->store('oc1', new storage\ObjC());
$Drive->store(213, "string");
$Drive->store(347, json_encode(['hello'=>'world']));

/**
 * Consume the different objects
 */
$Consumer = new storage\Consumer($Drive);
$Consumer->consume('ob1');
$Consumer->consume(347);



