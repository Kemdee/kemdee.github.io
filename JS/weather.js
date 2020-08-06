function load(){
    var city = document.getElementById("city").value;
    theURL = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=c652d4d4db2b3b0a6797fffe99b97c8a';
    $.ajax({
        url: theURL,
        success: function (data) {
            image = new Image();
            image1 = new Image();
            image2 = new Image();
            image3 = new Image();
            image4 = new Image();

            image.src =  "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png"; // icon is specified within the data
            image1.src =  "http://openweathermap.org/img/wn/" + data.list[8].weather[0].icon + "@2x.png"; // icon is specified within the data
            image2.src =  "http://openweathermap.org/img/wn/" + data.list[16].weather[0].icon + "@2x.png"; // icon is specified within the data
            image3.src =  "http://openweathermap.org/img/wn/" + data.list[24].weather[0].icon + "@2x.png"; // icon is specified within the data
            image4.src =  "http://openweathermap.org/img/wn/" + data.list[32].weather[0].icon + "@2x.png"; // icon is specified within the data
                

                $('#weatherName').html('<p><strong>City: </strong>' + data.city.name + '</p>');
                $('#weatherCountry').html('<p><strong>Country code: </strong>' + data.city.country + '</p>');
                $('#weatherTemp').html('<p><strong>Degree: </strong>' + data.list[0].main.temp.toFixed(0) + '</p>');
                $('#weatherInfo').html('<p><strong>Description: </strong>' + data.list[0].weather[0].description + '</p>'); // current weather in text format
                $('#weatherTime').html('<p><strong>Date/Time: </strong>' + data.list[0].dt_txt + '</p>');
                $('#weatherImage').empty().append(image);
                $('#weatherName1').html('<p><strong>City: </strong>' + data.city.name + '</p>');
                $('#weatherCountry1').html('<p><strong>Country code: </strong>' + data.city.country + '</p>');
                $('#weatherTemp1').html('<p><strong>Degree: </strong>' + data.list[8].main.temp.toFixed(0) + '</p>');
                $('#weatherInfo1').html('<p><strong>Description: </strong>' + data.list[8].weather[0].description + '</p>'); // current weather in text format
                $('#weatherTime1').html('<p><strong>Date/Time: </strong>' + data.list[8].dt_txt + '</p>');
                $('#weatherImage1').empty().append(image1);
                $('#weatherName2').html('<p><strong>City: </strong>' + data.city.name + '</p>');
                $('#weatherCountry2').html('<p><strong>Country code: </strong>' + data.city.country + '</p>');
                $('#weatherTemp2').html('<p><strong>Degree: </strong>' + data.list[16].main.temp.toFixed(0) + '</p>');
                $('#weatherInfo2').html('<p><strong>Description: </strong>' + data.list[16].weather[0].description + '</p>'); // current weather in text format
                $('#weatherTime2').html('<p><strong>Date/Time: </strong>' + data.list[16].dt_txt + '</p>');
                $('#weatherImage2').empty().append(image2);
                $('#weatherName3').html('<p><strong>City: </strong>' + data.city.name + '</p>');
                $('#weatherCountry3').html('<p><strong>Country code: </strong>' + data.city.country + '</p>');
                $('#weatherTemp3').html('<p><strong>Degree: </strong>' + data.list[24].main.temp.toFixed(0) + '</p>');
                $('#weatherInfo3').html('<p><strong>Description: </strong>' + data.list[24].weather[0].description + '</p>'); // current weather in text format
                $('#weatherTime3').html('<p><strong>Date/Time: </strong>' + data.list[24].dt_txt + '</p>');
                $('#weatherImage3').empty().append(image3);
                $('#weatherName4').html('<p><strong>City: </strong>' + data.city.name + '</p>');
                $('#weatherCountry4').html('<p><strong>Country code: </strong>' + data.city.country + '</p>');
                $('#weatherTemp4').html('<p><strong>Degree: </strong>' + data.list[32].main.temp.toFixed(0) + '</p>');
                $('#weatherInfo4').html('<p><strong>Description: </strong>' + data.list[32].weather[0].description + '</p>'); // current weather in text format
                $('#weatherTime4').html('<p><strong>Date/Time: </strong>' + data.list[32].dt_txt + '</p>');
                $('#weatherImage4').empty().append(image4);


        }
    });
}

    
