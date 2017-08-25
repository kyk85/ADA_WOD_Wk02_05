var msg=''

function factorial(){
	msg=''							//clears msg
	var x=document.getElementById('numOne').value;
	document.getElementById('factorial').innerHTML="The factorial of " + x + " is:"
	var y=x					//declare new variable as proxy of x (so that x is not affected by calculation)
	msg += x
	for (i=1;i<=x;x--){
		if (x!==i){		
		msg += " x" + " " + (x-1);
		y=y*(x-1);					//calculates then redeclares y for next iteration of loop
		}
	}
	
	document.getElementById('answer').innerHTML=msg + " = " + y
	document.getElementById('numOne').value=''						//clears input field
}

//factorial(10);
//console.log(msg);
//console.log(calculation);
