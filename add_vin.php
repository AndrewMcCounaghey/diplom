<?php

require_once('../manager/includes/protect.inc.php');
@include_once('../manager/includes/config.inc.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/assets/libs/components/miniLogClass.php');
$mini_log=new miniLog('vin_add.txt');

$time=time();

startCMSSession();
include_once('../manager/includes/document.parser.class.inc.php');
$modx = new DocumentParser;

$id = $_GET['id'];
$mini_log->toLog('id='.$id);
if(!empty($id)) 
{
	$name = $_GET['name'];
	$year = $_GET['year'];
	$power = $_GET['power'];
	$avg_cost = $_GET['avg_cost'];
	$vin = $_GET['vin_code'];
	
	$qq=$modx->db->query("SELECT * FROM `*******` WHERE `id`=52 ");
	if($r=$modx->db->getRow($qq)){
		$c=$r['count']+1;
		$modx->db->query("UPDATE `*********` SET `count`=".$c." WHERE `id`=52 ");
	}	
	$q="INSERT INTO `**********`(`id`, `vin_code`, `check_vin`, `name`, `year`, `power`, `avg_cost`) VALUES ('".$id."','".$vin."','1','".$name."','".$year."','".$power."', '".$avg_cost."')";
	// var_dump($q);
	$modx->db->query($q);
}
else 
{echo "empty id";}

?>
