function calc(x){
	//takes inputs from keys
	document.getElementById("disp").value+=x;
}

function clr(){
	//clears the whole display
	document.getElementById("disp").value="";
}

function backspace(){
	//clears one character at a time
	var val=document.getElementById("disp").value;
	document.getElementById("disp").value=val.substr(0,val.length-1);
}

function solve(){
	//calculates the result
	var x=document.getElementById("disp").value;
	var y=eval(x);
	document.getElementById("disp").value=y;
}	