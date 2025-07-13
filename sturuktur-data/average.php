<?php 

    $angka = [20, 45, 72, 12, 55, 10];
    $total = 0;

    print_r($angka);
    for ($i=0; $i < count($angka) ; $i++) { 
        $total += $angka[$i];
    }
    $rataRata = $total/count($angka);
    echo($rataRata)

?>