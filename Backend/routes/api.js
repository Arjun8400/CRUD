const router = require("express").Router()
const userController = require("../controller/user")
// console.log(userController)
router.get("/", userController.homecontroller)
router.get("/user", userController.userDataController)
// router


module.exports = router