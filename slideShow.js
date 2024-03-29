var i = 0;

function formatarSlide (slide) {
	var node = slide.firstChild.nextSibling;
	
	//todo slide tem um titulo, primeiro trata-o
	var texto =  "<h1>"+node.firstChild.childNodes[0].nodeValue+"</h1>";
	
	//só percorre os nós não vazios
	if(parseInt(slide.childNodes.length/2)-1)
		
		for (var k=0; k <  slide.childNodes.length-2; k++) {
			node = node.nextSibling;
			
			if(node.nodeType==1){//se o nó for do tipo elemento(1)
				
				//verifica se é nó de autores
	  			if (node.nodeName == "autores")
	  				texto += formataAutor(node);
	  			
			 	 //verifica se é nó de tópicos
	  			if (node.nodeName == "topicos")
	  				texto += formatarTopico(node);
				
	  			//verifica se é dó de citação
	  			if (node.nodeName == "citacao")
	  				texto += formataCitacao(node);
	  			//verifica se é no de imagem
	  			if (node.nodeName == "imagem")
	  				texto += formataImagem(node);
	  			if(node.nodeName == "video")
	  				texto += formataVideo(node);
			}
		}
  	return texto;
}

function formatarTopico (no) {
	  	topico = "<p><ul>";
	  	for(temp = 0; temp < no.getElementsByTagName('topico').length;temp++){
	  			//tenta pegar o conteudo do elemento
	  			try{
	  				var noTopico = no.getElementsByTagName('topico')[temp];
	  				topico += "<li>"+noTopico.getElementsByTagName('texto')[0].childNodes[0].nodeValue;
	  				//tenta acessar o nó referência(em)
	  				try{
	  					topico += "<br />" +no.getElementsByTagName('topico')[temp].getElementsByTagName('em')[0].childNodes[0].nodeValue;
	  				}catch(e){
	  					
	  				}
	  				topico+="</li>";
	  			}catch(e){
	  				//se der errado faça nada
	  			}
	  			//tenta pegar os valores dos subtópicos
	  			try{
	  				var subT = no.getElementsByTagName('topico')[temp].getElementsByTagName('subtopico');
	  				topico += "<p><ul>";
	  				for(var subno = 0; subno < subT.length; subno++){
	  					topico += "<li>"
	  					+subT[subno].getElementsByTagName('texto')[0].childNodes[0].nodeValue+"</li>";
	  				}
	  				topico +=  "</ul></p>";
	  			}catch(e){
	  				//se der errado faça nada
	  			}
	  	}
	  	topico +=  "</ul></p>";
	  	return topico;
}

function formataCitacao (no) {
	var citacao = "";
	//tenta extrair o valor do nó citacao
	try{
		citacao = "<p><q><em>"
		+no.getElementsByTagName('texto')[0].childNodes[0].nodeValue
		+"</q></em><ul id='autor'><li>"
		+no.getElementsByTagName('autor')[0].childNodes[0].nodeValue
		+"</li></ul></p>";
	}catch(e){
		//caso não consiga faça nada
	}
	return citacao;
}

function formataAutor (no) {
  var autor = "";
  try{
  	var noAutor = no.getElementsByTagName('autor'); 
  	autor = "<p><ul id='autor'>";
  	for(temp = 0; temp < noAutor.length;temp++){
  		autor += "<li>"+
	  	noAutor[temp].getElementsByTagName('texto')[0].childNodes[0].nodeValue+"</li>";
  	}
  	autor +=  "</ul></p>";
  }catch(e){
  	
  }
  return autor;
}

function formataImagem(no){
	return "<img class=\"grande\" src=\"" + no.childNodes[0].nodeValue+"\" />";
}

function formataVideo(no){
	var video = "";
	try{
		video = "<video controls='controls' width=\"640\" height=\"400\" audio=\"muted\"> "
			+"<source src=\""+no.childNodes[0].nodeValue+"\" type=\"video/ogg\" />"
			+"</video>";
	}catch(e){
		
	}
	return video;
}

function mostraSlide (slide) {
	//alert(xmlDoc.childNodes.length + " " + i);
  	document.getElementById("conteudo").innerHTML = 
  	formatarSlide(slide);
}

function slideSeguinte () {
	if (i< xmlDoc.getElementsByTagName('slide').length) {
		++i;
		mostraSlide(xmlDoc.getElementsByTagName('slide')[i]);
  	}
}

function slideAnterior () {
	if (i>0){
		--i;
  		mostraSlide(xmlDoc.getElementsByTagName('slide')[i]);
  	}
}