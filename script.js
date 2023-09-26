alert ("selamat datang");

var tanya = true;
while ( tanya ) {
var p = prompt('pilih : batu, gunting, kertas');



var comp = Math.random();

if( comp < 0.34 ) {
    comp = 'batu';
} else if( comp >= 0.34 && comp < 0.67 ) {
    comp = 'gunting';
} else {
    comp = 'kertas';
}

var hasil = '';

if( p == comp ) {
    hasil = 'SERI!';
} else if ( p == 'batu') {
    hasil = ( comp == 'gunting' ) ? 'MENANG!' : 'KALAH!' ;
} else if( p == 'kertas') {
    hasil = ( comp == 'batu' ) ? 'KALAH!' : 'MENANG!';
} else if( p == 'gunting') {
    hasil = ( comp == 'batu' ) ? 'KALAH!' : 'MENANG!';
} else {
    hasil = 'Memasukkan pilihan yang salah!!';
}



alert('kamu memilih : ' + p + ' dan Komputer memilih : ' + comp
 + '\nMaka hasilnya : Kamu ' + hasil);
    tanya = confirm('lagi?');  
}

alert('terima kasih sudah bermain')