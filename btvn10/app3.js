const $treo1 = document.getElementById('treo-1');
const $treo2 = document.getElementById('treo-2');
const $treo22 = document.getElementById('treo-22');
const $treo3 = document.getElementById('treo-3');
const $treo4 = document.getElementById('treo-4');

const $erase1 = document.getElementById('erase-1');
const $erase2 = document.getElementById('erase-2');
const $erase22 = document.getElementById('erase-22');
const $erase3 = document.getElementById('erase-3');
const $erase4 = document.getElementById('erase-4');

$erase1.onclick = delete1;
$erase2.onclick = delete2;
$erase22.onclick = delete22;
$erase3.onclick = delete3;
$erase4.onclick = delete4;


function delete1(){
    $treo1.remove();
}
function delete2(){
    $treo2.remove();
}
function delete22(){
    $treo22.remove();
}
function delete3(){
    $treo3.remove();
}
function delete4(){
    $treo4.remove();
}