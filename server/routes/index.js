const router = require("express").Router();
const questions = require("../questions.json");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json(questions);
  // Questions.find({}).then(allQuestions=>{

  //   res.json(allQuestions);
  // })
});

router.get("/question/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log("req.params.id:", req.params.id, typeof req.params.id);

  res.json(questions[id]);
});

module.exports = router;
