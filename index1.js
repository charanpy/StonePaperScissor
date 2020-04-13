function update(){
	var a=document.forms['my']['val'].value;
	console.log(a);
	var globalVariable={x:a};


if(a=="")
{
	$("small").css("opacity","1");

}
else{
	$("small").css("opacity","0");
	$(".btn a").attr("href","index1.html");
	

}}