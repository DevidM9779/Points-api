# Points REST API
A RESTful service built from scratch for a take-home coding assessment


## Todo
- [x] Add transactions for a specific payer and date.
- [x] Spend points using the rules above and return a list of { "payer": <string>, "points": <integer> } for each call.
- [x] Return all payer point balances.

## How to test
- By default this app will be running in local port 3000.
- Download Postman to run HTTP requests and be able to see the responses from the server.
- Insert the API calls in the API Reference section below in Postman.


## API Reference
- [/api/points/add](#Add-Transactions-Route)
- [/api/points/spend](#Spend-Route)
- [/api/points/balance](#Balance-Route)
- [/api/points/delete](#Delete-Route)
  
  
### Add Transactions Route
  
  ```
  POST http://localhost:3000/api/points/add
  ```
  
  | Parameter  | Type | Description |
| :-- | :-- | :-- |
| `payer` | string | Name of the individual relevant for the transaction |
| `points` | number | Amount of points marked as the value of each transaction |
| `timestamp` | string | Date in UTC format |

#### <ins>Add a transaction</ins>
  
Sample Request Body (JSON)

  ```JSON
    { 
        "payer": "DANNON", 
        "points": 300, 
        "timestamp": "2022-10-31T10:00:00Z" 
    }
  ```

  #### <ins>Add all transactions at once</ins>

Sample Request Body (JSON)

  ```JSON
    [
       { 
          "payer": "DANNON", 
          "points": 300, 
          "timestamp": "2022-10-31T10:00:00Z" 
       },
       { 
          "payer": "UNILEVER", 
          "points": 200, 
          "timestamp": "2022-10-31T11:00:00Z" 
       },
       { 
          "payer": "DANNON", 
          "points": -200, 
          "timestamp": "2022-10-31T15:00:00Z" 
       },
       { 
          "payer": "MILLER COORS", 
          "points": 10000, 
          "timestamp": "2022-11-01T14:00:00Z" 
       },
       { 
          "payer": "DANNON", 
          "points": 1000, 
          "timestamp": "2022-11-02T14:00:00Z" 
       }
    ]
  ```
  
  ### Spend Route
  
  ```
  POST http://localhost:3000/api/points/spend
  ```
| Parameter  | Type | Description |
| :-- | :-- | :-- |
| `points` | number | Amount of points to be taken away from payers |
  
Sample Request Body (JSON)

  ```JSON
    { 
        "points": 300 
    }
  ```

   ### Balance Route
  
  ```
  GET http://localhost:3000/api/points/balance
  ```
  Use this route to get the balance of every payer in the transaction history (DB).
  
   ### Delete Route
  
  ```
  DELETE http://localhost:3000/api/points/delete
  ```
  
  Use this route to clear the database between tests.
