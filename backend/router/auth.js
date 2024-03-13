const express = require('express');
const router = express.Router();
const authController = require("../controller/auth-controller");

router.route("/upload").post(authController.picUploadMiddleware, authController.picUpload);
router.route("/addproduct").post(authController.addProduct);
router.route("/removeproduct").post(authController.removeProduct);
router.route("/getallproducts").get(authController.getAllProducts);
router.route("/newcollections").get(authController.newCollections);

module.exports = router;
