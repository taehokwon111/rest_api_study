const express = require('express')
const app = express()
const port = 4000;
const { v4: uuidv4 } = require('uuid');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const users = [
    { id: 1, name: "유저1" },
    { id: 2, name: "유저2" },
    { id: 3, name: "유저3" }
   ];

app.get(`/`, (req, res) => {
   
return res.send("asdad")
});

app.get("/api/users", (req, res) => {

    res.json({ok: true, users: users});
})


app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log(`The server is listening on port http://localhost:${port}/`);
});