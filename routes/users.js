const {Router} = require('express');
const fs = require('fs');
const path = require('path');

const router = Router();
const pathData =  path.join(__dirname, `/../data/users.json`);

//ruta petición get
router.get('/',(req,res)=>{
    console.log(pathData);

    fs.readFile(pathData, 'utf8', (err, resp)=>{
        console.log(resp);
        data = JSON.parse(resp);
        res.status(200).json({
            data
        })
    })

})

router.post('/adduser', (req, res)=>{
    req.params.id
    const dataUser = req.body;
    fs.readFile(pathData, 'utf8', (err, resp)=>{
        data = JSON.parse(resp);
        data["user4"]=dataUser;
        res.status(201).json({
            data
        })
    })
})







router.post('/adduser', (req, res)=>{
    fs.readFile(path, 'utf8', (err, resp)=>{
        data = JSON.parse(resp);
        data["user4"]
    })
})

module.exports = router;