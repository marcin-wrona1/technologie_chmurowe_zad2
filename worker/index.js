require("dotenv").config()

const keys = require('./keys');
const redis = require('redis');

const a1 = parseInt(process.env.TCH2_A1),
  q = parseInt(process.env.TCH2_Q)
;

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();

function geom(index) {
  if (index === 1)
    return a1;
  if (index < 1 || index > 10)
    return undefined;

  return a1 * Math.pow(q, index - 1);
}

sub.on('message', (channel, message) => {
  redisClient.hset('values', message, geom(parseInt(message)));
});
sub.subscribe('insert');
