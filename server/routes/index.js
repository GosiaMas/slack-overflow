const router = require("express").Router();
const questions = require("../questions.json");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json(questions);
  // Questions.find({}).then(allQuestions=>{

  //   res.json(allQuestions);
  // })
});

module.exports = router;
