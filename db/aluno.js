const prisma = require("./prisma")

const getAllAlunos = ()=>{
    return prisma.aluno.findMany()
}

const createAluno = (name)=>{
    return prisma.aluno.create({
        data: {
            name
        }
    })
}

const updateAluno = (id,name)=>{
    return prisma.aluno.update({
        where:{id
        },
        data :{
            name
        }
    })
}

const deleteAluno = (id)=>{
    return prisma.aluno.delete({
        where:{id
        }
    })
}

module.exports={
    getAllAlunos,
createAluno,
updateAluno,
deleteAluno
}