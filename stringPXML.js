/**
 * @author Kotto
 */
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