document.getElementById("button1").onclick = function(){
                var x= "";
                x=document.getElementById("input1").value;
                //alert(x);
                document.getElementById("text").innerHTML = x;
                document.getElementById("text").style.color = "red";

               
            }