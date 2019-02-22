window.onload=function(){
    
    document.getElementById("calcButton").addEventListener("click", calculate);

}

function calculate(){
    var principal = parseFloat(document.getElementById("principal").value,10);
    var years = parseFloat(document.getElementById("years").value,10);
    var rate = parseFloat(document.getElementById("rate").value,10);

    if(isNaN(principal) || isNaN(years) || isNaN(rate)){
        
        var oldNode = document.getElementById("result").childNodes[0];
        document.getElementById("result").replaceChild(document.createTextNode("Enter correct values"), oldNode);

    }
    else{

        var result = (principal * years * rate) / (100);
        result = result.toFixed(2);
        
        var oldNode = document.getElementById("result").childNodes[0];
        document.getElementById("result").replaceChild(document.createTextNode("$ " + result.toString()), oldNode);

    }

    document.getElementById("result").disabled=false;

}

function isEmpty(obj){
    if(obj.toString() == "") return true;
    return false;
}