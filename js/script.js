function change()
{
   document.getElementById('id1').src='js/img/chelsea.png'
}
function reset()
{
    document.getElementById('id1').src='js/img/bayern.png'
}



function swap(p1,p2)
{
    var a=p1=document.getElementById('p2').innerHTML
    p1=document.getElementById('p2').innerHTML=  p1=document.getElementById('p1').innerHTML
    p1=document.getElementById('p1').innerHTML=a
}


function img_swap()
{ 
    var a=document.getElementById('img1')
    var b=document.getElementById('img2')
    var temp=a.src
    a.src=b.src
    b.src=temp    
}
function hide()
{
    document.getElementById('id').style.display="none";
}
function show()
{
   document.getElementById('id').style.display="block";
}
