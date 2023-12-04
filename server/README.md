## Usage
This is a REST service, to execute it run node server.js.
- Navigate to the server folder to start the server (cd .\server\)
- Start the server with (node .\server.js) command to start the back-end

## Services
- Note that changes to the data will not be persisted! All operations happen in memory and will be wiped when the service is restarted.

## Authentication
This service uses authentication - reading resources is public, but creating, updating and deleting can only be performed by authorized users.

The service is initialized with two users, which can be used for immediate testing:
- peter@abv.bg : 123456
- toshko@abv.bg : 123456

A tyipical request will have the following shape:

POST /data/collectionName
Content-Type: application/json
X-Authorization: {accessTokenFromAuthService}
[Request body]

## CRUD Operations
- Send requests to /data/:collection with appropriate method and headers. All operations, except for Read, require an authorization header to be present on the request.
Supported requests are GET, POST, PUT, PATCH, DELETE.

- Register
    - Create a new user by sending a POST request to /users/register with properties username, email, phone number, gender, password and repeat password. The service automatically creates a session and returns an authorization token, that can be used for requests.
    - server responce:

        {
            "username": "test",
            "email": "test@abv.bg",
            "phone": "+359888500839",
            "gender": "male",
            "password": "123456",
            "_createdOn": 1701691448508,
            "_id": "82bf7fcd-a8f1-45d9-a285-5b8fdb922856",
            "accessToken": "17b0942928194891df618dcb0193bc03a09de5012aa4cfc119ee5bb013ba553b"
        }
- Login
    - Login by sending a POST request with email and password to /users/login. The service will respond with an object, containing a standard string token, that can be used for requests.
- Logout
    - Send an authorized GET request to /users/logout. The service returns an empty response
    - if you attempt to parse it as JSON, you will receive an error! You can check for this type of response by looking at the status (204 instead of 200) and the content-type header (will not be present).

- Authorized Requests
    - To make an authorized request, add the following header, where {token} is the access token, returned by the service upon successful login or registration: X-Authorization: {token}

- Read
    - An end point is revealed at http://localhost:3030/data, which grants access to information, stored on the service. GET requests to the service will return the following responses:
    - GET /data/boats - array of all entries in target collection; will return 404 if collection does not exist
    [
        {
            "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
            "startPoint": "Chania",
            "endPoint": "Lefkada ",
            "date": "2023-12-09",
            "time": "10:30",
            "imageUrl": "/assets/boat1.jpg",
            "model": "Yamaha 275SD",
            "passengerCapacity": 8,
            "price": 3500,
            "availability": 7,
            "year": 2018,
            "description": "Discover the beauty of the Mediterranean Sea with our high-performance yacht, featuring a spacious deck and luxurious amenities. Enjoy a seamless and opulent sailing experience.",
            "_createdOn": 1699135200000,
            "_id": "3a432947-3e43-42a8-bcbc-100d2b199892"
        }
    ]

    - GET http://localhost:3030/data/boats/:id - entry matching the given ID; will return 404 if collection or entry do not exist with appropriate message attached to response:
    
        {
            "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
            "startPoint": "Corfu",
            "endPoint": "Zakynthos",
            "date": "2023-08-10",
            "time": "12:00",
            "imageUrl": "/assets/boat3.jpg",
            "model": "Jeanneau Leader",
            "passengerCapacity": 10,
            "price": 4500,
            "availability": 4,
            "year": 2022,
            "description": "Explore the beautiful Ionian Sea with our luxury yacht, equipped with state-of-the-art amenities and spacious decks. Enjoy the breathtaking views and make unforgettable memories with your loved ones.",
            "_createdOn": 1747891200000,
            "_id": "f4a5c82a-7b8d-4c49-bb8d-5aef54b460de"
        }

- Create
    - This request requires authorization and content-type headers   
    - Send POST request to /data/boats to create new entry. ID will be generated automatically and will be included in the returned object. If the collection does not exist, it will be created.
    - the service will return the following responses:
    {
        "_ownerId": "82bf7fcd-a8f1-45d9-a285-5b8fdb922856",
        "startPoint": "Corfu",
        "endPoint": "Mykonos",
        "date": "2023-12-09",
        "time": "06:00",
        "imageUrl": "https://barcheamotore.com/wp-content/uploads/2021/03/pardo-60-endurance-8.jpg",
        "model": "Malibu Wakesetter",
        "passengerCapacity": "10",
        "price": "3000",
        "availability": "8",
        "year": "2021",
        "description": "Explore the Seas: Rent Your Dream Yacht Today! Set sail with our premium yacht rentals, creating unforgettable voyages tailored just for you.",
        "_createdOn": 1701691666419,
        "_id": "e637121c-f959-4cbd-b1f1-9c841398ff4d"
    }

- Update
    - This request requires authorization and content-type headers. Only the owner of the resource can edit it.
    - Send PUT request to http://localhost:3030/data/boats/:id to update a single entry. Note that the existing entry will be replaced!

- Partial Update
    - This request requires authorization and content-type headers. Only the owner of the resource can edit it.
    - Send PATCH request to http://localhost:3030/data/boats/:id to partially update a single entry. The existing entry will be merged with the new data. System properties will not be affected.

