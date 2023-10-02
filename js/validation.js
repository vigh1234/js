function validateform()
{
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var select=document.getElementById("select").value
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
    else{
         return true;
        
    }
}