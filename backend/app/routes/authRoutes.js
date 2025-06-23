const router = require("express").Router()
const { login   } = require('../controllers/auth/authControllers')

router.post("/login", login);


module.exports = router;