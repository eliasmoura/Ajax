function xml(url){
	
   	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else alert("Não Funciona neste navegador!");
	
	xmlhttp.open("GET",url,false);
	xmlhttp.send();
			
	return xmlhttp.responseText;
}
function formatarSlide (slide) {
	var texto =  pesquisaTag("<titulo",slide);
  	var formatado = "<h1>"+ slide.substring(texto[0], texto[1])
  	return formatado;
}
function mostraSlide (url) {
	var texto = xml(url);
  document.getElementById("conteudo").innerHTML = texto+formatarSlide(texto);
}
function pesquisaTag (tagname, texto) {
	var iniFimTag = [];
	iniFimTag[0] = texto.indexOf(tagname);
	iniFimTag[0] = texto.indexOf(">", iniFimTag[0])+1;
	iniFimTag[1] = texto.indexOf(tagname.replace("<","</"));
  	return iniFimTag;
}