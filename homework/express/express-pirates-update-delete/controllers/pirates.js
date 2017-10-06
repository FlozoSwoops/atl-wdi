//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates
	});
});


router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = pirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirate: showPirate
	});
});


//==============================
// CREATE
//==============================

//==============================
// UPDATE
//==============================
router.get('/:pirateid/edit', (request, response) => {
	res.render('pirates/edit', {
		pirates: {
		  id: req.params.id,
		  name: pirates.id.name,
		  birthplace: pirates.id.birthplace,
		  death_year: pirates.id.death_year,
		  base: pirates.id.base,
		  nickname: pirates.id.nickname
		}
	  });
	  then(() =>{
		  ressponse.redirect('/pirates')
	  })
}
)
//==============================
// DESTROY
//==============================
router.get('/:id/delete', (request, response) => {
	
	pirates.splice(req.params.id, 1);
	 then(() => {
		 response.render(/pirates)
	 })
	
		
//==============================
// EXPORTS
//==============================

module.exports = router;
name

