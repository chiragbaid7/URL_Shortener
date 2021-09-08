const router = require("express").Router();
const { getURL } = require("../../service/url");
const { DOMAIN } = require("../../config/index");
router.get("/:id", async (req, res, next) => {
  //redirect to long url
  try {
    const shorturl = DOMAIN + req.params.id;
    const response = await getURL(shorturl);
    //redirect-page moved to a temporary location
    res.status(302).redirect(response.longurl);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
