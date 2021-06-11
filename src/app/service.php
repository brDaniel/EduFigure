<?php
$data=$_POST["user"]."\t".$_POST["score"]."\t".$_POST["moves"]."<br>\n";

file_put_contents("highscore.txt",$data,FILE_APPEND);
$highscore=file_get_contents("highscore.txt");
$dataArray=implode("\n",$data);

//echo "listo.. se agrego: ".$data."<br>"
echo $highscore;

?>