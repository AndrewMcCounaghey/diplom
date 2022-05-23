<?php
$arr=$modx->runSnippet('sale_usl_con');
$arrInt = array_map('intval', $arr);

$search_time=array_search('1',$arrInt);
if(!empty($photos)){

if(in_array(1, $arr) and $arrInt[$search_time+1]>time())
{
$out.='<div class="lot-header">
			<div class="lot-images">
				<div class="swiper-container mySwiper">
					<div class="carousel swiper-wrapper">';
foreach($photos as $v){ 
if(file_exists($dir.$v.'.jpg'))
{
	$xxs = "";$zxx="-";
	$ssize = getimagesize($dir.$v.'_sq.jpg');
	$xs = ($ssize[0]>$ssize[1])?$ssize[1]:$ssize[0];
	$zxx = $xs;
	if($xs<351) $xxs = '2';
	else if($xs<451) $xxs = '1';
	else if($xs<502) $xxs = '0';

	$xxs2 = "";
	$ssize = getimagesize($dir.$v.'.jpg');
	$xs = ($ssize[0]>$ssize[1])?$ssize[1]:$ssize[0];
	if($xs<351) $xxs2 = '2';
	else if($xs<451) $xxs2 = '1';
	else if($xs<502) $xxs2 = '0';

	$out.='<div class="swiper-slide" style="background:url([[phpthumb? &input=`'.$dir.$v.'_sq.jpg` &options=`q=65&fltr[]=wmi|/assets/images/style/watermark'.$xxs.'.png|C|30|0|0`]]);background-repeat: no-repeat;background-size: cover;"><a itemprop="image" style="width: 100%;height: 100%;display: block;" href="[[phpthumb? &input=`'.$dir.$v.'.jpg` &options=`fltr[]=wmi|/assets/images/style/watermark'.$xxs2.'.png|C|30|0|0`]]" data-fancybox="gallery" target="_blank"><img src="[[phpthumb? &input=`'.$dir.$v.'_sq.jpg` &options=`q=65&fltr[]=wmi|/assets/images/style/watermark'.$xxs.'.png|C|30|0|0`]]" alt="'.$row['zag'].'-'.$desc.'" ></a></div>';
}
else
{
	if(file_exists('assets/cache/images/data/items/'.$row['id'].'/'.$v.'_sq.jpg'))
	{
		$xxs = "";
		$ssize = getimagesize('assets/cache/images/data/items/'.$row['id'].'/'.$v.'_sq.jpg');
		$xs = ($ssize[0]>$ssize[1])?$ssize[1]:$ssize[0];
		if($xs<351) $xxs = '2';
		else if($xs<451) $xxs = '1';
		else if($xs<502) $xxs = '0';

		$xxs2 = "";
		$ssize = getimagesize('assets/cache/images/data/items/'.$row['id'].'/'.$v.'.jpg');
		$xs = ($ssize[0]>$ssize[1])?$ssize[1]:$ssize[0];
		if($xs<354) $xxs2 = '2';
		else if($xs<451) $xxs2 = '1';
		else if($xs<502) $xxs2 = '0';			

		$out.='<div class="swiper-slide" style="background:url([[phpthumb? &input=`'.$dir.$v.'_sq.jpg` &options=`q=65&fltr[]=wmi|/assets/images/style/watermark'.$xxs.'.png|C|30|0|0`]]);background-repeat: no-repeat;background-size: cover;"><a itemprop="image" style="width: 100%;height: 100%;display: block;" href="[[phpthumb? &input=`'.'assets/cache/images/data/items/'.$row['id'].'/'.$v.'.jpg` &options=`fltr[]=wmi|/assets/images/style/watermark'.$xxs2.'.png|C|30|0|0`]]" data-fancybox="gallery" target="_blank"><img src="[[phpthumb? &input=`'.'assets/cache/images/data/items/'.$row['id'].'/'.$v.'_sq.jpg` &options=`fltr[]=wmi|/assets/images/style/watermark'.$xxs.'.png|C|30|0|0`]]" alt="'.$row['zag'].'-'.$desc.'" ></a></div>';
	}
}

}

}else{
$out.='<div class="lot-header">
			<div class="lot-images">
				<div class="swiper-container mySwiper">
					<div class="carousel1 swiper-wrapper" >';

$v=$photos[0];
if(empty($v)){
	$v=$photos[1]; 
}
if(file_exists($dir.$v.'.jpg'))
{
	$xxs = "";$zxx="-";
	$ssize = getimagesize($dir.$v.'_sq.jpg');
	$xs = ($ssize[0]>$ssize[1])?$ssize[1]:$ssize[0];
	$zxx = $xs;
	if($xs<351) $xxs = '2';
	else if($xs<451) $xxs = '1';
	else if($xs<502) $xxs = '0';

	$xxs2 = "";
	$ssize = getimagesize($dir.$v.'.jpg');
	$xs = ($ssize[0]>$ssize[1])?$ssize[1]:$ssize[0];
	if($xs<351) $xxs2 = '2';
	else if($xs<451) $xxs2 = '1';
	else if($xs<502) $xxs2 = '0';	

	$out.='<div class="swiper-slide" style="background:url([[phpthumb? &input=`'.$dir.$v.'_sq.jpg` &options=`q=65&fltr[]=wmi|/assets/images/style/watermark'.$xxs.'.png|C|30|0|0`]]);background-repeat: no-repeat;background-size: cover;"><a itemprop="image" style="width: 100%;height: 100%;display: block;" href="[[phpthumb? &input=`'.$dir.$v.'.jpg` &options=`fltr[]=wmi|/assets/images/style/watermark'.$xxs2.'.png|C|30|0|0`]]" data-fancybox="gallery" target="_blank"><img style="display:none" src="[[phpthumb? &input=`'.$dir.$v.'_sq.jpg` &options=`q=65&fltr[]=wmi|/assets/images/style/watermark'.$xxs.'.png|C|30|0|0`]]" alt="'.$row['zag'].'-'.$desc.'" ></a></div><div class="slider-block"><svg width="36" height="50" viewBox="0 0 36 50" fill="none" xmlns="http://www.w3.org/2000/svg">							<path d="M30.4445 20.3334V13.6756C30.5113 10.303 29.2394 7.0412 26.9072 4.60403C24.575 2.16687 21.3723 0.752756 18 0.671143C14.6277 0.752756 11.4251 2.16687 9.09285 4.60403C6.76064 7.0412 5.48878 10.303 5.55558 13.6756V20.3334H0.888916V46.7778C0.888916 47.6029 1.21669 48.3942 1.80014 48.9777C2.38359 49.5611 3.17491 49.8889 4.00003 49.8889H32C32.8251 49.8889 33.6165 49.5611 34.1999 48.9777C34.7834 48.3942 35.1111 47.6029 35.1111 46.7778V20.3334H30.4445ZM19.5556 36.2467V40.5556H16.4445V36.1067C15.6871 35.717 15.0858 35.0801 14.7403 34.3017C14.3947 33.5232 14.3258 32.65 14.5448 31.8269C14.7638 31.0039 15.2577 30.2805 15.9444 29.7767C16.6312 29.273 17.4696 29.0192 18.3204 29.0575C19.1712 29.0958 19.9834 29.4238 20.6221 29.9872C21.2609 30.5506 21.6878 31.3155 21.832 32.1549C21.9762 32.9943 21.8291 33.8577 21.415 34.602C21.001 35.3463 20.3449 35.9266 19.5556 36.2467ZM27.3334 20.3334H8.66669V13.6756C8.59963 11.128 9.54365 8.65734 11.2925 6.80357C13.0413 4.9498 15.4528 3.86358 18 3.78225C20.5472 3.86358 22.9587 4.9498 24.7076 6.80357C26.4564 8.65734 27.4004 11.128 27.3334 13.6756V20.3334Z" fill="white" fill-opacity="0.88"/></svg><div class="slider-block-text">	Подключите <a href="https://www.heveya.ru/account/podklucheno-uslug" target="_blank" style="color:#2286e2 !important;">услугу</a>для просмотра всех фото</div></div> ';
}}
