let paragraf = document.getElementById('opis');
let przycisk = document.querySelector('button');
przycisk.onclick = function opis(a, b){
        document.write(paragraf.textContent = 'Właśnie pokazał się opis');
}