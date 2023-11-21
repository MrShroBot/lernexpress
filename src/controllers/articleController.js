const router = require('express').Router;

router.get('/article',(req,res)=>{
    res.render('artiles.njk');
});

module.exports = router;