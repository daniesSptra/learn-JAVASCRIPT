<?php 
    $angka = [20, 45, 72, 12, 55, 10, 2];
    $nKecil = $angka[0];

    print_r($angka);

    for($i=0; $i < count($angka) ; $i++) { 
        
        if ($angka[$i] < $nKecil) {
            $nKecil = $angka[$i];
        }
    }
    echo $nKecil;
?>