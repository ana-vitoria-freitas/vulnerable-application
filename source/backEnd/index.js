const chalk = require('chalk');
const fastify = require('fastify')({
    logger: true
})
const proConfig = require('./dataBase/db');
const Pool = require("pg").Pool;
const pool = new Pool(proConfig);
fastify.register(require('fastify-formbody'))
const path = require('path')

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '../frontEnd'),
  prefix: '/',
})

fastify.post('/login', async function (request, reply) {
    try {
        const response = await pool.query(`SELECT * FROM accounts WHERE email='${request.body.email}' and password='${request.body.password}' `);
        // if(response.rows.length) {
            //reply.sendFile('home.html')
            reply.send(response.rows);
        // }else{
            // reply.status(401).send({message: 'wrong credentials. Try again!'});
        // }
    } catch (err) {
        throw new Error(err);
    }


})

  
fastify.listen(3000, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    console.log(chalk.green(`Server listening on ${address}`))
})