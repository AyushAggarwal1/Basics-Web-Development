function serviceReq()
{
    var locat = document.getElementById("location").value;
    console.log(locat);

    const url = "https://api.openweathermap.org/data/2.5/weather?q="+locat+"&appid=54ea5276d8943e943c85e5932fdd782a";
    var promice = fetch(url);

    promice.then(response=>{
        response.json().then(weatherData=>{
            document.getElementById("w").innerText = "Weather Data: " + weatherData.name; 
            document.getElementById("h").innerText = "Temperature:" + " " + eval(weatherData.main.temp-274) + " °C"; 
            document.getElementById("d").innerText = "Humidity:" + " " + weatherData.main.humidity;    
            document.getElementById("t").innerText = "Feels Like:" + " " + weatherData.main.feels_like;  
            document.getElementById("p").innerText = "Pressure:" + " " + weatherData.main.pressure;  
            document.getElementById("g").innerText = "Visibility:" + " " + weatherData.visibility;  
            document.getElementById("ds").innerText = "Clouds:" + " " + weatherData.clouds.all;  
            console.log(weatherData);
        }).catch(err=>{
            console.log("Data recieved but not in JSON format");
        });
    }).catch(err=>{
        console.log("Data not recieved... Server Error...");
    });
    console.log("Program Complete");
    
    data = {"coord":{"lon":77.2167,"lat":28.6667},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"base":"stations","main":{"temp":303.2,"feels_like":310.2,"temp_min":303.2,"temp_max":303.2,"pressure":1009,"humidity":84},"visibility":1800,"wind":{"speed":2.06,"deg":140},"clouds":{"all":75},"dt":1632718993,"sys":{"type":1,"id":9165,"country":"IN","sunrise":1632703314,"sunset":1632746542},"timezone":19800,"id":1273294,"name":"Delhi","cod":200};
    
}
