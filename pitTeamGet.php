<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);

//load field names
$field_list = file('pit_field_list.txt', FILE_IGNORE_NEW_LINES);
$fields = implode(',',$field_list);

//database query
require_once('db.php');
$sql = "SELECT $fields FROM pit WHERE team={$_GET['team']} ORDER BY timestamp DESC";
$result = mysqli_query($conn,$sql);
$array = mysqli_fetch_assoc($result);

echo json_encode($array);
mysqli_close($conn);
?>