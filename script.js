var bar = document.getElementById('bar')
var nav = document.getElementById('navbar')


 bar.onclick = function(){
    nav.classList.add('active')

 }

 var close = document.getElementById('close')

 close.onclick = function(){
    nav.classList.remove('active')
    nav.classList.add('inac')
 }

