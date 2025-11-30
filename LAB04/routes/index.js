var express = require('express');
var router = express.Router();

/* Home page */
router.get('/', (req, res) => {
  res.render('index');  // views/index.ejs
});

/* Mandeep page */
router.get('/mandeep', (req, res) => {
  res.render('mandeep');  // views/mandeep.ejs
});

/* Navneet page */
router.get('/navneet', (req, res) => {
  res.render('navneet');  // views/navneet.ejs
});

/* Simran page */
router.get('/simran', (req, res) => {
  res.render('simran');  // views/simran.ejs
});

/* Vipin page */
router.get('/vipin', (req, res) => {
  res.render('vipin');  // views/vipin.ejs
});

module.exports = router;
