const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://community-open-weather-map.p.rapidapi.com/forecast?q=san%20francisco%2Cus",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "514f02a841msh37e7521bd365479p1126c9jsn8680dd5dee64"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});