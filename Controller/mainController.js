const express = require("express");
const router = express.Router();
const user = require("../Model/userModel");

router.get("/", (req, res) => {
  user
    .find()
    .then((result) => {
      res.render("allUsers", { title: "All Users", Users: result });
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: err.message });
    });
});

router.get("/adduser", (req, res) => {
  res.render("addUser", { title: "Add User", message: "" });
});

router.post("/adduser", (req, res) => {
  let new_user = new user({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.number,
  });

  new_user
    .save()
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err.message);
      res.render("addUser", {
        title: "Add User",
        message: `data not add ===> ${err.message}`,
      });
    });
});

router.get("/delete/:id", (req, res) => {
  user
    .findByIdAndRemove(req.params.id)
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.json({ message: err.message });
    });
});
router.get("/edit/:id", (req, res) => {
  let id = req.params.id;
  user
    .findOne({ _id: id })
    .then((result) => {
      res.render("editUser", {
        title: "Update User",
        User: result,
        message: "",
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: err.message });
    });
  
});
router.post("/update/:id", (req, res) => {
  let id = req.params.id;

  user
    .findByIdAndUpdate(id, {
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.number,
    })
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.render("editUser", {
        title: "Update User",
        User: "",
        message: `data not update ===> ${err.message}`,
      });
    });
});

module.exports = router;
