var i=0
var txt="CFB - Cursos / Curso de HTML Completo e profissional - www.youtube.com/cfbcursos. Sem mais delongas vamos direto para a nossa aula de hoje afinal de contas o tempo ruge e não espera acontecer. Sendo assim, agora é hora de alegria vamos sorrir e cantar do mundo não se leva nada, vamos sorrir e  cantar lá lá lá lá lá lá lá lá lá lá lá lá lá lá lá"
var vel=50

function digitação(){
  if(i<txt.length){ 
    document.getElementById("texto").innerHTML += txt.charAt(i)
    i++
    setTimeout(digitação, vel)
  }
}