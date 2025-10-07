const router = require("express").Router()
const userController = require("../controller/user")
// console.log(userController)
router.get("/", userController.homecontroller)
router.get("/user", userController.userDataController)
router.post("/data", userController.dataController)
router.get("/showdata", userController.showDataController)
router.delete('/userdelete/:id',userController.userDeleteController)
router.get("/update/:id", userController.userUpdateController)

router.put('/newupdate/:id', userController.newUpdateValueController);

module.exports = router