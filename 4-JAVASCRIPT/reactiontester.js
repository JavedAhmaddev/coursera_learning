var start=new Date().getTime();
               function getrandomcolor(){
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                return randomColor;
               }
               function shapeappear()
               {
                   var top=Math.random() * 350;
                   var left=Math.random() * 900;
                   var width=(Math.random() * 300)+50;
                   if(Math.random() < "0.5")
                   {
                       document.getElementById("shape").style.borderRadius = "50%";
                   }
                   else{
                    document.getElementById("shape").style.borderRadius = "0px";
                   }
                   document.getElementById("shape").style.top = top+ "px";
                   document.getElementById("shape").style.backgroundColor = getrandomcolor();
                   document.getElementById("shape").style.left = left+ "px";
                   document.getElementById("shape").style.width = width+ "px";
                   document.getElementById("shape").style.height = width+ "px";
                   document.getElementById("shape").style.display = "block";
                   start=new Date().getTime();
                   document.getElementById("timeshows").innerHTML = "";
                    
               }
               function delay()
               {
                setTimeout(shapeappear,Math.random() * 2000);
               }
              delay();
                document.getElementById("shape").onclick = function(){
                document.getElementById("shape").style.display = "none";
                var end =new Date().getTime();
                var timetaken = (end-start)/1000;
                document.getElementById("timeshows").innerHTML= timetaken +" s";
                document.getElementById("timeshows").style.color="red";
                delay();
               
            }