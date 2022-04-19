//Output the results
function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML =("welcome"+ x);
  }
  
//Enter a number and run, enter text to report an error
  function calc(func){
    var result = document.getElementById("result");
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    if(isNaN(num1) || isNaN(num2)){
        alert("Please enter a number");
        return false;
    }
    result.value = func(num1,num2);
}
function add(num1,num2){
    return num1+num2;
}