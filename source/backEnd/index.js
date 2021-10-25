const chalk = require('chalk');
const fastify = require('fastify')({
    logger: true
})
  
fastify.post('/login', function (request, reply) {
    reply.send({ hello: 'world' })
})
  
  // Run the server!
fastify.listen(3000, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    console.log(chalk.green(`Server listening on ${address}`))
})