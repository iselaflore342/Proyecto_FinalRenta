const {Router} = require("express")
const { AddPelicula, UpdPelicula, ShowPelicula, DeactivatePelicula, AddRenta, UpdRenta, ShowRenta, DeactivateRenta } = require("../controllers/rentapelicula")
const {} = require("../controllers/rentapelicula")
const router = Router()

router.post("/addpelicula", AddPelicula)
router.post("/addrenta", AddRenta)

router.put("/updpelicula", UpdPelicula)
router.put("/updrenta", UpdRenta)

router.get("/showpelicula", ShowPelicula)
router.get("/showrenta", ShowRenta)

router.delete("/despelicula/id/:ID", DeactivatePelicula)
router.delete("/desrenta/id/:ID", DeactivateRenta)

module.exports = router