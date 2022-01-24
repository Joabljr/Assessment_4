const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
  const fortunes = [
    "You will become more and more wealthy.",
    "Nothing is more difficult, and therefore more precious, than to be able to decide.",
    "Today, your mouth might be moving but no one is listening.",
    "Remember to share good fortune as well as bad with your friends.",
    "The sure way to predict the future is to invent it.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  // res.send("hello");
});

app.get("/api/goal", (req, res) => {
  const goals = [
    "Write A Short Story!",
    "Paint A Picture!",
    "Go for A Jog",
    "Do Something You Never Did",
    "Take A Nap",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * goals.length);
  let randomGoal = goals[randomIndex];

  res.status(200).send(randomGoal);
  // res.send("hello");
});

app.get("/api/check", (req, res) => {
  const checks = "You Ready?!";

  res.status(200).send(checks);

  // choose random compliment
  // res.send("hello");
});

app.get("/api/done", (req, res) => {
  const done = "You Done?!";

  res.status(200).send(done);
});

app.listen(4000, () => console.log("Server running on 4000"));

// node server/index.js
