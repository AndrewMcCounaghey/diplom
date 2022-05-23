<?php
$stm=$dbh->prepare("SELECT COUNT(*) AS count FROM `********` WHERE `lot_id`=:id");
$stm->bindParam(':id', $row['id']);
$stm->execute();
$rw = $stm->fetch(PDO::FETCH_ASSOC);
$fav=$rw['count'];
$stm1=$dbh->prepare("SELECT COUNT(*) AS count FROM `*****` WHERE `favs` LIKE ?");
$stm1->execute(array('%'.$row['id'].'%'));
$rww = $stm1->fetch(PDO::FETCH_ASSOC);
$fav1=$rww['count'];
$f=$fav+$fav1;
