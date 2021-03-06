let router = require('express').Router();
let bcrypt = require('bcryptjs')
let open = require('../../utils/mgdb').open;
let fs = require('fs');
let pathLib = require('path');

router.post('/', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  //1.获取username，password
  // let { username, password, nikename } = req.body;
  let { username, phonenumber, password, } = req.body;

  //1.5 设定必传参数
  if (!phonenumber || !password) {
    res.send({
      err: 1,
      msg: '电话号码和密码为必传参数'
    });
    return;
  }

  //2. 整理其他未来需要入库的参数
  // nikename = nikename || '找个生成包来系统生成昵称';
  // let follow = 0;
  // let fans = 0;
  let time = Date.now()

  let icon;//用户头像

  if (req.files && req.files.length > 0) {
    //用客户端传的icon
    fs.renameSync(
      req.files[0].path,
      req.files[0].path + pathLib.parse(req.files[0].originalname).ext
    )
    icon = '/upload/user/' + req.files[0].filename + pathLib.parse(req.files[0].originalname).ext
  } else {
    icon = '/upload/user.png';
  }


  //3.兜库 校验
  open({//链接库
    dbName: 'Baier',
    collectionName: 'user'
  }).then(
    ({ collection, client }) => {

      //查询
      collection.find({
        phonenumber
      }, {}).toArray((err, result) => {//obj->arr

        if (err) {
          res.send({ err: 1, msg: '集合操作失败4' })
        } else {

          //3. 判断用户是否存在，存在数组的长度就有了
          if (result.length === 0) {//不存在

            //密码加密
            var hash = bcrypt.hashSync(password, 10);

            //入库
            collection.insertOne({
              username, phonenumber, time, icon, password: hash
            }, (err, result) => {
              if (!err) {

                //返回一切注册后的信息给客户端,不含phonenumber、password
                delete result.ops[0].phonenumber
                delete result.ops[0].password
                res.send({
                  err: 0, msg: '注册成功', data: result.ops[0]
                })
              } else {
                res.send({ err: 1, msg: '注册失败' })
              }
            })


          } else {

            //删除上传后的头像
            if(icon.indexOf('noimage') === -1){
              fs.unlinkSync('./public'+icon)
            }

            res.send({ err: 1, msg: '用户已存在' });//返回的数据是个对象
          }

        }
        client.close()

      })

    }
  )






});


module.exports = router;