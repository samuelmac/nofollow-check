(function () {
	var e = document.querySelectorAll('a');
	var r = '', t='', o=0, f=0;
	for (var i=0; i < e.length; i++) {
		if (e[i].getAttribute('href').startsWith('http')) {
			if (e[i].hasAttribute('rel')) {
				if (e[i].getAttribute('rel') === 'nofollow') {
					o++;
				} else {
					f++;
					t += '\r\n' + GetInnerText(e[i]);
				}
			} else { 
				f++;
				t += '\r\n' +  GetInnerText(e[i]);
			 }
		} else { o ++; }
	}
	
	r = e.length + ' external links checked for nofollow. ' + o + ' OK; ' + f + ' Failed.';
	
	console.log(r + t);
	
	function GetInnerText(node) {
		if (node.innerText.trim().length > 0) {
			return node.innerText;
		} else if (node.querySelector('img').hasAttribute('alt')) {
			if (node.hasAttribute('title')) {
				return node.querySelector('img').getAttribute('alt');	
			} else {
				if (node.hasAttribute('title')) {
					return node.getAttribute('title');
				} else {
					return 'No link text found!'
				}
			}
			
		} else if (node.hasAttribute('title')) {
			return node.getAttribute('title');
		} else {
			return 'No link text found!'
		}
	}
})();
