
function lovecalculator(){
        var name=document.getElementById("name").value;
        var lovename=document.getElementById("lovename").value;
        if(name==''){
            alert("please enter your name");
        }
        else if(name.length <=2){
            alert("minimum length is 3");
        }
        else if(! isNaN(name)){
            alert('numbers are not allowed');
        }
        else 
        if(lovename==''){
            alert("please enter your lovename");
        }
        else if(lovename.length <=2){
            alert("minimum length is 3");
        }
        else if(! isNaN(lovename)){
            alert('numbers are not allowed');
        }
        else   {
    var lovedata=Math.floor(Math.random() * (100 - 75 + 1) + 75);
                 
    document.getElementById("lovevalue").value="your love is " +lovedata +'%';

        }
        
    }
    