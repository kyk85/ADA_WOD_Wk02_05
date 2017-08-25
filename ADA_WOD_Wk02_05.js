var msg=''

function factorial(){
	var x=document.getElementById('numOne').value;
	document.getElementById('factorial').innerHTML="The factorial of " + x + " is:"
	var y=x
	msg += x
	for (i=1;i<=x;x--){
		if (x!==i){		
		msg += " x" + " " + (x-1);
		y=y*(x-1);
		}
	}
	
	document.getElementById('answer').innerHTML=msg + " = " + y
}

//factorial(10);
//console.log(msg);
//console.log(calculation);
