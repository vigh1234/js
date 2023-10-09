$(document).ready(function(){
    $("#form").submit(function(){
        var user=$('#username').val();
        var email=$("#useremail").val();
        var password=$("#userpassword").val();
        var select=$("#userselect").val();
        var gender1=$("#male").is(":checked");
        var gender2=$("#female").is(":checked");
        if(user ==""){
            $('#Error1').html('Please Enter User Name');
           
            return false;
        }
        else if(email==""){
            $('#Error2').html('Please Enter Email Id');
           
            return false;
        }
        else if(password=="")
        {
            $('#Error3').html('Please Enter Password');
        return false;
        }
        else if(select=="choose Account type")
        {
            $("#Error4").html('Choose an Account Type');
            return false;
        }
        else if(!gender1 && !gender2){
            $("#Error5").html('Please Choose Your Gender');
            return false;
        }
        else{
            return true;
        }
           
    });   
});
