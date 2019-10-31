const router = require('koa-router')();

const checklogin = require('../middlewares/checklogin');
const captcha = require('../src/dao/common/cacp');
// const {upFileForOss, upFileForLocal} = require('../src/dao/common/upFile');
// const {sendMailCode, sendMailNormal} = require('../src/dao/common/sendMail');
const multer = require('multer');
const upload = multer({
    limits: {
        fileSize: 600 * 1024 // 限制文件为600kb
    },
    dest: './public/upload'
}).array('file', 9);

router
    .use(checklogin)
    .get('/cacp', ctx => {
        captcha(ctx);
    })
    .post('/sendMailCode', (req, res) => {
        sendMailCode(req, res);
    })
    .post('/sendMailNormal', (req, res) => {
        sendMailNormal(req, res);
     })
    //上传文件到阿里OSS
    .post('/oss/upFile', (req, res) => {
        upload(req,res,err=>{
            if (err instanceof multer.MulterError) {
                res.json({code:102,msg:err.message});
                return false;
            } else if (err) {
                res.json({code:101,mag:err});
                return false;
            }
            // upFileForOss(req, res);
        })
    })
    //上传文件到本地
    .post('/local/upFile',(req, res) => {
        upload(req,res,err=>{
            if (err instanceof multer.MulterError) {
                res.json({code:102,msg:err.message});
                return false;
            } else if (err) {
                res.json({code:101,mag:err});
                return false;
            }
            // upFileForLocal(req, res);
        })
    });
module.exports = router.routes();
