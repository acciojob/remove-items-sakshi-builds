//your JS code here. If required.
let sel=document.getElementById("colorSelect");
 function removeColor(){
	 sel.remove(sel.selectedIndex);
 }
let x=document.getElementsByTagName("input")[0];
x.addEventListener("click",removeColor);