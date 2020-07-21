const router = require('express').Router();
const controller = require('./controller.js')

router.get("/favorite/:userID", controller.favourite)
.get('/login', controller.login)
.post("/book", controller.book)
.post('/register', controller.register)
.delete('/remove-one/:id', controller.removeOne)
.delete('/remove-read', controller.removeRead);

// router.post("/read-book", controller.readBook);
// router.get("/read-later", controller.readLater);
// router.delete('/remove-read', controller.removeRead);
module.exports = router;
