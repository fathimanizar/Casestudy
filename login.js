function validate(redirect)
{
var uname=document.getElementById("uname").value;
var pwd=document.getElementById("pwd").value;
var error=document.getElementById("error");

    if(uname=="admin" && pwd=="12345")
        redirect();
    else
    {
        error.textContent = "Please enter a valid email";
        error.style.color = "red";
        event.preventDefault();
        return false;
    } 
        // alert("Invalid username/password");       
}

function redirect()
 {
    document.write("");
    window.location.assign("main.html");
 }




