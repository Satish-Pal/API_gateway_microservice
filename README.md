# Vehicle Reservation Application - Web-based Platform

This project successfully implements a vehicle reservation system with a robust backend architecture. To reserve a vehicle, users can input their first name and last name. After entering the information and clicking the "Next" button, the application will display a selection of vehicles with options for 2-wheelers and 4-wheelers retrieved from the backend. Upon choosing a vehicle type and clicking "Next," users will be presented with bike types, such as cruiser and sports, sourced from the backend. Subsequently, selecting a specific bike type and clicking "Next" will lead to a date selection interface offering options for start and end dates. After choosing the dates and clicking the "Submit" button, all the selected data will be inserted into the database.

The technology stacks employed in this project are:

- Node.JS with Nest.JS
- TypeORM for MySQL

## prerequisite
- amqp instance
- docker
- kafdrop repository

## Running the Application

- Clone this repository.
- Run "npm install" in root directory.
- Open XAMPP, and start both the Apache and MySQL servers to access the database.
- Once the server is running, go to the browser and enter the URL "localhost/phpmyadmin."
- In the MySQL dashboard of phpMyAdmin, create a database named "get_a_vehicle."
- Finally, navigate to the root directory of the project and type the following command in the terminal: npm run start:dev.
- The server will be accessible at http://localhost:3000.


## setup of other microservices:

## rabbitMQ setup:

- clone this repo (https://github.com/Satish-Pal/microservice_rabbitMQ.git);
- follow the instruction from README.md file.
- copy the option property from main.ts file 
- go to src/bookings/booking.module.ts and replace the option with your rabbitMQ options in the clientsModule under the name "NOTIFICATION_SERVICE" (MICROSRVICE_API_GATEWAY repo)

## How to test 
-  run rabbitMQ setup
- open postman 
- on post request go to localhost:3000
- paste the data in this format in req.body:
   {     
    "firstName": "rabbit",
    "lastName": "MQ",     
    "numberOfWheels": "2",
    "vehicleType": "Cruiser",
    "vehicleModel": "Jawa 42",
    "startDate": "2024-01-03",
    "endDate": "2024-01-04"
    }
- after sending, open the terminal in rabbitMQ repo you will see the data/message.

## rabbitMQ setup:

- clone this repo (https://github.com/Satish-Pal/microservice_rabbitMQ.git);
- follow the instruction from README.md file.
- copy the option property from main.ts file 
- go to src/bookings/booking.module.ts and replace the option with your rabbitMQ options in the clientsModule under the name "NOTIFICATION_SERVICE" (MICROSRVICE_API_GATEWAY repo)

## How to test 
-  run rabbitMQ setup
- open postman 
- on post request go to localhost:3000/api/bookings
- paste the data in this format in req.body:
   {     
    "firstName": "rabbit",
    "lastName": "MQ",     
    "numberOfWheels": "2",
    "vehicleType": "Cruiser",
    "vehicleModel": "Jawa 42",
    "startDate": "2024-01-03",
    "endDate": "2024-01-04"
    }
- after sending, open the terminal in rabbitMQ repo you will see the data/message.

## Kafka setup:

- clone this repo (https://github.com/Satish-Pal/microservice_kafka.git);
- follow the instruction from README.md file.

## How to test 
-  run kafka setup
- open postman 
- on post request go to localhost:3000/api/bookings
- paste the data in this format in req.body:
   {     
    "firstName": "rabbit",
    "lastName": "MQ",     
    "numberOfWheels": "2",
    "vehicleType": "Cruiser",
    "vehicleModel": "Jawa 42",
    "startDate": "2024-01-03",
    "endDate": "2024-01-04"
    }
- after sending, open the terminal in kafka repo you will see the data/message.


## NATS setup:

- clone this repo (https://github.com/Satish-Pal/microservice_nats.git);
- follow the instruction from README.md file.

## How to test 
-  run NATS setup
- open postman 
- on post request go to localhost:3000/api/bookings
- paste the data in this format in req.body:
   {     
    "firstName": "rabbit",
    "lastName": "MQ",     
    "numberOfWheels": "2",
    "vehicleType": "Cruiser",
    "vehicleModel": "Jawa 42",
    "startDate": "2024-01-03",
    "endDate": "2024-01-04"
    }
- after sending, open the terminal in kafka repo you will see the data/message.
