class NotFoundError extends Error{
    constructor(entity){
        super(`${entity} não encontrado!`);
    }
}

module.exports = NotFoundError