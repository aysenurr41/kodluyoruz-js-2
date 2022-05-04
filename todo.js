'use strict';

/*Buraya kadar fonksyion ve event listenerlarda kullacagimiz variable'lari storeladik */

const newInput = document.querySelector('#task');
const button = document.querySelector(`.button`);
const liste = document.querySelector('ul');

/* Burada ise listeleri kapatmak icin kullacagimiz buttonlari olusturduk ve inline style vererek ortaya gelmelerini sagladik css dosyasini degistirmemize gerek kalmiyor ve for dongusu ile bunlari ul listesinin butun child elemenlerini secip tek tek atiyoruz*/

for (let i = 0; i < liste.children.length; i++) {
    liste.children[
        i
    ].innerHTML += `<button style="margin-right: 20px; margin-top:15px"class="close">&times</button></li>`;
}

/*Burada ise inputtan gelen deger bos olmadigi surece yapacagimiz durumu ve bossa yapilacak durumlari belirledik. Ekle dugmesine basildiginda ne olacaginin mantigini yazdik. NewInput.value ile inputtan girilen degeri cekip, liste olusturup o listenin icinde input,class ve style ile beraber parent element olan ul'nin icine soktuk. Bootstrap toastlarinin nasil kullanildigini kendi dokumantasyonundan da okuyabilirsiniz. */

function newElement() {
    if (newInput.value != '') {
        liste.innerHTML += `<li>${newInput.value}<button style = "margin-right: 20px; margin-top:15px" class="close">&times</button></li>`;

        //htmldeki bootstrap toastini sectik
        let toastBasarili = document.querySelector('.success');

        /*Sectigimiz bootstrap selektorunu new Bootstrap constructor'u kullanarak obje haline getirdik*/
        let toastAlertBasarili = new bootstrap.Toast(toastBasarili);

        //objemizi show methodu ile ekranda gosteriyoruz.
        toastAlertBasarili.show();

    } else {
        // Ayni islemleri olumsuz durumda olusacak toast icin de yapiyoruz //

        let toastBasarisiz = document.querySelector('.error');
        let toastAlertBasarisiz = new bootstrap.Toast(toastBasarisiz);
        toastAlertBasarisiz.show();
    }
}
/* Burada ise ul'ye event listener ekledik ve eventin hangi classi etkiledigine gore yapacagi islemleri belirledik. 2 ayri event listener ve fonksiyon olusturmak yerine tek event listener icinde 2 farkli fonksyion olusturmayi tercih ettim*/

button.addEventListener('click', function (e) {
    if (e.target.className == '' || e.target.className == 'chacked') {
        e.target.classList.toogle('checked');
    } else {
        e.target.parentElement.remove();
    }
});







