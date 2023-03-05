# Cars Web App 
Create a Full-stack Web App for listing cars with Authentication using CRUD operations (no payment integration needed). The app must be completely functionality-oriented, do not focus much on design. The app should be efficient well to handle large data. 

## Tech Stack (technologies with bold text are must-use): 
```
● Technologies: JavaScript 
● Front-end: React.js, Reducer, Context API 
● Back-end: Node, Express, JWT 
● Database: MongoDB 
● API: JSON 
● Storage: Render Website
```

## Screens / Functionality 
```
● Homepage (Here will show all cars from all users except currently logged-in user, with pagination) 
● Signup, Login (User can signup with email and password) 
● Create/Edit Car (Add any properties for the car) 
● Logout Button (Only button) 
● Car Details Page 
● My Cars 
```

## APIs / GraphQL Functions
``` 
● To signup and login 
● To create/edit a Car 
● To fetch a single-car detail 
● To fetch the list of all cars 
● To fetch the list of cars created by logged in user
```

# USE
```
    $ npm install
    $ npm start
```

# Create your .env file 
```
MONGODB=
JWT_SECRET=
```

# APIs
```
    Signup              : POST  : /signup/
    Login               : POST  : /login/
    All Cars            : GET   : /api/v1/cars
    Create Car          : POST  : /api/v1/cars
    One Car             : GET   : /api/v1/car/${user_id}/${car_id}
    Update Car          : PATCH : /api/v1/car/${car_id}
    Get Cars of User    : GET   : /api/v1/cars/${name}
```