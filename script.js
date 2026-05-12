//your JS code here. If required.
let sel=document.getElementById("colorSelect");
 function removeColor(){
	 sel.remove(sel.selectedIndex);
 }
let x=document.getElementsByTagName("input");
x.addEventListener("click",removeColor);