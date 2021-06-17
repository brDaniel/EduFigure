<?php
$arrayScores=file_get_contents("highscore.txt");
$arrayScores=explode("\n",$arrayScores);
echo json_encode($arrayScores);
?>