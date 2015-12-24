function validateFull(form,e){
    e.preventDefault();
    var fnameflag=validatefName(form);
    var lnameflag=validatelName(form);
    var passflag=validatePassword(form);
    var repassflag=validateRePassword(form);
    var genderflag=validateGender(form);
    var phoneflag=validatePhone(form);
    
    if (fnameflag ||lnameflag|| passflag || repassflag || genderflag || phoneflag) {
        //alert("Error Occured While submission.Check form once again!!!");
    }
    else{
        alert("Validation Successful");
    }
}


function validatefName(form){
    
    var error="";
    var flag=0;
    
    var name=form.fname.value;
    var cname=document.getElementById('errorFirstName');
    if(name==""){
        error = 'Name can\'t be empty';
    }
    else if(name.length<3 || name.length>20){
        error = 'Name has limited or excess characters!!!';
    }
      
    //show error
    if (!error =="")  {
        cname.classList.add('error-code');                    //add the class for style
        cname.innerHTML=error;                               //insert text
        return true;                                        //return true meaning error occured
    }
    else{
        cname.className='error-code-rm';                     //add removing style class
    }
    return false;    
}

function validatelName(form){
    
    var error="";
    var flag=0;
    
    var name=form.lname.value;
    var cname=document.getElementById('errorLastName');
    if(name==""){
        error = 'LastName can\'t be empty';
    }
    else if(name.length<3 || name.length>20){
        error = 'Field has limited or excess characters!!!';
    }
      
    //show error
    if (!error =="")  {
        cname.classList.add('error-code');                    //add the class for style
        cname.innerHTML=error;                               //insert text
        return true;                                        //return true meaning error occured
    }
    else{
        cname.className='error-code-rm';                     //add removing style class
    }
    return false;    
}


function  validatePassword(form){
    
    var error="";
    var flag=0;
    
    var pass=form.pass.value;
    var errorpass=document.getElementById('errorPass');
    if(pass==""){
        error = 'password can\'t be empty';
    }
    else if(pass.length<8 || pass.length>25){
        error = 'password must contain atleast 8 characters!!!';
    }
      
    //show error
    if (!error =="")  {
        errorpass.classList.add('error-code');                    //add the class for style
        errorpass.innerHTML=error;                               //insert text
        return true;                                        //return true meaning error occured
    }
    else{
        errorpass.className='error-code-rm';                     //add removing style class
    }
    return false;    
}



function  validateRePassword(form){
    
    var error="";
    var flag=0;
    
    var repass=form.repass.value;
    var errorrepass=document.getElementById('errorRepass');
    //alert('password :' + form.pass.value);
    if(repass==""){
        error = 'password can\'t be empty';
    }
    else if(form.pass.value != repass){
        error = 'password do not match!!!';
    }
      
    //show error
    if (!error =="")  {
        errorrepass.classList.add('error-code');                    //add the class for style
        errorrepass.innerHTML=error;                               //insert text
        return true;                                        //return true meaning error occured
    }
    else{
        errorrepass.className='error-code-rm';                     //add removing style class
    }
    return false;    
}


function  validateGender(form){
    
    var error="";
    var flag=0;
    
    var errorgender=document.getElementById('errorGender');
    //alert('password :' + form.pass.value);
    if((form.optradio[0].checked==false) && (form.optradio[1].checked==false)){
        error = 'choose gender!!!';
    }
      
    //show error
    if (!error =="")  {
        errorgender.classList.add('error-code');                    //add the class for style
        errorgender.innerHTML=error;                               //insert text
        return true;                                        //return true meaning error occured
    }
    else{
        errorgender.className='error-code-rm';                     //add removing style class
    }
    return false;    
}



function  validatePhone(form){
    
    var error="";
    var phone=form.phone.value;
    var errorphone=document.getElementById('errorPhone');
    //alert('password :' + form.pass.value);
    if (phone=="") {
        error = 'Enter phone number';
    }
    else if(isNaN(phone)) {
        error = 'phone no contains invalid characters!!!';
    }
    else if (phone.length!=10) {
        error = 'Enter valid phone number';
    }
      
    //show error
    if (!error =="")  {
        errorphone.classList.add('error-code');                    //add the class for style
        errorphone.innerHTML=error;                               //insert text
        return true;                                        //return true meaning error occured
    }
    else{
        errorphone.className='error-code-rm';                     //add removing style class
    }
    return false;    
}