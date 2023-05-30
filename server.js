const express = require('express');
const server = express();
const alunosRouter = require('./alunos');
server.use(express.json());

server.use(alunosRouter);
server.use((err,req,res,next)=>{
    console.log(">>>>>> " + err);
    res.status(500).send();
})

module.exports = server