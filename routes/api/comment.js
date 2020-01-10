let router = require('express').Router();
// let bcrypt = require('bcryptjs')
let open = require('../../utils/mgdb').open;
let fs = require('fs');
let pathLib = require('path');

router.post('/', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  //1.获取username，password
  let { username,operation, before, environment,price,service,pay,docComment } = req.body;

  //1.5 设定必传参数
  // if (!phonenumber || !password) {
  //   res.send({
  //     err: 1,
  //     msg: '电话号码和密码为必传参数'
  //   });
  //   return;
  // }

  //2. 整理其他未来需要入库的参数
  let time = Date.now()

  //3.兜库 校验
  open({//链接库
    dbName: 'Baier',
    collectionName: 'comment'
  }).then(
    ({ collection, client }) => {
		//入库
		collection.insertOne({
		  username,operation, before, environment,price,service,pay,docComment,time
		}, (err, result) => {
		  if (!err) {
			res.send({
			  err: 0, msg: '评价成功', data: result.ops[0]
			})
		  } else {
			res.send({ err: 1, msg: '评价失败' })
		  }
		})
        client.close()

      })
});


module.exports = router;