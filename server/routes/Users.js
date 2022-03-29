const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

// router.post("/", async (req, res) => {
//   try {
//       const { username, password } = req.body;
//       bcrypt.hash(password, 10).then((hash) => {
//         Users.create({
//           username: username,
//           password: hash,
//         });
//         res.json("success");
//       });
//   } catch (e){
//     next(e);
//     process.exit(1);
//     console.log("err");
//   }
  
    
// });



router.post("/", async (req, res) => {
  const { username, password } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hash) => {
      Users.create({
        username: username,
        password: hash,
      });
      res.json("success");
    })
    .catch(function () {
      console.log("Promise Rejected");
    });
});

// router.post("/", async (req, res) => {
//   const { username, password } = req.body;

//   await bcrypt
//     .hash(password, 10)
//     .then((hash) => {
//       Users.create({
//         username: username,
//         password: hash,
//       });
//       res.json("success");
//     })
//     .catch(function () {
//       console.log("Promise Rejected");
//     });
// });










router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ where: { username: username } });

  if (!user) res.json({ error: "User Doesn't Exist" });

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) res.json({ error: "Wrong Username And Password Combination" });

    res.json("YOU LOGGED IN!!!");
  });
});


module.exports = router;
