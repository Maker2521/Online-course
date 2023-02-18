const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/AutoStudy', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('数据库链接成功 连接地址:mongodb://127.0.0.1/AutoStudy');
    }).catch(err => {
        console.log(err);
        console.log('数据库链接失败');
    });