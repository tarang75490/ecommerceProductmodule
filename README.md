# Product

This is the product subdomain or the model of My ecommerce project which is based on them microservice architectures.


In this service I have used Mongo for Database and fastify for making routes and integrated all apis with swagger with the help of nodeJs.
All the logic inside the service layer and there is controlller layer.
 And there is validator to validate the incoming parameters and there is schema for swagger.And models for mongodb 
 Berify Overview 
 ServiceLayer:all the logic inside this including quering the database.
 Controllerlayer: 
 to give response and error handling 
 Validation Layer:
to validate the incoming params ,query and body about the required input and other validations.
Schema:
defining the structure of input and all the possible outputs indifferent cases with 200,400,500 status codes 
Routes:
All the seare combined inside the routes.js file And finally app.js file for all the initial setups for mongodb , fastify routes,etc .
T



The APIs included in this module is 
POST APIS : 
