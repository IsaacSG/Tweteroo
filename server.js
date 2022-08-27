import express from "express";
import cors from "cors";

const server = express();

server.use(cors());
server.use(express.json());

const User = [];
const Tweet = [];
let Cont = 0;

server.post("/sign-up", (req, res) => {
    const user = {...req.body};
    User.push(user);
    res.send("Ok");
})

server.post("/tweets", (req, res) => {
    let tweet = {...req.body};
    const findUser = User.filter((user) => user.username === tweet.username);
    if(findUser != "") {
        Tweet.push({...req.body, avatar: findUser[0].avatar});
        Cont ++;
        res.send("Ok");
    }
    else {
        res.status(401).send("Usuario não existe");
    }
})

server.get("/tweets", (req, res) => {
    const Last10 = []
    for(let i= Cont-10;i < Cont;i++) {
        Last10.push(Tweet[i]);
    }
    res.send(Last10);
})

server.listen(5000, () => console.log("Listen on 5000"));