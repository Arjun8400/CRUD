const router = require("express").Router()
const userController = require("../controller/user")
// console.log(userController)
router.get("/", userController.homecontroller)
router.get("/user", userController.userDataController)
router.post("/data", userController.dataController)


module.exports = router