$stmt1=$modx->db->query("SELECT `id`,`start_pr`,`end_pr` FROM `modx_range_price` WHERE `start_pr`<= ".$price1." AND ".$price1."  <= `end_pr`");

$r = $modx->db->getRow($stmt1);
$id_pr=$r['id'];
//print_r($id_pr);
$stmt2=$modx->db->query("SELECT `param` FROM `modx_calculation` WHERE `id_price`=".$id_pr." AND `type_torg`=".$torgi." AND `moscow`=".$city." AND `category`=".$category." AND `procedur_id`=".$procedur_idd."");

$row1 = $modx->db->getRow($stmt2);

$param1=$row1['param'];
$param=str_ireplace(",", ".", $param1);
//print_r($id_pr." AND ".$torgi." AND ".$city." AND ".$category." AND ".$procedur_idd);
//Прогнозируемая цена
$prognosis1=$price1*$param;
$prognosis=floatval($prognosis1);
$prognos=$prognosis/5;
if ($prognos<1){
    $prog=1;
}
else{
    $prog=round($prognos)*5;
}


if(!empty($prognosis)){


    if ($torgi==1){
        $stm=$modx->db->query("SELECT `param` FROM `********` WHERE `id_price`=".$id_pr." AND `type_torg`=".$torgi." AND `moscow`=".$city." AND `category`=".$category." AND `procedur_id`=".$procedur_id."");
        
        $rr=$modx->db->getRow($stm);
        // echo "Процент покупки по начальной цене-";
        $win_pr_now1=$rr['param'];
        
        $win_pr_now=round($win_pr_now1,2);
        
    }
    $currentt_price = !empty($row['current_price']) ? $row['current_price'] : $row['price'];
    //$currentt_price = number_format($cur_pr, 2, '.', ' ');;
    //print_r($current_prcie);
    $price1=floatval($price1);              
    if(!empty($currentt_price) and !empty($price1) and $currentt_price!=0 and $price1!=0 and $torgi==-1){

        if(($currentt_price-$prognosis)>0)
            $xx=1;
        else
            $xx=-1;
        //print_r('$currentt_price:'.$currentt_price.' $prognosis:'.$prognosis.' $price1:'.$price1);
        $win_pr_now1=($xx*pow(abs($currentt_price-$prognosis),1/3.)+pow($prognosis,1/3.))/(pow(($price1-$prognosis),1/3.)+pow($prognosis,1/3.));
        $win_pr_now1=floatval($win_pr_now1*100.);
        $win_pr_now=round($win_pr_now1,2);//Вероятность победы на интервале
    }
}
