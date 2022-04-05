const router = require("express").Router();
const empController = require("../controllers/emp.controller");
const jwt = require("../helper/jwt");

router.post("/admin/create", jwt.verifyToken, empController.postEmpAdmin);
router.put("/admin/update", jwt.verifyToken, empController.putEmpAdmin);
router.delete("/admin/delete/:uuid", jwt.verifyToken, empController.delEmpAdmin);
router.get("/admin/list", jwt.verifyToken, empController.getAllAdmin);
router.get("/admin/info/:uuid", jwt.verifyToken, empController.getAdminByUID);
router.post("/sale/create", jwt.verifyToken, empController.postEmpSale);
router.put("/sale/update", jwt.verifyToken, empController.putEmpSale);
router.delete("/sale/delete/:uuid", jwt.verifyToken, empController.delEmpSale);
router.get("/sale/list", jwt.verifyToken, empController.getAllSale);
router.get("/sale/info/:uuid", jwt.verifyToken, empController.getSaleByUID);
router.put("/change-password", jwt.verifyToken, empController.putEmpPassword);
router.get("/sale/listmatch", jwt.verifyToken, empController.getAllSaleForCustomerMatch);

module.exports = router;
