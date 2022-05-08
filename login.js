function validate(redirect)
{
var uname=document.getElementById("uname").value;
var pwd=document.getElementById("pwd").value;

    if(uname=="admin" && pwd=="12345")
        redirect();
    else 
        alert("Invalid username/password");       
}

function redirect()
 {
    document.write("working");
    window.location.assign("main.html");
 }




