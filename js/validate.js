function validation()
{
    var name=document.getElementById('name');
    var email=document.getElementById('email');
    var password=document.getElementById('password');
    var checkbox=document.getElementById('checkbox');
    var select=document.getElementById("select")
    var myModal= new bootstrap.Modal(document.getElementById('mymodal'));
    
    
    if(name.value=="")
    {
       myModal.show();
       document.getElementById('pp').innerHTML="please enter username";
    }
    else if(email.value=="")
    {
       myModal.show();
       document.getElementById('pp').innerHTML="please enter Email Id";

    }
    else if(password.value=="")
    {    
        myModal.show();
        document.getElementById('pp').innerHTML="please enter password";
    }
    else if(select.value=='choose Account type')
    {
        myModal.show();
        document.getElementById('pp').innerHTML="please choose an account type";
    }
    // else if(checkbox.check == false)
    // {    
    //     myModal.show();
    //     document.getElementById('pp').innerHTML="please accept our terms and conditions";
    // }
    else
    {
        document.getElementById('form').submit();   
    }
}