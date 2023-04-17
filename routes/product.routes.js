const Router = require('express');
const fs = require('fs');
const path = require('path');


const router = Router();
const pathData =  path.join(__dirname, `/../data/products.json`);

//peticiones:
router.get("/",(req, res)=>{
    fs.readFile(pathData, 'utf8', (err, resp)=>{
        data = JSON.parse(resp);
        res.status(200).json({
            data
        })
    })
})

module.exports = router;