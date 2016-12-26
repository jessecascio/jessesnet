<?php

/**
 * Bootstrap Unit tests
 *
 * @package Development Notes
 * @author  Jesse Cascio <jessecascio@gmail.com>
 * @see     jessesnet.com/development-notes
 * @example vendor/bin/phpunit -c test/phpunit.xml test/.
 */

// test would likely need separate bootstrapping class
require __DIR__ . "/../app/Bootstrap.php";
app\Bootstrap::init();