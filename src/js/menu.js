'use strict'
/*
tab navigation
*/

let menuPage=document.querySelector('#menu-page');
let optionsLinks=document.querySelectorAll('.item-nav');
let optionsback=document.querySelectorAll('#back');
let menus=document.querySelectorAll('.menu');
/* 
of menu-page to (settings||highscore||themes)
 */
optionsLinks.forEach((link,i,self)=> {
	link.addEventListener('click',ev=>{
		let newOpenPage=link.getAttribute('option-menu');
		let newOpenPageId=`${newOpenPage}-page`;
		let sectionShow=document.getElementById(newOpenPageId);
		sectionShow.style.display="block";
		menuPage.style.display="none";
		if(newOpenPage==='highscore'){
			showHighScore();
		}
		
	});
});

/*
back to menu page
*/
optionsback.forEach((link,i,self)=>{
	link.addEventListener('click',ev=>{
	menuPage.style.display="block";	
	menus[i].style.display="none";
	menus[i].style.display="none";
	});
	
});

/*
show the Score in the screen
*/	
function showHighScore(){

	let req=new XMLHttpRequest();
	req.open('GET','src/app/showhighscore.php',true);

	req.onreadystatechange = function() {
	if (this.readyState == 3 && this.status == 200) {
		
		let scores=JSON.parse(this.responseText);
		let dispaly="<tr><th>User name</th><th>score</th><th>moves</th></tr>";

		for(let i=0;i<scores.length-1;i++){
			let aux=scores[i];
			let objScore=JSON.parse(aux);
			dispaly=dispaly+"<tr><td>"+objScore.name+"</td>"+"<td> "+objScore.score+"</td><td>"+objScore.moves+"</td></tr>";



		}
		document.getElementById('display-highscore').innerHTML=dispaly;
	

	  }
	}
	req.send();	
};