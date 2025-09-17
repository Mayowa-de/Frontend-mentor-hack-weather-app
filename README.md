# Front-mentor-hackathon challenge project

# Weather-App-Hack

This repository contain Weather app which is responsive weather app that can be view any screen sizes, with search functuality, unit conversion, and detailed forecasts using the Open-Meteo API. The weather app is implemented in Javascript using [@Vite+Reactjs].(https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-js).

## Hero
This folder contianing the template [#Header,#title#todayCloud], since the project is not involving rendering servere other pages, one folder was created for each of the components and on one page.

### Header 
This is a Javascript component file containing Logo and unit conversion button, the header section at the top of the webpage.

### Title
This is a Javascript component file containing the title and search functionality, the search functionality collect the input of the user and  filter suggestion results.

### TodayCloud
This is a Javascript component file containing the today cloud section, it deliver the current country, date  and weather.

###  SubCloud
This is a Javascript component file containing the (Humidity,  wind, temperature, precipitation), of the today TodayCloud.

### DailyForeCast  
This is  a Javascript component  file containing the daily weather forecast for each days of the week.

### HourCast 
This is a Javascript component file containing the Hourly weather forcast of each days of the week.

### api
This is a Javascript component file where the API[#Open-meteo-api] is being fetched.


