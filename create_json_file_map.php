<?php
$out='';
    $q=$modx->db->query("SELECT * from `modx_1_prodazha` AS p JOIN `create_json_map` AS cr ON cr.id=p.id WHERE p.`expiration`>=".time()." AND p.`category`!=25 AND p.`category`!=15 AND p.`category`!=73 AND p.`category`!=76 AND p.`category`!=33 AND p.`category`!=51 AND p.`category`!=106 AND p.`category`!=75 AND p.`category`!=29 AND p.`category`!=30 AND p.`category`!=31 AND p.`category`!=17 AND p.`category`!=19");
$main = '<div id="main" class="hidden"><ul>';
$car = '<div id="car" class="hidden"><ul>';
$oborud = '<div id="oborud" class="hidden"><ul>';
$dvizh = '<div id="dvizh" class="hidden"><ul>';
$komerch = '<div id="komerch" class="hidden"><ul>';

while($row=$modx->db->getRow($q))
{
    if($row['expiration']>=time() and $row['published']==1){
        /*$row['price']=str_replace('.00','',$row['price']);
        $row['price']=str_replace('.00.','',$row['price']);
        $row['price']=str_replace('.0','',$row['price']);
        $row['price']=str_replace('.99','',$row['price']);
        $row['price']=str_replace('.','',$row['price']);*/
        $needle= '.';
        $haystack = $row['price'];

        $pos = strripos($haystack, $needle);

        if ($pos === false) {
            $row['price']=$haystack;
        } else {
            $row['price']=strstr($row['price'], '.', true);
        }
        
        if($row['category']=="23"){ 
                
            $dvizh.='<li class="mapp" data-id='.$row['id'].' data-position="'.$row['position'].'" data-link="'.$row['link'].'" data-price="'.$row['price'].'" data-category="'.$row['category'].'" data-type="'.$row['torgi'].'" data-photos="'.$row['photos'].'" data-zag="'.$row['zag'].'"></li>';
             //}
        }
        if($row['category']=="24"){         
            $komerch.='<li class="mapp" data-id='.$row['id'].' data-position="'.$row['position'].'" data-link="'.$row['link'].'" data-price="'.$row['price'].'" data-category="'.$row['category'].'" data-type="'.$row['torgi'].'" data-photos="'.$row['photos'].'" data-zag="'.$row['zag'].'"></li>';
        }
        if($row['category']=="20" or $row['category']=="21" or $row['category']=="104" or $row['category']=="22" or $row['category']=="61"){
            $car.='<li class="mapp" data-id='.$row['id'].' data-position="'.$row['position'].'" data-link="'.$row['link'].'" data-price="'.$row['price'].'" data-category="'.$row['category'].'" data-type="'.$row['torgi'].'" data-photos="'.$row['photos'].'" data-zag="'.$row['zag'].'"></li>';
        }
        if($row['category']=="27" or $row['category']=="28" or $row['category']=="44" or $row['category']=="26" or $row['category']=="45" or $row['category']=="52" or $row['category']=="50"){
            $oborud.='<li class="mapp" data-id='.$row['id'].' data-position="'.$row['position'].'" data-link="'.$row['link'].'" data-price="'.$row['price'].'" data-category="'.$row['category'].'" data-type="'.$row['torgi'].'" data-photos="'.$row['photos'].'" data-zag="'.$row['zag'].'"></li>';
        }
        
        $main.='<li class="mapp" data-id='.$row['id'].' data-position="'.$row['position'].'" data-link="'.$row['link'].'" data-price="'.$row['price'].'" data-category="'.$row['category'].'" data-type="'.$row['torgi'].'" data-photos="'.$row['photos'].'" data-zag="'.$row['zag'].'"></li>';
        
    }
}
$main.='
    </ul></div>';
$car.='
    </ul></div>';
$oborud.='
    </ul></div>';
$dvizh.='
    </ul></div>';
$komerch.='
    </ul></div>';

$out.=$main;
$out.=$car;
$out.=$oborud;
$out.=$dvizh;
$out.=$komerch;
return $out;
