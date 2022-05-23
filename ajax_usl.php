<?php

require_once($_SERVER['DOCUMENT_ROOT'].'/manager/includes/protect.inc.php');
$rt = @include_once($_SERVER['DOCUMENT_ROOT'].'/manager/includes/config.inc.php');
include_once($_SERVER['DOCUMENT_ROOT'].'/manager/includes/document.parser.class.inc.php');

require_once($_SERVER['DOCUMENT_ROOT'].'/assets/snippets/PHPMailer/class.phpmailer.php');
require_once($_SERVER['DOCUMENT_ROOT'].'/ajax/bible.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/assets/libs/components/miniLogClass.php');

$modx = new DocumentParser;
$modx->db->connect();
$modx->getSettings();
startCMSSession();
$modx->minParserPasses=2;
$mini_log = new miniLog('ajax_usl.txt');
$time=time();
if($_POST['time']==0){
	$time=$time+2628000;
}
elseif ($_POST['time']==1) {
 	$time=$time+31536000;
}
$user_id = $_SESSION['userId'] ;

if(empty($user_id))
{
	$user=$modx->getUserData();
	$user_id = $user['id'];	
}
$mini_log->toLog("user_id:".$user_id);
 $elemToString = '';
$querySelect  = "SELECT `access_dates` FROM ".$modx->getFullTableName('***'). " WHERE `id` = ".$user_id."";
		$result = $modx->db-> query($querySelect);
		if($result -> num_rows > 0) {
			while($row = $result -> fetch_assoc()) {
				$elemToString = $row["access_dates"];
			}
		}
$a = str_replace("|", ",", $elemToString);
$b = explode(',', $a);
$packet_arr = array_diff($b, array(''));
$packet = array_map('intval', $packet_arr);		
if (isset($_POST['total-price__info']) and !empty($user_id) and isset($_POST['myarray'])){
		$price=$_POST['total-price__info'];
		$array = $_POST["myarray"];
		for($i = 0; $i < count($packet); $i++) {
        	foreach (array_keys($packet, $array[$i]) as $key) {
	            unset($packet[$key]);
	            unset($packet[$key+1]);
        }
     }
		for($i = 0; $i < count($array); $i++){
			$array[$i] = $array[$i] . ' | ' . $time;
		}
		$mass = implode("," , $array);
   		
   		$flag = false;
	    $res = '';
	    foreach ($packet as $item) {
	        if (!empty($res)) {
	            $res .= $flag ? '|' : ',';
	        }
	        $flag = !$flag;
	        $res .= $item;
	    }
		require_once(MODX_BASE_PATH . 'assets/libs/components/balanceClass.php');	
		$balance_obj = new balance($modx);		
		$balance = $balance_obj->getBalance($user_id);
		if ($balance>=$price){			
			// Списание баланса
			$balance_obj->makeTransaction(-$price, $user_id, 'Оплата услуг ' );
			// Ответ 
			$response = array('result' => 'success','count'=>$c);
			$response = json_encode($response);			
			$updateBase = $res . ',' . $mass;
			if(count($array) != 0) {
				
				$queryInsert =$modx->db->query("UPDATE ".$modx->getFullTableName('***'). " SET `access_dates`= '{$updateBase}' WHERE `id` = ".$user_id."");					
			}
			echo $response;
			die();
			}
			else{
				$response = array('result' => 'fail');
				$response = json_encode($response);
				echo $response;
				die();
			}
}
