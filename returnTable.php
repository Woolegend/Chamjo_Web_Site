<?php
$token = 'B'; 
//$_POST['token'];

$connect = mysqli_connect('localhost', 'manager', '123456', 'maindata');
mysqli_query($connect, 'set session character_set_connection=utf8;');
mysqli_query($connect, 'set session character_set_results=utf8;');
mysqli_query($connect, 'set session character_set_client=utf8;');

$sql = "select * from maintb where token ='$token'";

$result = mysqli_query($connect, $sql);
$count = mysqli_num_fields($result);

while($rows = mysqli_fetch_row($result)){
    for($a = 0; $a < $count; $a++){
        echo $rows[$a];
    }
}
/*
while($rows = mysqli_fetch_row($result)){
    for($a = 0; $a < $count; $a++){
        $rows[$a];
    }
    echo $rows;
}
*/
?>
