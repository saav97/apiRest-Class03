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

router.put('/:id', (req,res)=>{
    //petición put
    // localhost/api/user/1
    //body -> Datos a actualizar
    //obtenemos el parametro en el endpoint en este caso el id:
    const idUser=req.params.id;
    console.log(idUser);
    let pos = -1;
    fs.readFile(pathData, 'utf8', (err, resp)=>{
        data = JSON.parse(resp);
        console.log(data);
        data.forEach((user, indice) => {
            if(user.id == idUser){
                pos = indice;
                return
            }
        });
        if(pos!=-1){
            const {name, password, profession} = req.body;
            data[pos].name = name;
            data[pos].password = password;
            data[pos].profession = profession;

            res.status(200).json({
                data
            })
        }
        else{
            res.status(404).json({
                msg: `No existe el usuario con id: ${idUser}`
            })
        }
    })

})







router.post('/adduser', (req, res)=>{
    fs.readFile(path, 'utf8', (err, resp)=>{
        data = JSON.parse(resp);
        data["user4"]
    })
})

module.exports = router;