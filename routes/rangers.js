'use strict';

const express = require('express');
const router = express.Router();

//Error 13 correcting source path
const rangersModel = require('../model/db');

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'List of Power Rangers',
            data: rangersModel
        },
        partials: {
            body: 'partials/ranger-list',
        },
    });
});

router.get('/:slug', (req, res) => {
    const { slug } = req.params;

    //Error 4 removed an extra (
    const ranger = rangersModel.find(ranger => ranger.slug === slug)
    if (ranger) {
        res.render('template', {
            locals: {
                title: `Power Ranger: ${ranger.name}`,
                ranger
            },
            partials: {
                body: 'partials/ranger-details',
            },
        });
    } else {
        res.status(404).send(`No Ranger found that matches slug, ${slug}`);
    }

});


//Error 8 adding the s to exports
module.exports = router;