
var global_error_flag;
function validateFull(form){
    var fnameflag,lnameflag,passflag,emailflag;
    
    global_error_flag=true;
    fnameflag=validatefName();
    lnameflag=validatelName();
    emailflag=validateEmail();
    passflag=validatePassword();
    
    
    if (fnameflag || lnameflag || passflag || emailflag) {
        return true;
    }
    else
        return false;
    
    
}


function validatefName(){
    
    var error="";
    var flag=0;
    
    var name=$("#signup-form #firstname").val();
    var cname=$("#error_text");
    if(name==""){
        error = 'Please enter your first name';
    }
    else if(name.length<3 || name.length>20){
        error = 'Name has limited or excess characters!!!';
    }
      
    //show error
    if (!error =="")  {
        if (global_error_flag==true) {
            cname.text(error);
            global_error_flag=false;
        }
                                   
        $('#firstname').addClass('highlight_error');
        return true;                                        //return true meaning error occured
    }
    else{
        $('#firstname').removeClass('highlight_error');
    return false;
    }
}

function validatelName(){
    
    var error="";
    var flag=0;
    
    var name=$("#signup-form #lastname").val();
    var cname=$('#error_text');
    if(name==""){
        error = 'Please enter your last name';
    }
    else if(name.length<3 || name.length>20){
        error = 'Field has limited or excess characters!!!';
    }
      
    //show error
    if (!error =="")  {
        if (global_error_flag==true) {
            cname.text(error);
            global_error_flag=false;
        }
        $("#lastname").addClass('highlight_error');
        return true;                                        //return true meaning error occured
    }
    else{
        $("#lastname").removeClass('highlight_error');
        return false;
    }
}


function  validatePassword(){
    
    var error="";
    var flag=0;
    
    var pass=$("#signup-form #password").val();
    var errorpass=$('#error_text');
    if(pass==""){
        error = 'please enter password';
    }
    else if(pass.length<8 || pass.length>25){
        error = 'password must contain atleast 8 characters!!!';
    }
      
    //show error
    if (!error =="")  {       
                                     
        if (global_error_flag==true) {
            errorpass.text(error); 
            global_error_flag=false;
        }
        $("#password").addClass('highlight_error');
        return true;                                        //return true meaning error occured
    }
    else{
        $("#password").removeClass('highlight_error');
    return false;
    }
}


function  validateEmail(){
    
    var error="";
    var flag=0;
    
    var email=$("#signup-form #email").val();
    var errormail=$('#error_text');
    if(email==""){
        error = 'please enter email';
    }
    else if(!email.match('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$')){
        error = 'please enter valid email address';
    }
      
    //show error
    if (!error =="")  {       
        if (global_error_flag==true) {
            errormail.text(error);   
            global_error_flag=false;
        }
        $("#email").addClass('highlight_error');
        return true;                                        //return true meaning error occured
    }
    else{
        $("#email").removeClass('highlight_error');
        return false;
    }
}

