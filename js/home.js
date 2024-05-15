
var radio = document.querySelector('.btnmanual')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaimg()
}, 5000)

function proximaimg(){
    cont++

    if(cont >3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}

document.addEventListener('DOMContentLoaded', function() {
    const frase = document.getElementById('hoverFrase');
    const aparecer = document.getElementById('aparecerText');

    frase.addEventListener('mouseover', function() {
        aparecer.style.display = 'block';
    });

    frase.addEventListener('mouseout', function() {
        aparecer.style.display = 'none';
    });
});