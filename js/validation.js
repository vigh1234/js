function validateform()
{
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var select=document.getElementById("select").value
    var gender=document.getElementsByName("gender");
    // var checkbox=document.getElementsById("jk");
    var myModal= new bootstrap.Modal(document.getElementById('myModal'));
    
    if(name=="")
    {
        myModal.show();
        document.getElementById('pp').innerHTML="please enter username";
        return false;
    }
    else if(email=="")
    {
        myModal.show();
        document.getElementById('pp').innerHTML="please enter Email Id";
        return false;
    }
    else if(password=="")
    {    
        myModal.show();
        document.getElementById('pp').innerHTML="please enter password";
        return false;
    }
    else if(select=="choose Account type")
    {    
        myModal.show();
        document.getElementById('pp').innerHTML="please choose an account type";
        return false;
    }
    // else if(!checkbox.checked){
    //     myModal.show();
    //     document.getElementById('pp').innerHTML="please agree to our terms and conditions";
    //     return false;
    // }
    else if(gender[0].checked == false && gender[1].checked==false){
        myModal.show();
        document.getElementById('pp').innerHTML="please choose your gender";
        return false;
    }

    else{
         return true;
        
    }
}