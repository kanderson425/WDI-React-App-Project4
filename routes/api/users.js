const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const usersCtrl = require('../../controllers/users');

/*--- Public Routes ---*/
//@route GET api/users/signup
//@desc Signs user up
//access PUBLIC
router.post('/signup', usersCtrl.signup);
// router.post('/signup', (req, res) => res.json({ msg: 'POST request test works'}));
router.post('/login', usersCtrl.login);

//@route GET api/users/test
//@desc Tests users route
//access PUBLIC
router.get('/test', (req, res) => res.json({ msg: 'GET request test works' }));



/*---------- Protected Routes ----------*/


module.exports = router;
