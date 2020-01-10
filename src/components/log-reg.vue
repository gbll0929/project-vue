<template>
	<footer>
		<section class="footer__status">
			<div>
				{{data.username}}
				<span>|</span>
				<a href="javascript:;" @click="logout">退出</a>
				<span>|</span>
			</div><!-- 
			<div class="reg-log" v-else>
				<router-link to='/login' class="log">登录</router-link>
				<span>|</span>
				<router-link to='/reg' class="reg">注册</router-link>
				<span>|</span>
				
			</div> -->
			<div class="user">
				<router-link to='/user' class="user">我的</router-link>
			</div>
		</section>
	</footer>
</template>

<script>
	export default{
		name:'to-log-reg',
		data(){return {
			data:{},
		}},
		components:{},
		mounted(){
			this.token = window.localStorage.getItem('token');
			if (this.token) {
				axios({
					url: '/api/user',
					headers: {
						'token': this.token
					}
				}).then(
					res=>this.data = res.data.data
				)
			}
		},
		updated(){},
		methods:{
			logout() {
				if(this.token){
					window.localStorage.removeItem('token')
					this.$root.islog = "to-log-reg"
					this.$router.push('/login')
				}
			}
		}
		
	}
</script>

<style>
	footer{}
	footer .footer__status{
		padding: 0 .1rem;
		height: .49rem;
		line-height: .49rem;
		color: #1d70c6;
		background:#fff;
		display: flex;
	}
	footer .footer__status .reg,.log,.user{
		color: #1d70c6;
		cursor: pointer;
	}
	footer .footer__status span{
		margin:0 .1rem;
	}
</style>
