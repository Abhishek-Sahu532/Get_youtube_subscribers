const express = require("express");
const subscribers = require("./models/subscribers");
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

//reqeust for creating the new object & store in the database

app.post("/subscribers/add", async (req, res) => {
  const newSubscriber = await new Subscriber(req.body);
  try {
    await newSubscriber.save();
    res.send(newSubscriber);
  } catch (error) {
    res.status(500).send(error);
    console.log(error.message);
  }
});

// request for updating data by id

app.patch("/subscribers/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    await Subscriber.findByIdAndUpdate(_id, req.body);
    await subscribers.save();
    res.send(Subscriber);
  } catch (e) {
    res.status(404).send(e);
  }
});

// request for deleting data by Id

app.delete("/subscribers/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).send("No Item Found");
    }
    const updatedSubscribersList = await Subscriber.findByIdAndRemove(id, req.body);
    res.send(updatedSubscribersList);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = app;
