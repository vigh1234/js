
function test() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 1) {
        document.getElementById("demo").innerHTML = "The request has been set up";   
      }
      else if(this.readyState==2){
        document.getElementById("demo").innerHTML = "The request has been sent";
      }
      else if(this.readyState==3){
        document.getElementById("demo").innerHTML = "The request is in process";
      }
      else if(this.readyState==4 && this.status==200){
        document.getElementById('demo').innerHTML=this.responseText;   
      }
      else{
        document.getElementById('demo').innerHTML="error";   
      }
    };
    xhttp.open("GET", "rotation.html", true);
    xhttp.send();
  }
  