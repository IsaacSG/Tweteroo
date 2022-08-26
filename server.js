import express from "express";
import cors from "cors";

const server = express();

server.use(cors);
server.use(express.json());

const User = [];
const Tweet = [];

server.post("/sign-up", (req, res) => {
    User = {username: username, avatar: url};
    console.log(User);
    res.send("Ok");
})

server.post("/tweets", (req, res) => {
    Tweet = {username: username, tweet: tweet};
    console.log(Tweet);
    res.send("Ok");
})

server.get("/tweets", (req, res) => {
    res.send(tweets);
})

server.listen(5000, () => console.log("Listen on 5000"));