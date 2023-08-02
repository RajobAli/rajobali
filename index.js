var m = document.querySelector(".one");
var button = document.querySelector(".btn");
button.addEventListener("click",function(){
    var marks = m.value;
    if(marks<0 || marks>100){
        var a = "Invalid marks";
      
    }
    else if(marks
        >=80){
        a = "A+";
        
    }
    else if(marks>=70){
        a = "A";
       
    }
    else if(marks>=60){
        a = "B";
    
    }
    else if(marks>=50){
        a = "C";
    
    }
    else{
        a = "Fail";
    
    
    }
    document.write("Your grade is"  +   " :  " +a);
  
    
});


