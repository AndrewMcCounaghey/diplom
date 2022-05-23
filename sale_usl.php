<?php
include($_SERVER['DOCUMENT_ROOT'] ."/manager/includes/connect.php");
$arr=[];
$user_id = -1;
$user=$modx->getUserData();
if(!empty($user)){

	$user_id = $user['id'];

	$stmt1=$dbh->prepare("SELECT `access_dates` FROM `modx_1_users` WHERE `id`=:user_id");
	$stmt1->bindParam(':user_id', $user_id);
	$stmt1->execute();
	$r1 = $stmt1->fetch(PDO::FETCH_ASSOC);
	$str1 = str_replace('|', ',', $r1);
	$vv = implode(',', $str1);
	$arr=explode(',', $vv);
}

return $arr;
