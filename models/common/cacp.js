const svgCaptcha = require('svg-captcha'); // 验证码组件
const captcha = async ctx => {
    let captcha = svgCaptcha.createMathExpr({
        noise: 3,
        color: true,
        background:'#eee'
    });
    log4.Info('======获取验证码=====' + captcha.text);
    ctx.session.img = captcha.text;
    ctx.response.type = 'svg';
    ctx.body = captcha.data;
};
module.exports = captcha;