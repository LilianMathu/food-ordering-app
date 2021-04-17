# Food ordering app

This is a food ordering application built on Node, express, and Africas Talkins SMS API. 


## Live link
https://food-ordering-oakly.herokuapp.com/


## To run the app:

1. Clone or download the repository
2. Open the project in the CLI
3. Run `npm install`
4. Open the project in your code editor. For Visual Studio, run the command `code .` in the CLI
5. add a .env file using the structure specified in the .env-example file. Input your environment variables
6. On the CLI, run the command  `npm run dev` to start the app
7. Ensure you created a cluster on MongoDB, and have stable internet connectivity

## Alternative to clone/download
1. Open postman
2. Start a new request and input the live link
3. Query the routes (/menu and /order)

 ## Endpoints
 ### ` Menu`
 POST `/menu`

 ### Sample payload
``` 
{
    "name": "chapati",
    "price": "20.00"
}
```

 GET `/menu`

  ### Sample response payload
``` 
{
    "status": 201,
    "message": "OK",
    "data":{
        "id": 1,
        "name": "chapati",
        "price": "20.00",
    }
}
```
 
 ### `Order`
 POST `/order`

 ### Sample payload

```
{
    "menuItemId": "1",
    "userPhoneNumber": "+254712345678"
}
```
