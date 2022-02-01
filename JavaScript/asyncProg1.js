function serviceReq()
{
    const url = "https://api.openweathermap.org/data/2.5/weather?q=gurugram&appid=54ea5276d8943e943c85e5932fdd782a";
    var promice = fetch(url);
    promice.then(response=>{
        response.json().then(weatherData=>{
            console.log(weatherData);
        }).catch(err=>{
            console.log("Data recieved but not in JSON format");
        });
    }).catch(err=>{
        console.log("Data not recieved... Server Error...");
    });
    console.log("end of program");
}