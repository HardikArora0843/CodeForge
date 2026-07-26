const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        // host: 'redis-16057.c98.us-east-1-4.ec2.redns.redis-cloud.com',
        // port: 16057
        host: 'redis-10992.crce182.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 10992
    }
});

module.exports = redisClient;
