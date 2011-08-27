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
	  	//document.getElementById("conteudo").innerHTML = <h1>oi</h1>;
	  	var nodeTopico = no.firstChild.nextSibling;//no <topico>
	  	//nodeTopico = nodeTopico.firstChild;//no #text de topico
	  	
	  	for(temp = 0; temp < nodeTopico.childNodes.length;temp++){
	  		
	  		if(nodeTopico.nodeType==1){
	  			topico += "<li>"+nodeTopico.getElementsByTagName('texto')[0].childNodes[0].nodeValue+"</li>";
	  			
	  			if ( nodeTopico.nodeName == "subtopicos"){
	  				var nodeSubtopico = nodeTopico.firstChild.nextSibling;
	  				
	  				topico += "<p><ul>";
	  				for(temp2 = 0; temp2 < (nodeTopico.childNodes.length/2)-1;temp2++){ 
	  					topico += "<li>"+nodeSubtopico.firstChild.childNodes[0].nodeValue+"</li>";
	  					nodeSubtopico = nodeSubtopico.nextSibling.nextSibling;
	  				}
	  				topico +=  "</ul></p>";
	  			}
	  		}
	  		nodeTopico = nodeTopico.nextSibling;
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
  	document.getElementById("conteudo").innerHTML = 
  	formatarSlide(slide.getElementsByTagName('slide')[i]);
}

function slideSeguinte () {
	if (i<xmlDoc.lenth) {
		i++;
  		mostraSlide(formatarSlide(xmlDoc.getElementsByTagName('slide')[i]));
  	};
}

function slideAnterior () {
	if (i>0){
	i--;
  	mostraSlide(formatarSlide(texto));}
}
