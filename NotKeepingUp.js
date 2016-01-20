var keywords = ["kardashian", "kards", "jenner", "kim k"]

var links = document.getElementsByTagName("a");
var imgs = document.getElementsByTagName("img");
var text = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6")

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}


for(var w=0;w<keywords.length;w++){

	for(var i=0;i<links.length;i++){
			if(links[i].href.toLowerCase().includes(keywords[w] || links[i].innerHTML.toLowerCase().includes(keywords[w])) ){
				links[i].className = "delete";
				
		}
	}

	for(var i=0;i<imgs.length;i++){
			if(imgs[i].src.toLowerCase().includes(keywords[w]) ){
				imgs[i].className = "delete";
				
		}
	}

	for(var i=0;i<text.length;i++){
			if(text[i].innerHTML.toLowerCase().includes(keywords[w]) ){
				text[i].className = "delete";
				
		}
	}
}

document.getElementsByClassName("delete").remove();
