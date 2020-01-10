let router = require('express').Router();

const Core = require('@alicloud/pop-core');

router.get('/',(req,res,next)=>{

  // console.log(1)

  let {tel} = req.query;//获取电话
  tel = Number(tel)
  var client = new Core({
    accessKeyId: 'LTAI4FbtA8rWEqQTaYXR6ik2',
    accessKeySecret: 'HLb8lJeQvcjaKNL8S2l6m19MuTh5Sr',
    endpoint: 'https://dysmsapi.aliyuncs.com',
    apiVersion: '2017-05-25'
  });

  //生成短信码
  let code = Math.floor(Math.random()*99999+10000)

  var params = {
    "RegionId": "cn-hangzhou",
    "PhoneNumbers": tel,
    "SignName": "小林口腔",
    "TemplateCode": "SMS_181859996",
    "TemplateParam": `{code:${code}}`
  }

  var requestOption = {
    method: 'POST'
  };

  client.request('SendSms', params, requestOption).then((result) => {
    console.log(JSON.stringify(result));
    res.send({
      err:0,
      mess:'发送成功',
      code:code //短信校验交给客户端
    })
  }, (ex) => {
    console.log(ex);
    res.send({
      err:0,
      mess:'发送失败'
    })
  })

})

module.exports=router;