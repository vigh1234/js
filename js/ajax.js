function loaddoc()
{
    const  xhttp = new XMLHttpRequest();
    xhttp.onload=function(){
        document.getElementById('demo').innerHTML=this.responseText;   
    }
    xhttp.open("GET","hm.html",true);
    xhttp.send();
}
function load() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        // if else using ternory operator
       (this.readyState == 4 && this.status == 200) ?
        document.getElementById("demo1").innerHTML =
        this.responseText: '';
    };
    xhttp.open("GET", "resume.html",true);
    xhttp.send();
  }
  