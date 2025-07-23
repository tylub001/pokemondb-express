const router = require("express").Router();
const { getCurrentUser } = require("../controllers/users");

router.get("/me", getCurrentUser);

router.get("/", (req, res) => {
  res.json([{ name: "Ash" }, { name: "Misty" }]);
});

module.exports = router;
