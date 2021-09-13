const express = require('express')
const app = express()
const creds = require("./db")
const PORT = 3009

//middleware
app.use(express.json())
//middleware

//post to restaurant table
app.post("/createRestaurant", (req, res) => {
    creds.connect((err, client, release) => {
      if (err) {
        return console.error("Error getting connected to the client", err.stack);
      }
      client.query(
        `INSERT INTO restaurant (name) VALUES ('${req.body.name}');`,
        (err, result) => {
          if (err) {
            res.status(400).send(err.stack);
          }
          res.status(200).send(result);
        }
      );
    });
  });

//get restaurant data
app.get('/restaurantNames', (req, res) =>{
    creds.connect((err, client, release) => {
        if (err) {
            return console.error("Error getting connected to the client", err.stack);
        }
        client.query("SELECT * FROM restaurant", (err, result) => {
            if (err) {
                res.status(400).send(err.stack);
            }
            res.status(200).send(result.rows)
        })
    })
})

//post to movies
app.post('/createMovie', (req, res) =>{
    creds.connect((err, client, release) => {
        if (err){
            return console.error("Error getting connected to the client", err.stack);
        }
        client.query(`INSERT INTO movies (name) VALUES ('${req.body.name}');`,
        (err, result) => {
            if (err) {
                res.status(400).send(err.stack);
              }
              res.status(200).send(result);
             
        })
    })
})


//get movies data
app.get('/movieNames', (req, res) =>{
    creds.connect((err, client, release) => {
        if (err) {
            return console.error("Error getting connected to the client", err.stack);
        }
        client.query("SELECT * FROM movies", (err, result) =>{
            if (err) {
                res.status(400).send(err.stack);
            }
            res.status(200).send(result.rows)
        })
    })
})



app.listen(PORT, console.log(`${PORT}`))