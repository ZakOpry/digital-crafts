const express = require("express");

const app = express();

var cowsay = require("cowsay");

app.post("/sendCowUserName", (req, res) => {
    res.send(cowsay.say({
        text : "Adding cow user",
        e : "oO",
        T : "U "
    }));
})


app.post("/sendCowAppointment", (req, res) => {
    res.send(cowsay.say({
        text : "Setting up cow appointment",
        e : "oO",
        T : "U "
    }))
})


app.get("/sendCowUserName", (req, res) => {
    res.send(cowsay.say({
        text : "Adding cow user",
        e : "oO",
        T : "U "
    }));
})



app.get("/sendCowAppointment", (req, res) => {
    res.send(cowsay.say({
        text : "Setting up cow appointment",
        e : "oO",
        T : "U "
    }))
})



app.delete("/deleteCowUser", (req, res) => {
    res.send(console.log("Cow User Deleted"))
})




app.listen(3001)