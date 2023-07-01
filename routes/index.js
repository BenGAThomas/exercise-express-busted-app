'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //Error 10 fixed a spelling error
    res.render('template', {
        locals: {
            title: "Home Page",
            //Error 11 adding path
            path: "rangers"
        },
        partials: {
            body: "partials/home"
        }
    })
})

module.exports = router;