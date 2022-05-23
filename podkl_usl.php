if ($payment_type == 'card')
{
	
	$mini_log1->toLog("type:".$payment_type);
	$elemToString = '';
	
	$mini_log1->toLog($user_id);
	if($sub==1){
		$subscriptionId=$param['subscriptionId'];
		$mini_log1->toLog("sub:".$sub);
		$mini_log1->toLog("subscriptionId:".$subscriptionId);
	}
	$querySelect  = 'SELECT `access_dates` FROM ' . $modx->getFullTableName('*****’) . ' WHERE `id` = '.$user_id.'';
	$result = $modx->db->query($querySelect);
	
	if($row=$modx->db->getRow($result)) {

		$elemToString = $row["access_dates"];
	}
	
	$mini_log1->toLog("elem=".$elemToString);
	
	$mini_log1->toLog("count_usl=".count($id_usl1));
	
	if ($ttime==0){
		$dt=time()+2628000;
	}
	else{
		$dt = time()+31536000;
	}
	//Подписка
	$usls=implode(',',$id_usl1);
	if($subscriptionId and $sub==1){
		
		$querySelect1  = "INSERT `*****`.`****` SET `id_user`='".$user_id."', `id_usl`='".$usls."',`tt`='".$ttime."',`summ`='".$summa."',`date_spis`='".$dt."',`subscripe_id`='".$subscriptionId."', `date_month`=0 , status_sub=1";


		$modx->db->query($querySelect1);							

	}

	$mini_log1->toLog("dt=".$dt);

	for($i = 0; $i < count($id_usl1); $i++){
		$usl[$i] = $id_usl1[$i] . ' | ' . $dt;							
	}
	$mini_log1->toLog("id_usl0=".$usl[1]);
	$win=implode(',',$usl);
	$updateBase = $win . ',' . $elemToString;
	$mini_log1->toLog("updateBase=".$updateBase);
	if(count($usl) != 0) {
		$s='UPDATE ' . $modx->getFullTableName('1_users') . ' SET `access_dates`= "' .$updateBase. '" WHERE `id` = ' . $user_id . '';
		$mini_log1->toLog("UPDATE1:".$s);
		$q = $modx->db->query($s);
	}

	
	echo json_encode(array('result'=>array('message'=>'Order finished')));	
	die();
	header('Location: ' . $modx->makeUrl(221, '', 'status=success', 'full'));
	die();
} 

if ($payment_type == 'balance')
{
	$s = '
		UPDATE ' . $modx->getFullTableName('*******) . '
		SET `balance` = (`balance` + ' . $summa . ')
		WHERE `id` = ' . $user_id . '
		LIMIT 1
	';
	$mini_log->toLog($s);	
	$q_balance_upd = $modx->db->query($s);
echo json_encode(array('result'=>array('message'=>'Order finished')));
die();
	$user = $modx->getUserData();
		if($user['type']=="fiz" or $user["type"]=="ur")
			header('Location: ' . $modx->makeUrl(185, '', 'status=success', 'full'));
		else
			header('Location: ' . $modx->makeUrl(97, '', 'status=success', 'full'));
	
	die();
}