- Delete
    - This request requires authorization headers. Only the owner of the resource can delete it.
    - Send DELETE request to /data/boats/:id to delete a single entry.

## Additional endpoints to another collections used in the project:

- User bookings http://localhost:3030/data/bookings using GET and POST
    - Server responce:
    {
        "_ownerId": "82bf7fcd-a8f1-45d9-a285-5b8fdb922856",
        "userId": "f4a5c82a-7b8d-4c49-bb8d-5aef54b460de",
        "boatId": "82bf7fcd-a8f1-45d9-a285-5b8fdb922856",
        "_createdOn": 1701692482622,
        "_id": "e110ca4b-b5a3-4499-b598-74d0debc84a7"
    } 

- User likes http://localhost:3030/data/likes using GET and POST
    - Server responce:
    {
        "_ownerId": "82bf7fcd-a8f1-45d9-a285-5b8fdb922856",
        "userId": "82bf7fcd-a8f1-45d9-a285-5b8fdb922856",
        "boatId": "f4a5c82a-7b8d-4c49-bb8d-5aef54b460de",
        "_createdOn": 1701692554023,
        "_id": "66a96d61-6e99-4ae9-b033-f846cac0923c"
    }

- Weather API https://weatherapi-com.p.rapidapi.com/forecast.json?q=sofia&days=3
    - Server responce:
        {
            "location": {
                "name": "Sofia",
                "region": "Grad Sofiya",
                "country": "Bulgaria",
                "lat": 42.68,
                "lon": 23.32,
                "tz_id": "Europe/Sofia",
                "localtime_epoch": 1701692852,
                "localtime": "2023-12-04 14:27"
            },
            "current": {
                "last_updated_epoch": 1701692100,
                "last_updated": "2023-12-04 14:15",
                "temp_c": 2.0,
                "temp_f": 35.6,
                "is_day": 1,
                "condition": {
                    "text": "Partly cloudy",
                    "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                    "code": 1003
                },
                "wind_mph": 2.2,
                "wind_kph": 3.6,
                "wind_degree": 33,
                "wind_dir": "NNE",
                "pressure_mb": 1024.0,
                "pressure_in": 30.24,
                "precip_mm": 0.0,
                "precip_in": 0.0,
                "humidity": 60,
                "cloud": 25,
                "feelslike_c": 1.4,
                "feelslike_f": 34.5,
                "vis_km": 10.0,
                "vis_miles": 6.0,
                "uv": 2.0,
                "gust_mph": 6.7,
                "gust_kph": 10.8
            },
            "forecast": {
                "forecastday": [
                    {
                        "date": "2023-12-04",
                        "date_epoch": 1701648000,
                        "day": {
                            "maxtemp_c": 3.4,
                            "maxtemp_f": 38.0,
                            "mintemp_c": -1.9,
                            "mintemp_f": 28.5,
                            "avgtemp_c": -0.1,
                            "avgtemp_f": 31.8,
                            "maxwind_mph": 5.8,
                            "maxwind_kph": 9.4,
                            "totalprecip_mm": 0.0,
                            "totalprecip_in": 0.0,
                            "totalsnow_cm": 0.0,
                            "avgvis_km": 10.0,
                            "avgvis_miles": 6.0,
                            "avghumidity": 70.0,
                            "daily_will_it_rain": 0,
                            "daily_chance_of_rain": 0,
                            "daily_will_it_snow": 0,
                            "daily_chance_of_snow": 0,
                            "condition": {
                                "text": "Sunny",
                                "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                                "code": 1000
                            },
                            "uv": 2.0
                        },
                        "astro": {
                            "sunrise": "07:40 AM",
                            "sunset": "04:53 PM",
                            "moonrise": "11:37 PM",
                            "moonset": "12:54 PM",
                            "moon_phase": "Waning Gibbous",
                            "moon_illumination": 62,
                            "is_moon_up": 1,
                            "is_sun_up": 0
                        },
                        "hour": [
                            {
                                "time_epoch": 1701640800,
                                "time": "2023-12-04 00:00",
                                "temp_c": -0.7,
                                "temp_f": 30.7,
                                "is_day": 0,
                                "condition": {
                                    "text": "Clear",
                                    "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
                                    "code": 1000
                                },
                                "wind_mph": 5.8,
                                "wind_kph": 9.4,
                                "wind_degree": 305,
                                "wind_dir": "NW",
                                "pressure_mb": 1024.0,
                                "pressure_in": 30.24,
                                "precip_mm": 0.0,
                                "precip_in": 0.0,
                                "humidity": 78,
                                "cloud": 24,
                                "feelslike_c": -4.0,
                                "feelslike_f": 24.8,
                                "windchill_c": -4.0,
                                "windchill_f": 24.8,
                                "heatindex_c": -0.7,
                                "heatindex_f": 30.7,
                                "dewpoint_c": -4.0,
                                "dewpoint_f": 24.8,
                                "will_it_rain": 0,
                                "chance_of_rain": 0,
                                "will_it_snow": 0,
                                "chance_of_snow": 0,
                                "vis_km": 10.0,
                                "vis_miles": 6.0,
                                "gust_mph": 6.8,
                                "gust_kph": 11.0,
                                "uv": 1.0
                            },
                        ]
                    }
                ]
            }
        }
    
