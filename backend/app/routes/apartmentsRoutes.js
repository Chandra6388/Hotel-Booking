const router = require("express").Router()
const {addNewApartment , getAllApartments  } = require('../controllers/admin/apartments/apartmentsControllers')

router.post("/addNewApartment", addNewApartment);
router.post("/getAllApartments", getAllApartments);

module.exports = router;