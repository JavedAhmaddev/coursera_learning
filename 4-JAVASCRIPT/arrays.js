var myarray = new Array();
 myarray[0]="pizza";
 myarray[1]="chiken burger";
           // alert(myarray[0]);
            //console.log(myarray);
            //console.log(myarray.length);

var tweets = ["good morning", "i love coffe"];
tweets.push("back to work");
tweets.push("back to school");
tweets.splice(1,2); // deletes at index 1 upto 2 subjects
tweets.splice(1,0,"good bye") // append an elemnt at index 1
tweets.splice(1,1,"good afternoon" ," blahh blahh blahh"); // delete varaible at index1 and start writing from there
console.log(tweets);