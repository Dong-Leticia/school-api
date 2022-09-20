const {Router} = require("express")
const {addUser, loginUser,getUsers} = require("../controllers/userControllers")

const router=Router();

router.post('/register',addUser).post('/login', loginUser)

router.route('/').get(getUsers)

module.exports=router
