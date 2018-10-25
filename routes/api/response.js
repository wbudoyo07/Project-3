const router = require("express").Router();
const responseController = require("../../controllers/responseController");

// Matches with "/api/response"
router.route("/")
  .get(responseController.findAll);


// Matches with "/api/response/:id"
router
  .route("/:id")
  .post (responseController.createResponse);

module.exports = router;
