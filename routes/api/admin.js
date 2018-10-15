const router = require("express").Router();
const adminController = require("../../controllers/adminController");
const passport = require("../../config/passport");
// Matches with /api/admin
router.route("/")
    .get(adminController.findAll)
    .post(adminController.create);

// Matches with /api/admin/:id
// router.route("/:id")
//     .get(adminController.findById)
//     .put(adminController.update)
//     .delete(adminController.remove);

//Matches with /api/admin/login
router.post(
    '/login',
    function (req, res, next) {
        console.log('/api/admin/login, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        let  userInfo = {
            username: req.user.username
        };
        res.send(req.user);
    }
);

router.get('/login', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)

    if (req.user) {
        res.json({ userLoggedin: req.user })
    } else {
        res.json({ userLoggedin: null })
    }
});

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router;