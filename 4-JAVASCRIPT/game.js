function getRandomnumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("button1").onclick = function(){
    var min=0;
    var max=4;
    var randomnumber=getRandomnumber(min,max);
    
    var number= document.getElementById("guessmade").value;
    if(number>4 || number<0)
    {
        alert("enter a valid choice between 0-4")
    }
    else{
        
        if(number == randomnumber)
        {
            alert("correct guess");
        }
        else{
            alert("wrong guess the number is "+ randomnumber);
        }
    }
    
}