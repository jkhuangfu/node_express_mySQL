/*
    全局变量
*/
const mysql = require('mysql');
const sqlConf = require('../config/mySql');
const util = require('../util');
const log4js = require('../util/log4');
module.exports = {
    ctrlCommon: (app) => {
        let mysqlConfig;
        if (app.get('env') === 'development') {
            log4.Info('测试环境');
            mysqlConfig = sqlConf.mysqlDev;
        } else if (app.get('env') === 'production') {
            log4.Info('线上环境');
            mysqlConfig = sqlConf.mysqlOnline;
        }
        /* 使用连接池 */
        global.pool = mysql.createPool(util.extend({}, mysqlConfig));
        global.redisDb = require('./redisTool')(app);
        global.sql = require('../sql/sqlMap');
        global.md5 = require('md5');
        global.log4 = log4js.log; //全局日志

    }
};