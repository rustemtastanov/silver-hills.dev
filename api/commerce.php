<?php

include "../core/config/config.inc.php";
define("DB_HOST", "localhost");
define("DB_USER", $database_user);
define("DB_PASSWORD", $database_password);
define("DB_DATABASE", $dbase);

$database_tabl = "modx_commerce_package_groups";
  	
$query=mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

mysqli_set_charset($query, "utf8");

$result = mysqli_query($query,"SELECT * FROM `$database_tabl`"); 
$array = array();

while (mysqli_fetch_array($result, MYSQLI_ASSOC)) {
    foreach ($result as $key => $key_value) {
    	$array[$key] = $key_value;
    }
}

echo json_encode($array);

mysqli_free_result($result);	