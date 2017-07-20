//your code below
const express = require('express');
const router = express.Router();
const pirates = require('../models/pirates.js')

//index
router.get('/', (req,res) => {
    res.render('index', {
        data: pirates
    })
})
//new
router.get('/new', (req,res) => {
    res.render('new');
})

//show
router.get('/:id', (req,res) => {
    const id = req.params.id;
    res.render('show', {
    	data: pirates[id]
    });
})


//post
router.post('/', (req,res) => {
    console.log(req.body);
    const newPirate = {
    	name: req.body.name,
    	birthplace: req.body.birthplace,
    	death_year: req.body.death_year,
    	base: req.body.base,
    	nickname: req.body.nickname
    };
    pirates.push(newPirate);
    res.redirect('/pirates') 
});

module.exports = router;