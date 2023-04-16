const registeruser=require("./usercontroller");
const express = require("express");
const router = express.Router();
router.route("/register").post(registeruser);
router.route("/login").get(registeruser);
router.route("/contactus").delete(registeruser);
router.route("/aboutus").put(registeruser);








module.exports=router;