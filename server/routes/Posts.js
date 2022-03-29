const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

router.get("/", async (req, res) => {
const listOfPosts = await Posts.findAll();
console.log("post /")
res.json(listOfPosts);
//res.json(" hello")
});

// this returns one row of the data table
router.get("/byId/:id", async (req, res)=> {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  //pos is what we receive
  console.log("router.get byId");
  res.json(post);
})


router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  
  res.json(post);
});

module.exports = router;