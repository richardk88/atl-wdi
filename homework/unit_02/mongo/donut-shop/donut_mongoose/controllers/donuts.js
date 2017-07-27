//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Donut = require('../models/donuts') ;

//======================
// INDEX
//======================
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', (req, res) => {
    Donut.find({})
        .then((donuts) => {
            res.render (
                'donuts/index',
                { donuts }
            );
        })
        .catch((error) => {
            console.log('Error retrieving users from database!');
            console.log(error);
        });
})


//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form
router.get('/new', (req, res) => {
    res.render('donuts/new');
})


//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page
router.get('/:id', (req, res) => {
    const donutIdToSearchDbFor = req.params.id;

    Donut.findById(donutIdToSearchDbFor)
        .then((donuts) => {
            res.render(
                'donuts/show',
                { donuts }
            );
        })
        .catch((error) => {
            console.log(`Error retrieving user with ID of ${donutIdToSearchDbFor}`)
        });
});



//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"
router.post('/', (req, res) => {
    const newDonutInfoFromForm = req.body;
    Donut.create(newDonutInfoFromForm)
        .then((donuts) => {
            res.render(
                'donuts/show',
                { donuts }
            )
        })
        .catch((error) => {
            console.log('Error saving new user to database!');
            console.log(error);
        })
})


//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it
router.get('/:id/edit', (req,res) => {
    const donutIdToFind = req.params.id;
    Donut.findById(donutIdToFind)
        .then((donuts) => {
            res.render(
                'donuts/edit',
                { donuts }
            );
        })
        .catch((error) => {
            console.log(`Error rendering edit form for user with ID of ${userIdToFind}`)
        })
})


//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)
router.put('/:id', (req, res) => {
    const donutIdToUpdate = req.params.id;
    const updatedDonutInfo = req.body;
    Donut.findByIdAndUpdate(
        donutIdToUpdate,
        updatedDonutInfo,
        { new: true } 
    )
        .then((donuts) => {
            res.render(
                'donuts/show',
                { donuts }
            )
        })
        .catch((error) => {
            console.log(`User with ID of ${donut.id} failed to update!`)
            console.log(error);
        })
});

//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"
router.get('/:id/delete', (req, res) => {
    const donutIdToDelete = req.params.id;
    Donut.findByIdAndRemove(donutIdToDelete)
        .then(() => {
            console.log(`Successfully deleted donut with ID ${donutIdToDelete}!`)
            response.redirect('/');
        })
});




//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router;