var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var name = document.querySelector('.desc');
var name = document.querySelector('.temp');

button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=a5585c2231b951e5765a92525acac5e2')
   .then(Response => Response.json())
   .then(data => {
       var nameValue = data['name'];
       var tempValue = data['main']['temp'];
       var descValue = data['weather']['0']['description'];

       name.innerHTML =nameValue;
   })
 



.catch(err => alert("wrong city name"))

})