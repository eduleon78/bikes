import express from 'express';
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', { title: 'Red Bicicletas' 
    });
});

export default router;