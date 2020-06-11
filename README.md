# items-list

# Developer Mode
    To run the project as a developer you will need to have installed Mongo, Node Js and npm:
        - In one terminal change directory to db, and there once Mongo installed, execute cmd: mongod
        - In a second terminal change directory to server:
            - excute cmd: npm install
            - and then cmd: DB_ENV = local npm run start-dev (This run the process with nodemon)
 
# Production Mode
    To run the project in a production mode you just have to: 
        - Execute cmd: docker-compose up
