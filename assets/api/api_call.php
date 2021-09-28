<?php
$access_token = 'token'; // access_token received from /oauth2/token call
$ch = curl_init('http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/{x}/{y}?appid={a5585c2231b951e5765a92525acac5e2}'); // URL of the call
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER,
    array("Authorization: Bearer $access_token"));
// execute the api call
$result = curl_exec($ch);
// display the json response
print_r(json_decode($result, true));