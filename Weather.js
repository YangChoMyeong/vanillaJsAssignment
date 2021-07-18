const City=document.body.querySelector("#weather span:first-child");
const Temp = document.querySelector("#weather span:nth-child(2)");
const	Weather=document.body.querySelector("#weather span:last-child"); 
const API_key="d85c8aa957c477ee3554b9b7f8d54c2a";



function onGeoOk(position){ //positon은 geolocation 하고나서 얻을 수 있는 object
  const lat=position.coords.latitude; // position object 내  property
  const lon=position.coords.longitude; //
  const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
  fetch(url) //fetch: url을 불러오기
	.then((response)=>response.json()) //불러오고나서 반응하는것의 json을 return 받는다.
	.then((data)=>{ //그리고나서 return 받고나서 json의 data를 얻었다면
	  City.innerText = data.name + ",";
    Weather.innerText = data.weather[0].main + ","; /// 여기서 자꾸,,,,, 
    Temp.innerText = data.main.temp + "°C";
  }); //왜 계속 Uncaught (in promise) TypeError: Cannot set property 'innerText' of null at Weather.js:15// 가 나오는가...???
  
}

function onGeoError(){
  alert("Try again properply.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
