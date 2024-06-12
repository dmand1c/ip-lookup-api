# IP Lookup API

## Description
IP Lookup has been designed to fetch information about certain IP address of your choice.
Make request to `/lookup/isert-ip-here` with valid IP address and you will get information about requested IP.

## Project setup

- copy `.env.dist` file and rename it to `.env`, replace placeholder parameters with your relevant values
- app runs on docker, redis container is set to certain port so if you want to change that you can do it in `docker-compose.yml` file
- Simply run `docker-compose up --build`

## Swagger
API documentaion is available via Swagger and you can access it on this url: http://localhost:3000/api-docs/

## Example request
After sending `GET` request to

`http://localhost:3000/lookup/115.42.150.37`

we get response like this:

``` json
{
   "ip":"115.42.150.37",
   "success":true,
   "type":"IPv4",
   "continent":"Asia",
   "continent_code":"AS",
   "country":"Singapore",
   "country_code":"SG",
   "region":"Southeast",
   "region_code":"",
   "city":"Singapore",
   "latitude":1.3553794,
   "longitude":103.8677444,
   "is_eu":false,
   "postal":"550304",
   "calling_code":"65",
   "capital":"Singapore",
   "borders":"",
   "flag":{
      "img":"https://cdn.ipwhois.io/flags/sg.svg",
      "emoji":"🇸🇬",
      "emoji_unicode":"U+1F1F8 U+1F1EC"
   },
   "connection":{
      "asn":3758,
      "org":"Singnet Pte LTD",
      "isp":"Singnet Pte LTD",
      "domain":""
   },
   "timezone":{
      "id":"Asia/Singapore",
      "abbr":"+08",
      "is_dst":false,
      "offset":28800,
      "utc":"+08:00",
      "current_time":"2024-06-12T08:33:35+08:00"
   }
}
```




