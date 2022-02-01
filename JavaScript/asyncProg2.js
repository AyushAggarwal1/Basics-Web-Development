function serviceReq()
{
    // const url = "https://api.giphy.com/v1/gifs/search?q=cat&api_key=vFRSWo6g7vJ7ZAjt3DMDolU52ORTxwH&limit=5";
    
    const url = 'http://127.0.0.1.888'

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