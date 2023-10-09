function validation()
{
    var name=document.getElementById('name');
    var email=document.getElementById('email');
    var password=document.getElementById('password');
    // var checkbox=document.getElementById("checkbox");
    var select=document.getElementById("select");
    var gender=document.getElementsByName("gender");
    var myModal= new bootstrap.Modal(document.getElementById('mymodal'));

    // checkedcount = 0;
    // list = form.getElementsByTagName('input');
    // for (index = 0; index < list.length; ++index) {
    // item = list[index];
    // if (item.getAttribute('type') === "checkbox"
    //     && item.checked
    //     && item.name === "chk[]") {
    //     ++checkedCount;
    //     }
    //     return checkedcount;
    // }
    

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
    else if(gender[0].checked == false && gender[1].checked==false){
        myModal.show();
        document.getElementById('pp').innerHTML="please choose your gender";
    }
    // else if(checkedcount == 0){
    //     myModal.show();
    //     document.getElementById('pp').innerHTML="please accept our terms and conditions";
    // }
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