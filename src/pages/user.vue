<template>
	<div class="user">
		<h3 class="user__h3">
			个人中心
			<router-link to="/home" class="tohome">
				<ToHome class="tohome"/>
			</router-link>
		</h3>
		<h4 class="user__h4"><img :src="$baseUrl + data.icon" alt="" /><p>用户名：<b>{{data.username}}</b></p></h4>
		<section class="user__section">
			<ul class="user__section__ul">
				<li><i class="user__ul__i1"></i><span>预约挂号</span></li>
				<li><i class="user__ul__i2"></i><span>主治医生</span></li>
				<li><i class="user__ul__i3"></i><span>健康状况</span></li>
				<li><i class="user__ul__i4"></i><span>就诊记录</span></li>
				<li class="last"><i class="user__ul__i5"></i><span>修改密码</span></li>
			</ul>
			<div class="user__section__logout">
				<input type="button" value="退出登录" @click="logout">
			</div>
		</section>
	</div>
	
</template>

<script>
	import ToHome from '@/components/tohome.vue';
	export default{
		data(){return {
			data:{}
		}},
		components:{
			ToHome
		},
		mounted(){},
		updated(){},
		beforeRouteEnter(to, from, next) {
		  // 条件异步
		  // 抓取token
			let token = window.localStorage.getItem('token');
			if (token) {
				axios({
					url: '/api/user',
					headers: {
						'token': token
					}
				}).then(
					res => res.data.err == 0 ? next(_this=>_this.data=res.data.data) : next('/login')
					// res => console.log(res.data)
				)
			} else {
				next('/login')
			}
		},
		methods:{
			logout() {
				window.localStorage.removeItem('token')
				this.$router.islog = "to-log-reg"
				this.$router.push('/home')
			}
		}
		
	}
</script>

<style lang="scss" scoped="scoped">
	.user{
		.user__h3{
			background-color: #09759e;
			line-height: .5rem;
			height: .5rem;
			padding:.06rem .1rem;
			text-align: center;
			color: #FFF;
			font-weight: 100;
			box-sizing: border-box;
			position:relative;
			.tohome{
				position: absolute;
				top:.19rem;
				transform: translateY(-50%);
				// bottom: 0rem;
				right: .1rem;
			}
		}
		.user__h4{
			padding:.1rem .2rem;
			line-height: .5rem;
			background:#fff;
			font-weight: 100;
			img{
				width:.5rem;
				height: .5rem;
				vertical-align:bottom;
				margin-right: .2rem;
				border-radius: .25rem;
			}
			p{
				display: inline-block;
				padding-top: .1rem;
				b{
					display: inline-block;
					margin-left: .1rem;
					color:#FFA800;
					// font-weight: 700;
					font-size: .22rem;
				}
			}
		}
		.user__section{
			margin-top:.1rem;
			background:#fff;
			.user__section__ul{
				border-bottom: .01rem solid #eee;
				box-sizing: border-box;
				.last{
					border-bottom: medium;
				}
				li{
					line-height: .6rem;
					height: .6rem;
					padding: 0 .1rem;
					position: relative;
					border-bottom: .01rem solid #eaeaea;
					margin-left: .6rem;
					font-size: .14rem;
					i{
						display: inline-block;
						position: absolute;
						left: -.5rem;
						top: 50%;
						transform: translateY(-50%);
						width: .4rem;
						height: .4rem;
						background: url(../../public/images/p-icon.gif) no-repeat;
						background-size: .4rem 2rem;
						background-position: left top;
						vertical-align: middle;
					}
					.user__ul__i2{
						background-position: left -.4rem;
					}
					.user__ul__i3{
						background-position: left -.8rem;
					}
					.user__ul__i4{
						background-position: left -1.2rem;
					}
					.user__ul__i5{
						background-position: left -1.6rem;
					}
				}
			}
			.user__section__logout{
				text-align: center;
				input{
					margin: .15rem 0;
					background-color: #3399cc;
					color: #fff;
					font-size: .18rem;
					width: 1.8rem;
					line-height: .35rem;
					text-align: center;
					border-radius: .03rem;
					letter-spacing: .02rem;
					
				}
				
			}
		}
		
	}
</style>
