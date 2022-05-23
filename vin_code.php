if(!empty($row['description'])){
    $description.=htmlspecialchars_decode($row['description']);
    preg_match_all('/([A-Z0-9]{17})+/', $description, $ot);
    $oq=array_unique($ot);
    $oq = array_unique($oq[0]);
    
    for ($i=0; $i < count($oq); $i++) {
        $vin_code= $oq[$i];
        $q=$modx->db->query("SELECT * from vin_code_check WHERE avg_cost!='' AND vin_code LIKE '%".$vin_code."%' ");// limit 30
        
        if($r=$modx->db->getRow($q)){
            
            if(!empty($r['vin_code'])){
                $vin = $r['vin_code'];
                
                $reg = "/".$vin."/";
                if(empty($r['avg_cost']))
                    $r['avg_cost']="";
                if(empty($r['power']))
                    $r['power']="";
                if(empty($r['year']))
                    $r['year']="";
                $description=preg_replace($reg, $vin."<span class='blue'> Справка: ".$r['name'].", ".$r['year'].", ".$r['power'].", средняя рыночная цена: <span style='font-weight: bold;font-size: 18px;'>".$r['avg_cost']."</span></span>", $description, 1);

             }
        
        }
        
    }
}
