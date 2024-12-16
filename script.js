//your JS code here. If required.
async function onSubmit(){
let text = document.getElementById("text").value;
let delay = parseInt(document.getElementById("delay").value, 10) 
let output =  document.getElementById("output");
	
	if(!text || delay < 0 || isNaN(delay)){
		alert("Enter the valid text and delay");
		return;
	}
	
await new Promise(resolve => setTimeout(resolve, delay)) ;	
output.innerHTML = text; 
}
