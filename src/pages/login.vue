<template>
	<div class="login">
		<GoBack data="登录"></GoBack>
		<ul class="login__ul">
			<li class="login__ul__tel"><input type="number" placeholder="请输入已验证的手机" v-model="phonenumber"></li>
			<li class="login__ul__pass"><input type="password" placeholder="请输入密码" v-model="password"></li>
			<li class="login__ul__mess" v-show="bmess">{{mess}}</li>
			<LogRegButton text="登录" @click.native="login"></LogRegButton>
			<div class="login__div">
				<div class="login__div__way">
					<em>您还可以用以下方式登录</em>
					<a class='login__div__way__xl' href="https://api.weibo.com/oauth2/authorize?client_id=455900001&redirect_uri=http%3A%2F%2Fm.51daifu.com%2Flogin.shtml%3Fsina%3Dsina&response_type=code"></a>
					<a class='login__div__way__qq' href="https://m.51daifu.com/qc/API/index.php"></a>
				</div>
			</div>
			<Getpass text="免费注册" url="/reg"/>
		</ul>
	</div>
	
</template>

<script>
	import GoBack from '../components/goback.vue'
	import LogRegButton from '../components/log-reg-button.vue'
	import Getpass from '../components/getpass.vue'
	export default{
		data(){return {
			phonenumber:'',
			password:'',
			mess:'',
			bmess:false
		}},
		components:{
			GoBack,
			LogRegButton,
			Getpass
		},
		mounted(){
		},
		updated(){},
		methods:{
			login() {
				let params = new URLSearchParams();
				params.append('phonenumber', this.phonenumber)
				params.append('password', this.password)
				axios({
					url: '/api/login',
					method: 'post',
					data: params
				}).then(
					res => {
					  if(res.data.err==0){
						//种token,跳转user
						// console.log(res.data)
						window.localStorage.setItem('token',res.data.token);
						this.$root.islog="log-reg"
						this.$router.push('/user')
						
					  }else{
						this.mess=res.data.msg
						this.bmess=true;
					  }
					}
				)
				
			}
		}
		
	}
</script>

<style>
	.login .login__ul{
		margin:.1rem .1rem .18rem .1rem;
		padding:.08rem;
		background:#fff;
	}
	.login .login__ul li{
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
	.login .login__ul li input{
		width: 100%;
	}
	.login .login__ul .login__div{
		padding:.1rem;
		
	}
	.login .login__ul .login__div__way{
		border-top: .01rem solid #ccc;
		text-align: center;
		padding: .2rem 0;
		margin-top: .08rem;
		position: relative;
	}
	.login .login__ul .login__div__way em{
		display: inline-block;
		background-color: #fff;
		padding: 0 .05rem;
		position: absolute;
		top: -.1rem;
		font-size: .13rem;
		margin-left: -.75rem;
		left: 50%;
	}
	.login .login__ul .login__div__way a{
		display: inline-block;
		vertical-align: middle;
		border: medium;
		width: .35rem;
		height: .35rem;
		background: url(../../public/images/login-way.png) no-repeat;
		background-size: .35rem 1.05rem;
	}
	.login .login__ul .login__div__way a.login__div__way__xl{
		background-position: left top;
	}
	.login .login__ul .login__div__way a.login__div__way__qq{
		background-position: left -.35rem;
		margin-left: .5rem;
	}
	.login .login__ul .login__ul__mess{
		display: inline-block;
		color: #BF1001;
		font-weight: 700;
		/* text-align: center; */
		font-size: .14rem;
		border: 0;
	}
</style>

