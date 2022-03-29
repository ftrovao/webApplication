const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.listen(3001, ()=> {
    console.log("server running 3001")
})


const db = require("./models");

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);

//users' routes
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

db.sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log("Server running on port 3002 sb sequelize");
  });
});