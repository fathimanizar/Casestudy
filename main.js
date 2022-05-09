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
           output+="<table><tr><td>"+response[i].id+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+response[i].title+checkbox+"</td></tr></table";
        }
        display.innerHTML = "<table><tr><th id='idnum'>Id</th><th id='title'>Title</th><th id='status'>Status</th></tr></table><br>"+output;
      }
      
    }
   xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
   xhttp.send();
}
var c=0;
// function find()
// {
//    var promise= new Promise(function(resolve,reject)
//   {
//     c++;
//     if(c==5)
//     {
//       resolve("Congrats. 5 Tasks have been Successfully Completed ");
//     }
//   });
//   promise
//   .then(function(s){
//      alert(s);
//   })
// }
  

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
         