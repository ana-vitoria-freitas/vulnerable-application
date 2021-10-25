const chalk = require('chalk');
const fastify = require('fastify')({
    logger: true
})
const proConfig = require('./dataBase/db');
const Pool = require("pg").Pool;
const pool = new Pool(proConfig);

fastify.get('/login', async function (request, reply) {
    try {
        const response = await pool.query('SELECT * FROM accounts');
        reply.status(200).send(response.rows);
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