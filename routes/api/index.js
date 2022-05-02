// required routing 
const router = required("express").Router();
const notes = required("./noteRoutes");

router.use("/notes", notes);

module.exports = router;