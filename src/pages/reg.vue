<template>
	<div class="reg">
		<GoBack data="注册"></GoBack>
		<ul class="reg__ul">
			<li class="reg__ul__code"><input type="text" placeholder="输入右边的验证码" @blur="test"><span><Codetest @event="change($event)" @click.native="test"/></span></li>
			<li class="reg__ul__name"><input type="text" placeholder="用户名:4-16位字母、数字或汉字" @blur="testname" v-model="username"></li>
			<li class="reg__ul__tel"><input type="number" placeholder="手机号码" @blur="testphone" v-model="phonenumber"></li>
			<li class="reg__ul__telcode"><input type="number" placeholder="输入收到的验证码" @blur="testphonecode" v-model="phonecode"><span @click="sendcode">点击发送验证码</span></li>
			<li class="reg__ul__pass"><input type="password" @blur="testpass" placeholder="设置密码：6-20位数字和字母" v-model="password"></li>
			<li class="reg__ul__file"><h4 id="h4" @click="upload">上传头像</h4><input type="file" id="file" value="上传头像"></li>
			<li class="reg__ul__mess" v-show="bmess">{{mess}}</li>
			<LogRegButton text="注册" @click.native="reg"></LogRegButton>
			<Getpass text="登录" url="/login"/>
		</ul>
	</div>
</template>

<script>
	import GoBack from '../components/goback.vue'
	import LogRegButton from '../components/log-reg-button.vue'
	import Getpass from '../components/getpass.vue'
	import Codetest from '../components/codetest.vue'
	export default{
		data(){return {
			newData:'',
			username:'',
			phonenumber:'',
			password:'',
			phonecode:'',
			mess:'',
			bmess:false,
			bcode:false,
			bphone:false,
			bname:false,
			bphonecode:false,
			bpass:false,
			bleave:true,
			msgcode:0,
		}},
		components:{
			GoBack,
			LogRegButton,
			Getpass,
			Codetest
		},
		mounted(){
		},
		updated(){
		},
		methods:{
			upload(){
			   let file=document.getElementById('file');
			   file.click()
			},
			change(data){
				this.newData = data;
			},
			test(){
				console.log(this.newData)
				let code = document.querySelector('.reg__ul__code input');
				if(code.value == this.newData){
					this.bmess=false;
					this.bcode=true;
				}else{
					this.bmess=true;
					this.mess="验证失败！"
					this.bcode=false;
				}
			},
			testphone(){
				let pn = document.querySelector(".reg__ul__tel input");
				if (/^1[0-9]{10}$/.test(pn.value)) {
					this.bmess=false;
				    this.bphone = true;
				} else {
					this.bmess=true;
				    this.mess = "手机号码格式不正确";
				    this.bphone = false;
				}
			},
			testname(){
				let name = document.querySelector(".reg__ul__name input");
				// 用户名：4-16位字母、数字或汉字，请不要输入特殊字符！
				if (/^[\u2E80-\u9FFFa-zA-Z\d]{4,16}$/.test(name.value)) {
					this.bmess=false;
				    this.bname = true;
				} else {
					this.bmess=true;
				    this.mess = "用户名格式不正确";
				    this.bname = false;
				}
			},
			testpass(){
				let pass = document.querySelector(".reg__ul__pass input");
				if (/^[a-zA-Z\d]{6,20}$/.test(pass.value)) {
					this.bmess=false;
				    this.bpass = true;
				} else {
					this.bmess=true;
				    this.mess = "请输入6-20位的字母或数字";
				    this.bpass = false;
				}
			},
			testphonecode(){
				let telcode = document.querySelector(".reg__ul__telcode input");
				if (telcode.value == this.msgcode  ) {
					this.mess=false;
				    this.bphonecode = true;
				} else {
					this.bmess=true;
				    this.mess = "短信验证失败";
				    this.bphonecode = false;
				}
			},
			reg() {
				if(!this.bcode || !this.bphone || !this.bname || !this.bpass || !this.bphonecode){
					this.bmess=true;
					this.mess="请填入完整信息";
					return
				}
				let formData = new FormData();
				formData.append('username',this.username)
				formData.append('phonenumber',this.phonenumber)
				formData.append('password',this.password)
				let file=document.getElementById('file');
				formData.append('icon',file.files[0]);
				axios({
					url: '/api/reg',
					method: 'post',
					data: formData
				}).then(
					res => {
						if(res.data.err==0){
							// console.log(res.data);
							this.bleave = false; // 注册成功时不用后置守卫
							this.$router.push('/login'); // 跳转到登录页面
						}else{
							this.bmess=true
							this.mess=res.data.msg;
						}
					}
				)
			},
			sendcode(){
				axios({
					url: '/api/send-code',
					params: {tel:this.phonenumber}
				}).then(
					res => this.msgcode = res.data.code
					// res => console.log(res.data)
				)
			}
		},
		beforeRouteLeave (to, from, next) { //后置守卫 组件内部
		  // 导航离开该组件的对应路由时调用
		  // 可以访问组件实例 `this`
		  
			if(this.bleave){
				let path = '';
				switch(to.path) {
				    case '/home':
						path = '首页';
						break;
				    case '/login':
						path = '登录';
						break;
					case '/doc-list':
						path = '专家介绍';
						break;
					case '/doc-case':
						path = '医院案例';
						break;
					case '/dynamic':
						path = '医院动态';
						break;
					case '/discount':
						path = '医院优惠';
						break;
				    default:
				        path = '其它页面';
				} 
				let isTo = window.confirm(`您确定要去往${path}了吗?`)
				isTo ? next(true) : next(false)
			}else{
				next()
			}
		  
		},
		
	}
</script>

<style >
	.reg .reg__ul{
		margin:.1rem .1rem .18rem .1rem;
		padding:.08rem;
		background:#fff;
	}
	.reg .reg__ul li{
		
		display: flex;
		width: 100%;
		border-radius: .03rem;
		height: .38rem;
		line-height: .38rem;
		padding: 0 0.12rem;
		box-sizing: border-box;
		margin-bottom: .15rem;
		border: .01rem solid rgba(80,80,80,0.29);
		position: relative;
	}
	.reg .reg__ul li input{
		font-size: .14rem;
		width: 100%;
	}
	.reg .reg__ul li.reg__ul__telcode span{
		font-size: .14rem;
		position: absolute;
		z-index: 99;
		right: 0.1rem;
		top: 0;
		color: #2D8DB9;
		cursor: pointer;
	}
	.reg .reg__ul .reg__ul__mess{
		display: inline-block;
		color: #BF1001;
		font-weight: 700;
		/* text-align: center; */
		font-size: .14rem;
		border: 0;
	}
	.reg .reg__ul .reg__ul__file{
		border:0;
	}
	.reg .reg__ul .reg__ul__file h4{
		font-weight: 100;
		font-size: .14rem;
		color: #333;
		width: 1.2rem;
	}
	.reg .reg__ul .reg__ul__file input{
		margin-top:.06rem;
	}
</style>
