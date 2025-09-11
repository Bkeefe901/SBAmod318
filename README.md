# SBA 318: Express Server Application

## Description
For my project I am doing a server that stores 3 different data categories (users, bikes, and components). The users data has info on each user (anyone who has uploaded bike and component info). The bikes data contains info on different bicycle models, and what users own that bike. The components data contains info on various components for bikes and which users use those components. There is a home page view that contains a form where you can enter your bike data and it will add it to the bikes data.


## File Paths and Methods

| Method | Path | Description |
| --- | --- | --- |
| GET | "/users" | Returns array of all users |
| POST | "/users" | Create a new user |
| GET | "/users/:id" | Returns user with the id indicated in the parameter |
| PATCH | "/users/:id" | Update any information of one user (params:id) |
| DELETE | "/users/:id" | Delete one user chosen by id parameter |
| GET | "/bikes" | Returns array of all bikes |
| POST | "/bikes" | Create a new bike (Path/Method used for the form in the view @ localhost:3000/home) |
| GET | "/bikes/:id" | Returns bike with the id indicated in the parameter |
| GET | "/bikes?brand=<brandname>" | Returns all bikes of the brand specified from the brand query |
| GET | "/components" | Returns array of all components |
| GET | "/components/:id" | Return the component matching the id parameter |


