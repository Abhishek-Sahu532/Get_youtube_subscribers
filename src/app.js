const express = require("express");
const app = express();
const Subscriber = require("./models/subscribers");

// Your code goes here
app.use(express.json());

//Root node

app.get("/", (req, res) => {
  res.send("Hi!, This is the first page for the backend project");
});

//sending get request to find all the subscribers list

app.get("/subscribers", async (req, res) => {
  try {
    const ListOfSubscribers = await Subscriber.find({});
    res.status(200).send(ListOfSubscribers);
  } catch (error) {
    res.status(500).send(error);
    console.log(error.message);
  }
});

//sending get request to find the subscribers list via the given name

app.get("/subscribers/names", async (req, res) => {
  try {
    const SubscribersNames = await Subscriber.find({}).select(
      "name subscribedChannel"
    );
    res.send(SubscribersNames);
  } catch (error) {
    res.status(500).send(error);
    console.log(error.message);
  }
});

//sending get request to find the subscribers list via the given id

app.get("/subscribers/:id", async (req, res) => {
  try {
    const ListById = await Subscriber.findById(req.params.id, req.body);
    if (!ListById) {
     return res.status(400).send(`message: error.message`);
    }
    res.send(ListById);
  } catch (error) {
    res.status(500).send(`message: error.message`);
  }
});



module.exports = app;
