function leiaMais(){
  var pontos=document.getElementById("pontos")
  var maisTexto=document.getElementById("mais")
  var btnleiaMais=document.getElementById("btn_leiaMais")

  if(pontos.style.display === "none") {
    pontos.style.display="inline"
    maisTexto.style.display="none"
    btnleiaMais.innerHTML="Leia Mais"
  }else {
    pontos.style.display="none"
    maisTexto.style.display="inline"
    btnleiaMais.innerHTML="Leia Menos"
  }

}