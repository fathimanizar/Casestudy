function list()
{  var display=document.getElementById("display_list");
   var xhttp= new XMLHttpRequest();
   xhttp.onreadystatechange= function()
   {
       if(this.readyState==4 && this.status==200)
       {
          var response=JSON.parse(this.responseText);
         
        var output="";
        var c=0;
        for(var i=0;i<response.length;i++)
        {
          var checkbox;
          if(response[i].completed==true)
          {
            checkbox=`<input id='box' type='checkbox' checked disabled>`
          }
           else{
            checkbox=`<input id='box' onchange="find(this);" type='checkbox' >`
           }
           output+="<table><tbody><tr><td>"+"<div class='row'>"+"<div class='col-lg-3'>"+response[i].id+"</div>"+"<div class='col-lg-7'>"+response[i].title+"</div>"+"<div class='col-lg-2'>"+checkbox+"</div>"+"</div>"+"</td></tr></tbody></table>";
        }
        display.innerHTML = "<br><table><thead><tr><th id='idnum'><b>Id</b></th><th id='title'><b>Title</b></th><th id='status'><b>Status</b></th></tr></thead></table><br>"+output;
      }
      
    }
   xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
   xhttp.send();
}
var c=0;
function find(element) {
  var p = new Promise (function(resolve){
    if(element.checked) {
      c++;
    } else {
      c--;
    }

    console.log(c)
    if (c == 5) {
      c=0;
      resolve("Congrats. 5 Tasks have been Successfully Completed")
    }
  });

  p
  .then(function(s){
    alert(s);
  });

}
         