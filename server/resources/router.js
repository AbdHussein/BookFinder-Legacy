const router = require('express').Router();
const signup = require('../auth/signup')
const middlewares = require('./middlewares')
const login = require('../auth/login')
const verify = require('../auth/verify')
const logout = require('../auth/logout')
const controller = require('./controller.js');

router.post("/book", controller.book);

router.post("/signup", signup.signup)

router.post("/login" ,login.login)

router.get("/verify/:token", verify.verify)

router.get("/logout/:token", logout.logout)

router.get("/favorite", controller.favourite);

router.post("/read-book", controller.readBook);

router.get("/read-later", controller.readLater);

router.delete('/remove-one', controller.removeOne);

router.delete('/remove-read', controller.removeRead);

// router.post('/register', controller.register);

// router.get('/login/:Email/:Password', controller.login);

module.exports = router;
