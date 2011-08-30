/**
 * @author Kotto
 */
function xml(url){
	
   	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else alert("Não Funciona neste navegador!");
	
	xmlhttp.open("GET",url,false);
	xmlhttp.send();
	
	return xmlhttp.responseText;
}
//convert string para xml
xmlDoc;
function ajax (url) {
  var texto = xml(url);
  i = 0;
  
  if (window.DOMParser)
   {
   		var parser=new DOMParser();
   		xmlDoc=parser.parseFromString(texto,"text/xml");
   }
   
  mostraSlide(xmlDoc);
}