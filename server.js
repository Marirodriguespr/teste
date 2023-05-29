const express = require('express');
const server = express();
server.use(express.json());

let alunos = [{
    id: 1, name: "mariana"
}, {
    id: 2, name: "lucas"
}]

server.get("/alunos", (req, res) => {
    res.json(alunos);
})

server.post("/alunos", (req, res) => {
    const id = alunos.length + 1;
    const aluno = req.body;
    aluno.id = id;
    alunos.push(aluno)
    res.json(alunos);
})

server.put("/alunos/:id", (req,res)=>{
    const id = Number(req.params.id);
    alunos.forEach(aluno => {
        if(aluno.id === id){
            aluno.name = req.body.name
        }
    }) 
    res.json(alunos);
})

server.delete("/alunos/:id",(req,res) =>{
    const id = Number(req.params.id);
    alunos = alunos.filter((aluno) => {
        return aluno.id !== id
    })
    res.json(alunos);
})


module.exports = server