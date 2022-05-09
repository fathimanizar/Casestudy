function validate(redirect)
{
var uname=document.getElementById("uname").value;
var pwd=document.getElementById("pwd").value;
var error=document.getElementById("error");

    if(uname=="admin" && pwd=="12345")
        redirect();
    else
    {
        error.textContent = "Invalid Username or Password";
        error.style.color = "red";
        event.preventDefault();
        return false;
    } 
             
}

function redirect()
 {
    document.write("");
    window.location.assign("main.html");
 }




