const fs=require('fs');
const expres=require('express');
const path=require('path');
const router = expres.Router();

router.get('/', (req, res, next) =>{
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
})

router.get('/about',(req, res)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'about.html'))
})

router.get('/sites', (req, res) =>{
    res.sendFile(path.join(__dirname, '../', 'views', 'sites.html'))
})

router.get('/visit', (req, res)=>{
    res.sendFile(path.join(__dirname,'../', 'views', 'visit.html'))
})

router.post('/visitor', (req, res)=>{
    const visitors = [req.body]
    fs.writeFile('visitors.json', JSON.stringify(visitors), (err)=>{
        if(err) throw "Unable to secure a ticket"
    })
    res.statusCode=301;
    res.redirect('/');
});module.exports=router;