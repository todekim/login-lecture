"use strict"
const UserStorage = require("../../models/UserStrorage");
const output ={
    home : (req,res) =>{
        res.render('home/index');
    },
    login : (req,res) =>{
        res.render('home/login');
    },
};

const process = {
    login : (req,res) =>{
        const id = req.body.id;
        const psword = req.body.psword;

        const users = UserStorage.getUsers("id","psword");
        const response = {};
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx]===psword){
                response.success = true;
                return res.json(response);
            }
        }
        response.success = false;
        response.msg = 'login fail';
        return res.json(response);       
    },
}

module.exports = {
    output,
    process,
}