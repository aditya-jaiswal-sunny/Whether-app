$(document).ready(function() {
     $('#input').keypress(function (e) {
        var key = e.which;
           if(key == 13)  // the enter key code
           {
             $('#submit').click();
             return false;  
           }   
      });

	$("#submit").click(function(){
          

		var city = $("#input").val();
		if(city != '')
		{
          $.ajax({

          	url: 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric'+'&APPID=fe45e9c1a03ce02f031678758b75e8b3',
          	type:"GET",
          	datatype: "jsonp",
          	success: function(data)
          	{
          		var temp = data.main.temp;
          		var humidity = data.main.pressure;
          		var pressure = data.main.humidity;
          		$("#temp").html(temp);
          		$("#humidity").html(humidity);
          		$("#pressure").html(pressure);

          		//console.log(data);
          	}
          });

     }
		else
		{
			window.alert("LOCATION CANNOT BE EMPTY");
			//$("#error").html("Field cannot be empty");
		}
     });
})
