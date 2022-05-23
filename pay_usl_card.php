<?php
require_once($_SERVER['DOCUMENT_ROOT'] . '/assets/libs/components/miniLogClass.php');
$mini_log=new miniLog('procPay1.txt');
$llog =new miniLog('usl_card_pay.txt');
if(strlen($method)>0)
	$mini_log->toLog(implode($param,","));
if (isset($_POST['submit']) or isset($_POST['submit1']) or isset($_POST['submit2']) or isset($_POST['submit3']) or isset($_POST['submit4']) or isset($_POST['submit5']))
{

	if(isset($_POST['id_usl'])){
		$summ_int = $_POST['summ-int'];
		$mass = $_POST['id_usl'];
		$tte=$_POST['tt'];
		$llog->toLog('price:'.$summ_int);
		$llog->toLog('id:'.$mass);
		$sub=$_POST['a_pay'];
		$llog->toLog('tTimeeE12:'.$tte);
	}
	else if(isset($_POST['id_usl1'])){
		$summ_int = $_POST['summ-int1'];
		$mass = $_POST['id_usl1'];
		$tte=$_POST['tt'];
		$sub=$_POST['a_pay1'];
		$llog->toLog('price:'.$summ_int);
		$llog->toLog('id:'.$mass);
		$llog->toLog('tTimeeE12:'.$tte);
	}
	else if(isset($_POST['id_usl2'])){
		$summ_int = $_POST['summ-int2'];
		$mass = $_POST['id_usl2'];
		$tte=$_POST['tt'];
		$sub=$_POST['a_pay2'];
		$llog->toLog('tTimeeE12:'.$tte);
		$llog->toLog('price:'.$summ_int);
		$llog->toLog('id:'.$mass);
	}
	else if(isset($_POST['id_usl3'])){
		$summ_int = $_POST['summ-int3'];
		$mass = $_POST['id_usl3'];
		$tte=$_POST['tt'];
		$sub=$_POST['a_pay3'];
		$llog->toLog('tTimeeE12:'.$tte);
		$llog->toLog('price:'.$summ_int);
		$llog->toLog('id:'.$mass);
	}
	else if(isset($_POST['id_usl4'])){
		$summ_int = $_POST['summ-int4'];
		$mass = $_POST['id_usl4'];
		$tte=$_POST['tt'];
		$sub=$_POST['a_pay4'];
		$llog->toLog('tTimeeE12:'.$tte);
		$llog->toLog('price:'.$summ_int);
		$llog->toLog('id:'.$mass);
	}
	else if(isset($_POST['id_usl5'])){
		$summ_int = $_POST['summ-int5'];
		$mass = $_POST['id_usl5'];
		$tte=$_POST['tt'];
		$sub=$_POST['a_pay5'];
		$llog->toLog('tTimeeE12:'.$tte);
		$llog->toLog('price:'.$summ_int);
		$llog->toLog('id:'.$mass);
		$llog->toLog('sub:'.$sub);
	}
	$mini_log->toLog($mass);
	$mass=explode(',',$mass);
	$user = $modx->getUserData();
	$ar=array_unique($mass);
	array_filter($ar);
	$mini_log->toLog('count arr ='.count($ar));
	
	$summ_dec = '00';
	$summ = $summ_int . '.' . $summ_dec;
	$summ = $summ * 1;

	$q = $modx->db->query("
		SELECT value 
		FROM " . $modx->getFullTableName('site_tmplvar_contentvalues') . " 
		WHERE tmplvarid='0' and contentid='0' and value LIKE 'paymentId=%'
	");
	$row = $modx->db->getRow($q);
	$row['value'] = explode('=', $row['value']);
	$nInvId = $row['value'][1] + 1;
	$modx->db->query("
		UPDATE " . $modx->getFullTableName('site_tmplvar_contentvalues') . " 
		SET value='" . $row['value'][0]."=" . $nInvId . "' 
		WHERE tmplvarid='0' and contentid='0' and value LIKE 'paymentId=%'
	");
	$desc = 'Оплата выбранных услуг';
	$secretKey ='****************';
	//подписка
	if($sub==1){
		
		$ss = addslashes(json_encode(array("payment_type"=>"card",'user_id' => $_SESSION['userId'],'id_usl'=>$ar, 'tt'=>$tte, 'sub'=>$sub)));
		//Записать информацию в лог платежей
		$payment = array(
			'date' => time()
			,'summ' => $summ
			,'status' => 1
			,'target' => 'card'
			,'user_id' => $_SESSION['userId']
			,'purchase_id' => $nInvId
			,'desc' => $desc
			,'pay' =>$ss
			,'id_usl'=>$ar
			
		);

		
		$insert_log = $modx->db->insert($payment, $modx->getFullTableName('***));
		if ($insert_log)
		{
			$account = $modx->db->getInsertId();
			$hashStr = $account.'{up}'.$desc.'{up}'.$summ.'{up}'.$secretKey;
			$sign = hash('sha256', $hashStr);
			$url = "https://unitpay.ru/pay/*****-5edb3?sum=".$summ."&account=".$account."&desc=".$desc."&signature=".$sign."&subscription=true&customerEmail=".$user['email']."&cashItems=". base64_encode(json_encode([["name" => "Оплата информационных услуг на HEVEYA.RU", "count" => 1, "price" => 1, "type" => "commodity"]]));
			header("Location: " . $url);
			die();

		}
		else
		{
			$o_err_1 = '<div class="row-str">Ошибка. Оплата не может быть произведена. Попробуйте снова или обратитесь к администратору.</div>';
			require '../assets/snippets/PHPMailerNew/PHPMailerAutoload.php';
			$mail = new PHPMailer;
			$mail->IsHTML(true);
			$mail->SMTPAuth = false;
			$mail->CharSet = "UTF-8";
			$mail->From      = "andreyzemtsov5@gmail.com";
			$mail->FromName  = "Уведомление с сайта";
			$mail->addAddress("maksimsosnin@mail.ru");  
			$mail->Body  = "Пользователь с id=".$user['id']." не смог оплатить услугу. Время запроса: ".date('d.m.Y');
		}
	}
	else{
		
		$ss = addslashes(json_encode(array("payment_type"=>"card",'user_id' => $_SESSION['userId'],'id_usl'=>$ar, 'tt'=>$tte, 'sub'=>$sub)));
		//Записать информацию в лог платежей
		$payment = array(
			'date' => time()
			,'summ' => $summ
			,'status' => 1
			,'target' => 'card'
			,'user_id' => $_SESSION['userId']
			,'purchase_id' => $nInvId
			,'desc' => $desc 
			,'pay' =>$ss
			,'id_usl'=>$ar
			
		);

		//$subscriptionId=1;
		$insert_log = $modx->db->insert($payment, $modx->getFullTableName('*****'));
		if ($insert_log)
		{
			$account = $modx->db->getInsertId();
			$hashStr = $account.'{up}'.$desc.'{up}'.$summ.'{up}'.$secretKey;
			$sign = hash('sha256', $hashStr);
			//подписка


			$url = "https://unitpay.ru/pay/******-5edb3?sum=".$summ."&account=".$account."&desc=".$desc."&signature=".$sign."&customerEmail=".$user['email']."&cashItems=". base64_encode(json_encode([["name" => "Оплата информационных услуг на HEVEYA.RU", "count" => 1, "price" => $summ, "type" => "commodity"]]));

			header("Location: " . $url);
			die();
		}
		else
		{
			$o_err_1 = '<div class="row-str">Ошибка. Оплата не может быть произведена. Попробуйте снова или обратитесь к администратору.</div>';
			require '../assets/snippets/PHPMailerNew/PHPMailerAutoload.php';
			$mail = new PHPMailer;
			$mail->IsHTML(true);
			$mail->SMTPAuth = false;
			$mail->CharSet = "UTF-8";
			$mail->From      = "andreyzemtsov5@gmail.com";
			$mail->FromName  = "Уведомление с сайта";
			$mail->addAddress("maksimsosnin@mail.ru");  
			$mail->Body  = "Пользователь с id=".$user['id']." не смог оплатить услугу. Время запроса: ".date('d.m.Y');
		}
	}
}
if ($_REQUEST['status'] === 'success')
{
	$o_err_1 = '<div class="row-str">Спасибо. Оплата успешно проведена.</div>';

}
