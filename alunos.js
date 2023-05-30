

const express = require("express");
const NotFoundError = require("./NotFoundError");
const { getAllAlunos, createAluno, updateAluno, deleteAluno } = require("./db/aluno");
const router = express.Router();

let alunos = [{
    id: 1, name: "mariana"
}, {
    id: 2, name: "lucas"
}]

const auth = (req,res,next) =>{
    const auth = req.headers.authorization
    if (auth === "token valido") return next()
    res.status(401).send();
}

router.get("/alunos",auth, async (req, res) => {
    const alunos =await getAllAlunos()
    res.json({alunos});
})

router.post("/alunos", async(req, res) => {
    const aluno = req.body;
    await createAluno(aluno.name)
    res.json({status:"ok"});
})

router.put("/alunos/:id", async (req,res)=>{
    const id = Number(req.params.id);
    await updateAluno(id,req.body.name)
    res.json({status:"ok"});
})

router.delete("/alunos/:id",async(req,res) =>{
    const id = Number(req.params.id);
    await deleteAluno(id);
    res.json({status:"ok"});
})

module.exports = router;