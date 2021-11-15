## proxy node backend to use swiggy api 

# to run

npm i
npm start


#pass swiggy backend  api usrl to this node app after  http://localhost:5000/{ api your you need to use from swiggy}

#eg  



if you need to consume this  api

Request URL: https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9826104&lng=80.2357985&page_type=DESKTOP_WEB_LISTING
Request Method: GET
Status Code: 200 
Remote Address: [2600:9000:2241:2e00:2:daa1:63c0:93a1]:443
Referrer Policy: strict-origin-when-cross-origin

# pass ==>  restaurants/list/v5?lat=13.0826802&lng=80.2707184&page_type=DESKTOP_WEB_LISTING

to localhost:5000/ { the path you need to access}