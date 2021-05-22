"use strict";
const express = require('express');
const router = express.Router();
const mysqlConnection = require('../index/constructor');
const jwt = require('jsonwebtoken');
/*router.get('/' , (req: any,res:any) =>{
    mysqlConnection.query('select * from usuarios', (err: any,rows: any,fields: any) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
    
});

const email:string = 'test@admin.com';
const password:string = '123';

router.post('/signin', (req:any,res: any)=>{
    console.log(req.body);
  /*const {email, password} = req.body;
  mysqlConnection.query('select * from usuarios where id_user=?',
  [email, password],
  console.log(req.body)
  )
  
});
*/
module.exports = router;
