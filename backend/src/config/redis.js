const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        // host: 'redis-16057.c98.us-east-1-4.ec2.redns.redis-cloud.com',
        // port: 16057
        host: 'redis-11636.c82.us-east-1-2.ec2.cloud.redislabs.com',
        port: 11636
    }
});

module.exports = redisClient;
