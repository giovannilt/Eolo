var timeToReload=60; //Tempo di reload
var countDown=0;
var data="";
var lamp=true;
var lamp2=true;
var lamp3=true;

function ajaxFunction() {
	var xmlHttp;	
	try	{
		// Firefox, Opera 8.0+, Safari
		xmlHttp=new XMLHttpRequest();
	}catch (e) {
		// Internet Explorer
		try {
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e)  {
			try  {
				xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
			}   catch (e) {
				alert("Your browser does not support AJAX!");
				return false;
			}
		}
	}
	xmlHttp.open("GET","apollo.jsp",true);

	xmlHttp.onreadystatechange=function(){
		if(xmlHttp.readyState==4){
			document.getElementById("tabella").innerHTML=xmlHttp.responseText;
			// var xmlDoc=xmlHttp.responseXML.documentElement; // Nel caso in cui voglia implementare in XML
			//document.getElementById("txtHint").innerHTML=xmlHttp.responseText;
		}
    }
	//xmlHttp.open("GET","eolo/apollo.jsp",true);
	
		xmlHttp.send(null);
	
}

function Orologio(){
	if(countDown<=0){
		countDown=timeToReload;
		ajaxFunction();		
		var currentTime = new Date();
		var month = currentTime.getMonth() + 1;
		var day = currentTime.getDate();
		var year = currentTime.getFullYear();
		var seconds =currentTime.getSeconds(); 
		var minuts= currentTime.getMinutes(); 
		var hours= currentTime.getHours();
		data=hours+"."+minuts+":"+seconds+"  "+ day + "." + month + "." + year;
	}
	document.getElementById("orologio").innerHTML="Last check at: "+data+" next in: "+countDown+"''"
	countDown--;
}

function TheTimer(){
	Orologio();
	setTimeout("TheTimer()", 1000);
}

function getStatusLigth(luce, torre){
	var ritorno=true;
	if(document.getElementById("ligth"+luce+torre)!=null){
		if(document.getElementById("ligth"+luce+torre).innerHTML!='success'){
			ritorno=false;
		 }
	}
	return ritorno;
}

function LampMichelangelo0(){
	if(lamp){
		if(getStatusLigth(0,0)){
			document.getElementById("Luce1Defa1").style.backgroundColor="#C8FF1B";
		}else{
			document.getElementById("Luce1Defa1").style.backgroundColor="#FF0000";
		}
	}else{
		document.getElementById("Luce1Defa1").style.backgroundColor="";
	}
	lamp=!lamp;
	setTimeout("LampMichelangelo0()", 521);
}
function LampMichelangelo1(){
	if(lamp){
		if(getStatusLigth(1,0)){
			document.getElementById("Luce2Defa1").style.backgroundColor="#C8FF1B";
		}else{
			document.getElementById("Luce2Defa1").style.backgroundColor="#FF0000";
		}
	}else{
		document.getElementById("Luce2Defa1").style.backgroundColor="";
	}
	lamp=!lamp;
	setTimeout("LampMichelangelo1()", 321);
}
function LampMichelangelo2(){
	if(lamp){
		if(getStatusLigth(2,0)){
			document.getElementById("Luce3Defa1").style.backgroundColor="#C8FF1B";
		}else{
			document.getElementById("Luce3Defa1").style.backgroundColor="#FF0000";
		}
	}else{
		document.getElementById("Luce3Defa1").style.backgroundColor="";
	}
	lamp=!lamp;
	setTimeout("LampMichelangelo2()", 221);
}
function LampLeonardo0(){
	if(lamp){
		if(getStatusLigth(0,1)){
			document.getElementById("Luce1Defa2").style.backgroundColor="#C8FF1B";
		}else{
			document.getElementById("Luce1Defa2").style.backgroundColor="#FF0000";
		}
	}else{
		document.getElementById("Luce1Defa2").style.backgroundColor="";
	}
	lamp=!lamp;
	setTimeout("LampLeonardo0()", 454);
}
function LampLeonardo1(){
	if(lamp){
		if(getStatusLigth(1,1)){
			document.getElementById("Luce2Defa2").style.backgroundColor="#C8FF1B";
		}else{
			document.getElementById("Luce2Defa2").style.backgroundColor="#FF0000";
		}
	}else{
		document.getElementById("Luce2Defa2").style.backgroundColor="";
	}
	lamp=!lamp;
	setTimeout("LampLeonardo1()", 334);
}
function LampLeonardo2(){
	if(lamp){
		if(getStatusLigth(2,1)){
			document.getElementById("Luce3Defa2").style.backgroundColor="#C8FF1B";
		}else{
			document.getElementById("Luce3Defa2").style.backgroundColor="#FF0000";
		}
	}else{
		document.getElementById("Luce3Defa2").style.backgroundColor="";
	}
	lamp=!lamp;
	setTimeout("LampLeonardo2()", 234);
}

function LampDonatello0(){
	if(lamp){
		if(getStatusLigth(0,2)){
			document.getElementById("Luce1Defa3").style.backgroundColor="#C8FF1B";
		}else{
			document.getElementById("Luce1Defa3").style.backgroundColor="#FF0000";
		}
	}else{
		document.getElementById("Luce1Defa3").style.backgroundColor="";
	}
	lamp=!lamp;
	setTimeout("LampDonatello0()", 645);
}
function LampDonatello1(){
	if(lamp){
		if(getStatusLigth(1,2)){
			document.getElementById("Luce2Defa3").style.backgroundColor="#C8FF1B";
		}else{
			document.getElementById("Luce2Defa3").style.backgroundColor="#FF0000";
		}
	}else{
		document.getElementById("Luce2Defa3").style.backgroundColor="";
	}
	lamp=!lamp;
	setTimeout("LampDonatello1()", 454);
}
function LampDonatello2(){
	if(lamp){
		if(getStatusLigth(2,2)){
			document.getElementById("Luce3Defa3").style.backgroundColor="#C8FF1B";
		}else{
			document.getElementById("Luce3Defa3").style.backgroundColor="#FF0000";
		}
	}else{
		document.getElementById("Luce3Defa3").style.backgroundColor="";
	}
	lamp=!lamp;
	setTimeout("LampDonatello2()", 354);
}

function LampRaffaello0(){
	if(lamp){
		if(getStatusLigth(0,3)){
			document.getElementById("Luce1Defa4").style.backgroundColor="#C8FF1B";
		}else{
			document.getElementById("Luce1Defa4").style.backgroundColor="#FF0000";
		}
	}else{
		document.getElementById("Luce1Defa4").style.backgroundColor="";
	}
	lamp=!lamp;
	setTimeout("LampRaffaello0()", 421);
}
function LampRaffaello1(){
	if(lamp){
		if(getStatusLigth(1,3)){
			document.getElementById("Luce2Defa4").style.backgroundColor="#C8FF1B";
		}else{
			document.getElementById("Luce2Defa4").style.backgroundColor="#FF0000";
		}
	}else{
		document.getElementById("Luce2Defa4").style.backgroundColor="";
	}
	lamp=!lamp;
	setTimeout("LampRaffaello1()", 321);
}
function LampRaffaello2(){
	if(lamp){
		if(getStatusLigth(2,3)){
			document.getElementById("Luce3Defa4").style.backgroundColor="#C8FF1B";
		}else{
			document.getElementById("Luce3Defa4").style.backgroundColor="#FF0000";
		}
	}else{
		document.getElementById("Luce3Defa4").style.backgroundColor="";
	}
	lamp=!lamp;
	setTimeout("LampRaffaello2()", 521);
}

