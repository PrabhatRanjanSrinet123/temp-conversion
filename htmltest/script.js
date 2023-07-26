document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = claerForm;

function tempConvert(){

  var fahrenheit = document.getElementById("fahrenheit").value;
  var celsius = document.getElementById("celsiu").value; 

  if(fahrenheit !=''){
    celsius = (parsefloat(fahrenheit) -32) /1.8;
  } else{
    fahrenheit = (parseFloat(celsius) *1.8) +32;
  }


  document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
  document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
}function claerForm(){
  document.getElementById('fahrenheit').value = '';
  document.getElementById('celsius').value = '';
}

