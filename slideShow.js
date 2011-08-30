var i = 0;

function formatarSlide (slide) {
	//todo slide tem um titulo, primeiro trata-o
	var node = slide.firstChild;
	node = node.nextSibling;
	
	var texto =  "<h1>"+node.firstChild.childNodes[0].nodeValue+"</h1>";
	//alert(parseInt(slide.childNodes.length/2)-1);
	
	if(parseInt(slide.childNodes.length/2)-1)
	//verifica o tipo dos nós e trata-os
		for (var k=0; k <  slide.childNodes.length-2; k++) {
			node = node.nextSibling;
			
			if(node.nodeType==1){
				//alert(node.nodeName);
				//verifica se é nó de autores
	  			if (node.nodeName == "autores")
	  				texto += formataAutor(slide);
	  			
			 	 //verifica se é nó de tópicos
	  			if (node.nodeName == "topicos")
	  				texto += formatarTopico(node);
				
	  			//verifica se é citação
	  			if (slide.childNodes[k].nodeName == "citacao")
	  				texto += formataCitacao(slide);
			}
		}
  	return texto;
}

function formatarTopico (no) {
	  	
	  	topico = "<p><ul>";
	  	
	  	var nodeTopico = no.firstChild.nextSibling;
	  	//alert(no.getElementsByTagName('topico')[0].firstChild.nextSibling.nodeName);
	  	for(temp = 0; temp < no.getElementsByTagName('topico').length;temp++){
	  			try{
	  				
	  				topico += "<li>"+no.getElementsByTagName('topico')[temp].getElementsByTagName('texto')[0].childNodes[0].nodeValue+"</li>";
	  			}catch(e){
	  				
	  			}
	  			try{
	  				var nn = no.getElementsByTagName('topico')[temp].getElementsByTagName('subtopico');
	  				topico += "<p><ul>";
	  				for(var subno = 0; subno < nn.length; subno++){
	  					topico += "<li>"
	  					+nn[subno].getElementsByTagName('texto')[0].childNodes[0].nodeValue+"</li>";
	  				}
	  				topico +=  "</ul></p>";
	  			}catch(e){}
	  	}
	  	topico +=  "</ul></p>";
	  	return topico;
}

function formataCitacao (no) {
	  	return "<p><q>"
	  	+no.getElementsByTagName('citacao')[0].childNodes[0].getElemetsByTagName("texto")[0].childNodes[0].nodeValue
	  	+"</q><ul id='autor'><li>"
	  	+no.getElementsByTagName('citacao')[0].childNodes[0].getElemetsByTagName("autor")[0].childNodes[0].nodeValue
	  	+"</li></ul></p>";
	  
}

function formataAutor (no) {
  var nodeAutor =  no.getElementsByTagName('autores')[0];
  var autor = "<p><ul id='autor'>";
  
  for(temp = 0; temp < parseInt((nodeAutor.childNodes.length/2));temp++){
  	//alert(nodeAutor.getElementsByTagName('autor')[temp].childNodes[1].nodeValue);
  	autor += "<li>"+
  	nodeAutor.getElementsByTagName('autor')[temp].childNodes[1].nodeValue+"</li>";
  }
	 
  autor +=  "</ul></p>";
  return autor;
}

function mostraSlide (slide) {
	//alert(xmlDoc.childNodes.length + " " + i);
  	document.getElementById("conteudo").innerHTML = 
  	formatarSlide(slide.getElementsByTagName('slide')[i]);
}

function slideSeguinte () {
	
	if (true) {
		++i;
  		mostraSlide(formatarSlide(xmlDoc.getElementsByTagName('slide')[i]));
  	};
}

function slideAnterior () {
	if (i>0){
	i--;
  	mostraSlide(formatarSlide(texto));}
}
