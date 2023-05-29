const colors = require('colors');
const math = require('./mathe');
//console.log("cor -> "+colors.bgGreen("greemm"));
//console.log("soma -> "+math.soma(5,6));

const server = require('./server');
const porta = "8080"

server.listen(porta,()=>{
    console.log("conectou servidor/porta-> 8080")
})
