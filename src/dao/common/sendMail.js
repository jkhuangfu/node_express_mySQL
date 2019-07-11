const nodemailer = require('nodemailer');
const mail_config = require('../../config/mail');
const { server_config } = mail_config;
const mailTransport = nodemailer.createTransport(server_config);
const randomCode = () => {
    return Math.floor(Math.random() * 10) + "" + Math.floor(Math.random() * 10) + "" + Math.floor(Math.random() * 10) + "" + Math.floor(Math.random() * 10);
};
const sendMailCode = (req, res) => {
    let param = req.query || req.params; //get请求
    let { email,type=0 } =  req.body;
    let code = randomCode();
    mailTransport.sendMail({
        from: `<${server_config.auth.user}>`,
        to: email,//rescive_mail,
        subject: '邮件验证码(自动发送,勿回复)',
        //text:  '您的验证码是'+randomCode(),
        html:
            `
            <span style="color:#666;">您的验证码是:</span>
            <span style="color:red;font-size:38px;font-weight:500;margin:0 15px;">${code}</span>
            <span style="color:#666;">5分钟内有效</span>
        `
    }, async (err) => {
        if (err) {
            log4.Info('Unable to send email: ' + err);
            res.json({ code: 400, msg: '发送失败' });
        } else {
            let t = Date.now();
            let getCount = await redisDb.get(0, `${email}_${type}_count`);
            let sendCounts = getCount ? getCount : 0;
            if (sendCounts >= 5) {
                res.json({ code: 201, msg: '超过发送次数，明日再试' });
                return ;
            }
            let count = sendCounts - 0 + 1;
            let oneDay = 24*60*60 ;
            let now = new Date();
            let nowSecond = now.getHours()*60*60 + now.getMinutes()*60 + now.getSeconds();
            redisDb.set(0, email, code, 5 * 60, (result, flag) => {
                if (flag) {
                    let _t = Date.now();
                    log4.Info(`Success------->${_t - t}`)
                    redisDb.set(0, `${email}_${type}_count`, count, oneDay-nowSecond, (_result, _flag) => {
                        if (_flag) {
                            res.json({ code: 200, msg: '发送成功' });
                        }
                    })
                } else {
                    res.json({ code: 400, msg: '发送失败' });
                }
            })
        }
    });
};
const sendMailNormal = (req,res)=> {
    let { to, mailCon , mailType = 'text' } = req.body;
    let con = {};
    if(mailType === 'text'){
        con = {
            text:mailCon
        }
    }else {
        con = {
            html:mailCon
        }
    }
    mailTransport.sendMail({
        from: `<${server_config.auth.user}>`,
        to: to,
        subject: 'no reply(自动发送,勿回复)',
        ...con
    }, (err) => {
        if(err){
            res.json({code:500,msg:err})
        }else{
            res.json({code:200,msg:true})
        }
    })
};
module.exports = { sendMailCode,sendMailNormal };