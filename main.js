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
            checkbox=`<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked disabled>`
          }
           else{
            checkbox=`<input onchange="find(this);" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">`
           }

           output += `   <tr>
                            <th scope="row"> ${response[i].id}</th>
                            <td>${response[i].title}</td>
                            <td>${checkbox}</td>
                        </tr>`
        }

        console.log(output);

        display.innerHTML = `<br><table class = "table table-hover table-striped"><thead><tr><th scope='col' id='idnum'><b>Id</b></th><th scope='col' id='title'><b>Title</b></th><th scope='col' id='status'><b>Status</b></th></tr></thead> <tbody> ${output} </tbody></table>` ;
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
         

