const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        // host: 'redis-16057.c98.us-east-1-4.ec2.redns.redis-cloud.com',
        // port: 16057
        host: 'redis-10144.c246.us-east-1-4.ec2.redns.redis-cloud.com',
        port: 10144
    }
});

module.exports = redisClient;
