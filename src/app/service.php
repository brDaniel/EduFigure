<?php
$moves=$_POST["moves"];
$score=$_POST["score"];
$userName=$_POST["user"];
	
$data='{"name":"'.$userName.'","score":'.$score.',"moves":'.$moves."}\n";


file_put_contents("highscore.txt",$data,FILE_APPEND);
$highscore=file_get_contents("highscore.txt");
echo $data;

//echo "listo.. se agrego: ".$data."<br>"

?>