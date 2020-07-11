var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/aboutus',function(req,res){
  res.render('AboutUs');
})

router.get('/Empowerment',function(req,res,next){
  res.render('services/Empowerment');
})

router.get("/Holistichealth", function (req, res, next) {
  res.render("services/HolisticHealth");
});

router.get("/Humanitarian", function (req, res, next) {
  res.render("services/Humanitarian");
});

router.get('/others',function(req,res){
  res.render('others');
})

module.exports = router;
