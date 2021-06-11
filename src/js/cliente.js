function saveGame(){
	let user=document.getElementById("Username").value;
	let score=document.getElementById("encontrados").innerHTML;
	let moves=document.getElementById("intentos").innerHTML;

	alert(user+score+moves)
	var req=new XMLHttpRequest();

  req.open('POST','src/app/service.php',true);
  req.setRequestHeader('Content-type','application/x-www-form-urlencoded');
  req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
	
	    document.getElementById("result").innerHTML = this.responseText;

	  }
	}
    req.send('user='+user+'&score='+score+'&moves='+moves);

};
