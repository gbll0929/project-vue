let router = require('express').Router();
let open = require('../../utils/mgdb').open;
let jwt = require('../../utils/jwt')
let bcrypt = require('bcryptjs')

router.post('/',(req,res,next)=>{
  //1.获取phonenumber，password
  let {username, phonenumber,password}=req.body;

  //1.5 设定必传参数
  if(!phonenumber||!password){
    res.send({
      err:1,
      msg:'电话号码和密码为必填'
    });
    return;
  }

  //2. 兜库 校验
  open({//链接库
    dbName:'Baier',
    collectionName:'user'
  }).then(
    ({collection,client})=>{
      //查询
      collection.find({
        phonenumber
      },{}).toArray((err,result)=>{//obj->arr

        if(err){
          res.send({err:1,msg:'集合操作失败3'})
        }else{

          //3. 判断用户是否存在，存在数组的长度就有了
          if(result.length>0){

            //3.5 校验明文密码和库里面加了盐密码   解密的过程，明文解密后还是明
            let bl = bcrypt.compareSync(password, result[0].password);

            if(bl){

              //4. 生成token
              let token = jwt.sign({username,phonenumber,id:result[0]._id})

              //返回信息给客户端
              delete result[0].phonenumber;
              delete result[0].password; //用户名和密码无需返回给客户端

              res.send({err:0,msg:'登录成功',data:result[0],token});//返回的数据是个对象

            }else{
              res.send({err:1,msg:'用户名或者密码有误'});//返回的数据是个对象
            }
          }else{
            res.send({err:1,msg:'登录失败'});//返回的数据是个对象
          }
          
        }
        client.close()

      })

    }
  )
  
})
module.exports=router;