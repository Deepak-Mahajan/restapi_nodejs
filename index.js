import express from "express";

import bodyparser from "body-parser"; // for the incoming post request bodies.

import userRoutes from "./routes/users.js"; // . represents the current directory

const app = express(); // initializing our express app as a function

const port = 3000;

app.use(bodyparser.json()); // initializing body parser middleware

app.use("/users", userRoutes); // important step this is like our starting route for all the routes means
// all our routes will start with /users

app.get("/", (req, res) => res.send("Rest API using nodejs")); // this '/' is home or route url

app.listen(port, () =>
  console.log(`Server running on the http://localhost:${port}`)
);
// make our application listen to incoming requests.
