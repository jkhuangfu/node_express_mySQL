global.dbquery = require('./dbquery');
global.log4 = require('./log4').log;
global.redisDb = require('./redisTool')();
global.fetchData = require('./fetch');
global.hash = require('./crypto');
global.reqBody = ctx => {
    const method = ctx.method;
    return method === 'GET' ? ctx.request.query : ctx.request.body;
};
const CHARS = '0123456789abcdefghijklmnopqrstuvwxyz';
const get_char = n => {
    return CHARS.charAt((n >> 0) % CHARS.length);
};

const uuid = (c = 48, prefix = '', toLower = false) => {
    let r = '';
    while (c > 0) {
        r += get_char(Math.random() * 1e4);
        c--;
    }
    r = prefix + r;
    if (toLower) {
        r = r.toLowerCase();
    }
    return r;
};

const getClientIp = ctx => {
    let ip = ctx.headers['x-real-ip'] || ctx.headers['x-forwarded-for'] || ctx.socket.remoteAddress || '';
    if (ip.split(',').length > 0) {
        ip = ip.split(',')[0];
    }
    return ip;
};

module.exports = {
    uuid,
    getClientIp,
};