/*
 * 	PhotoNavigation
 * 	A Javascript Module by Gaya Kessler
 * 	Version 1.1
 * 	Date: 14-01-09
 * 
 */
 
var PhotoNav = {
	
	statusArr: new Array(),
	debugging: false,
	smoothing: false,
	smoothingLevel: 0.1,
	tempX: 0,
	tempY: 0,
	winH: 0,
	winW: 0,
	IE: "",
	photo: "",
	photoWidth: 0,
	containerWidth: 0,
	container: "",
	currentEffect: "",
	
	init: function(id, width, width2, smoothing, smoothingLevel, debugging) {
		
		//catch undefined vars
		if (typeof(smoothing) != 'undefined') {
			PhotoNav.smoothing = smoothing;
		} else {
			PhotoNav.smoothing = false;
		}
		
		if (typeof(smoothingLevel) != 'undefined') {
			PhotoNav.smoothingLevel = smoothingLevel;
		} else {
			PhotoNav.smoothingLevel = 0.1;
		}
		
		if (typeof(debugging) != 'undefined') {
			PhotoNav.debugging = debugging;
		} else {
			PhotoNav.debugging = false;
		}
		
		//make room in status array
		PhotoNav.statusArr[0] = "";
		PhotoNav.statusArr[1] = "";
		
		//let PhotoNav determine mouse position
		PhotoNav.IE = document.all?true:false
		if (!PhotoNav.IE) document.captureEvents(Event.MOUSEMOVE)
		document.onmousemove = PhotoNav.getMouseXY;
		
		//set some object vars
		var obj = document.getElementById(id);
		PhotoNav.containerWidth = width;
		PhotoNav.container = obj;
		var divs = obj.getElementsByTagName("DIV");
		
		for (var i = 0; i < divs.length; i++) {
			if (divs[i].className.match('fixed')) {
				PhotoNav.photo = divs[i];
				PhotoNav.photoWidth = width2;
				PhotoNav.photo.style.width = width2 + "px";
			}
		}
	},
	
	addStatus: function(str) {
		if (PhotoNav.debugging == true) {
			var stats = document.getElementById("status");
			
			PhotoNav.statusArr.unshift(str);
			PhotoNav.statusArr.splice(3, 10);
			
			stats.innerHTML = "";
			
			for (var i = 2; i > 0; i = i - 1) {
				stats.innerHTML = PhotoNav.statusArr[i] + "<br />" + stats.innerHTML;	
			}
			
			if (PhotoNav.statusArr.length > 5) {
				stats.innerHTML = 'oi';
			}
		}
	},
	
	getMouseXY: function (e) {
		//determine mouse position
		if (PhotoNav.IE) { // grab the x-y pos.s if browser is IE
			PhotoNav.tempX = event.clientX + document.body.scrollLeft
			PhotoNav.tempY = event.clientY + document.body.scrollTop
		} else {  // grab the x-y pos.s if browser is NS
			PhotoNav.tempX = e.pageX
			PhotoNav.tempY = e.pageY
		}  
		// catch possible negative values in NS4
		if (PhotoNav.tempX < 0) {
			PhotoNav.tempX = 0;
		}
		
		if (PhotoNav.tempY < 0) {
			PhotoNav.tempY = 0;
		}
		
		if (parseInt(navigator.appVersion)>3) {
			if (navigator.appName=="Netscape") {
				PhotoNav.winW = window.innerWidth;
				PhotoNav.winH = window.innerHeight;
			}
			if (navigator.appName.indexOf("Microsoft")!=-1) {
				PhotoNav.winW = document.body.offsetWidth;
				PhotoNav.winH = document.body.offsetHeight;
			}
		}
		
		var containerY = PhotoNav.findPosY(PhotoNav.container);
		var containerH = PhotoNav.container.offsetHeight;
		
		//first check if cursor is height enough
		if (PhotoNav.tempY > containerY && PhotoNav.tempY < (containerY + containerH)) {			
			//determine % horizontal
			var perc = (100 / (PhotoNav.containerWidth / (PhotoNav.tempX - PhotoNav.findPosX(PhotoNav.container)))) ;
			
			if (perc < 0) {
				perc = 0;
				PhotoNav.addStatus("Not in element.");
			} else if (perc > 100) {
				perc = 100;
				PhotoNav.addStatus("Not in element.");
			} else {
				PhotoNav.addStatus("Mouse X: " + PhotoNav.tempX + " / " + PhotoNav.winW + " = " + perc + "%");
				
				PhotoNav.posPicture(perc);
			}
		} else {
			PhotoNav.addStatus("Not in element.");
		}
		
		return true;
	},
	
	posPicture: function(x) {
		
		var full = PhotoNav.photoWidth;
		full = full - PhotoNav.containerWidth;
		var curX = full * (x / 100);
		
		if (curX < 0) {
			curX = 0;
		}
		
		PhotoNav.addStatus("Mouse X container: " + curX);
		
		if (PhotoNav.smoothing == true) {
			if (typeof PhotoNav.currentEffect.cancel == 'function') {
				PhotoNav.currentEffect.cancel;
			}
			PhotoNav.currentEffect = new Effect.Morph(PhotoNav.photo, {
			  style: 'margin-left:-' + curX + 'px;',
			  duration: PhotoNav.smoothingLevel
			});	
		} else {
			PhotoNav.photo.style.marginLeft = "-" + curX + "px";
		}
		
	},
	
	findPosX: function (obj) {
		var curleft = 0;
		if(obj.offsetParent)
			while(1) {
				curleft += obj.offsetLeft;
				if(!obj.offsetParent)
					break;
				obj = obj.offsetParent;
			}
		else if(obj.x)
			curleft += obj.x;
		return curleft;
	},
	
	findPosY: function(obj) {
		var curtop = 0;
		if(obj.offsetParent)
			while(1) {
				curtop += obj.offsetTop;
				if(!obj.offsetParent)
					break;
				obj = obj.offsetParent;
			}
		else if(obj.y)
			curtop += obj.y;
		return curtop;
	}
	
};

	