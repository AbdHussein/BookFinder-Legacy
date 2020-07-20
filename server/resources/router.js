const router = require('express').Router();
const controller = require('./controller.js')

router.post("/book", controller.book);

router.get("/favorite", controller.favourite);

router.post("/read-book", controller.readBook);

router.get("/read-later", controller.readLater);

router.delete('/remove-one', controller.removeOne);

router.delete('/remove-read', controller.removeRead);

router.post('/register', controller.register);

router.get('/login/:Email/:Password', controller.login);

module.exports = router;
