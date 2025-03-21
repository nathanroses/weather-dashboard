// Variables
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');

// Update the current date on page load
$(document).ready(function() {
    // Display current day
    $("#currentDay").html(currentDay);
    
    // Update time every second
    setInterval(function() {
        var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#currentDay").html(currentTime);
    }, 1000);
});


