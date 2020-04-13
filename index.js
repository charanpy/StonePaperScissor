
let pscore=0;
let cscore=0;
var count=0;


$(".play-btn a").on("click",function(){

	$(".btn").css("opacity","1");
	$(".btn").css("pointer-events","all");
	$(".main").css("opacity","1");
	$(".play-btn a").css("opacity","0");
	$(".opt").css("opacity","1");
	$(".scores").css("opacity","1");
	$(".play-btn a").css("pointer-events","none");
	$(".restart").css("display","block");
});






	var player=$(".img2");
	var comp=$(".main .img");

$(".btn button").click(function(){
  	   count++;
  	   if(count<4){
		playSc=$(this).html();
		console.log(playSc);
		playImg=playSc+".png";
		console.log(playImg);
		player.attr("src",playImg);

	
			c=["stone","paper","scissors"];
			var computer=Math.floor(Math.random()*3);
	console.log(computer);
	var cs=c[computer];
	var computerScore=c[computer]+".png";
	comp.attr("src",computerScore);
	

	update(playSc,cs);
		}
		else{
			$(".final").css("opacity","1");
			$(".btn").css("pointer-events","none");
			alert("You have only three chances.See the winner at the top.To play again CLICK RESTART at the BOTTOM");
		}
	});




function scoresC(){
	const f=$(".pscore").html(pscore);
	const u=$(".cscore").html(cscore);

	if(pscore===cscore){
    	winner.html("Tie");
    }
    else if(pscore>cscore){winner.html("Player wins");}
    else if(pscore<cscore){winner.html("Computer wins");}
    else{console.log("bye");}
	



}




var winner=$(".opt");
function update(playSc,cs){
	
	if(playSc===cs){
		
		

		return;

	}
	if(playSc==="stone"){
		if(cs==="scissors"){
			
			winner.html("Player wins")	
			pscore=pscore+1;
			scoresC();
		    
	
			return;
		}
		else{
		
					winner.html("computer wins")
					cscore=cscore+1;
			scoresC();		
					
	
			return;

	}}
	if(playSc==="paper"){
		if(cs==="scissors"){
		
				winner.html("computer wins")
				cscore=cscore+1;
                 	scoresC();			
		return;
	}
	else{
		
				winner.html("Player wins")
				pscore=pscore+1;
				
        scoresC();
		return;
	}}

	if(playSc==="scissors"){
		if(cs==="stone"){
		
				winner.html("Computer wins")
				cscore=cscore+1;
				scoresC();
           
		return;
	}
	else{
		winner.html("Player wins")
		pscore=pscore+1;
		
		scoresC();
		return;
	}}
}

$(".restart").click(function(){
	location.reload(true);
});
