# Example platform for films
Architecture of the project
* Programming Language used: NodeJS 12.14.1
* Database used: MongoDB
* Database Library used : mongoose
## Features includes
* REST Apis for managing films
* User registration,  Basic Authentication, films listing, details, comments
* Seeder file for adding test user, films, comments

## Project Structure
 * Models ( mongoose model )
 * services which will be dealing with models to add, delete, update , view data and other database operations
 * routes: routes will have api endpoints which will be calling services to perform operations & web  urls
 * config folder contains all keys, parameters loading etc
 * public folder will have assests  like images, js, css etc
 * helper folder will have function used in project
 
## Run project command
 * npm start

## Seed databse command
 * npm run seed
