const { Router } = require("express");
var express = require('express')
var router = express.Router()
const { check } = require('express-validator');

const {signout, signup} = require("../controllers/auth")

router.post('/signup',
check('name')
    .isLength({ min: 3 })
    .withMessage('must be at least 3 chars long'),

check('email')
    .isEmail()
    .withMessage('please enter valid email'),

check('password')
    .isLength({ min: 3 })
    .withMessage('must be at least 3 chars long')
, signup)
router.get('/signout', signout)

module.exports = router