
function change()
{
   var a=document.getElementById('s1') 
   var b=document.getElementById('bt')
   if(b.innerHTML=='hide'){
    a.style.display='none'
    b.innerHTML='show'
   }
   else{
    a.style.display='block'
    b.innerHTML='hide'
   }
}
