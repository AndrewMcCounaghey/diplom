$arrInt = array_map('intval', $arr);
$arr=$modx->runSnippet('sale_usl_con');
$search_time=array_search('3',$arrInt);
if(in_array(3, $arr) and $arrInt[$search_time+1]>time()){
    if($win_pr_now==100){
        $win_pr_now=98;
    }
    $ver_win = $win_pr_now.' %';

}
else{
    $ver_win='<a href="https://www.heveya.ru/account/podklucheno-uslug" target="_blank" style="color:#2286e2 !important;font-size: 17px;font-weight: 500;">Подключить</a>';
}
$search_time1=array_search('4',$arrInt);
if(in_array(4, $arr) and $arrInt[$search_time1+1]>time()){
    if($prog>=$row['price_min']){
        $end_pr_win=number_format($prog, 0, ',', ' ' ).' &#8381';
    }
    else{
        $end_pr_win=''. $min_price.' &#8381';
    }
    
    
}
else {
    $end_pr_win='<a href="https://www.heveya.ru/account/podklucheno-uslug" target="_blank" style="color:#2286e2 !important;font-size: 17px;font-weight: 500;">Подключить</a>';
}
