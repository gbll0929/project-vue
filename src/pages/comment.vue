<template>
	<div class="comment">
		<GoBack bgColor="#c7180a" fSize=".2rem" data="评价"></GoBack>
		<div class="comment-tips">重要提示：请您一定在手术恢复期后再进行评价，这样评价的结果才能比较客观.</div>
		<section class="comment-body">
			<ul>
				<li>
					<span>手术效果:</span>
					<div class="StarsWrap">
						<p v-for="(i,index) in list" :key="index" @click="clickStars(index)">
						  <img :src="xing>index?stara:starb"/>
						</p>
					</div>
				</li>
				<li>
					<span>术前服务:</span>
					<div class="StarsWrap">
						<p v-for="(i,index) in list" :key="index" @click="clickStars1(index)">
						  <img :src="xing1>index?stara:starb"/>
						</p>
					</div>
				</li>
				<li>
					<span>就医环境:</span>
					<div class="StarsWrap">
						<p v-for="(i,index) in list" :key="index" @click="clickStars2(index)">
						  <img :src="xing2>index?stara:starb"/>
						</p>
					</div>
				</li>
				<li>
					<span>性价对比:</span>
					<div class="StarsWrap">
						<p v-for="(i,index) in list" :key="index" @click="clickStars3(index)">
						  <img :src="xing3>index?stara:starb"/>
						</p>
					</div>
				</li>
			</ul>
			<ol>
				<li>
					<span>服务项目</span>
					<input type="text" v-model="service">
				</li>
				<li>
					<span>项目花费</span>
					<input type="text" v-model="pay">
				</li>
				<li class="last">
					<span>评价医院</span>
					<textarea v-model="docComment"></textarea>
				</li>
			</ol>
			<LogRegButton text="提交" @click.native="comment" bgColor="#ffa800"></LogRegButton>
			<div v-show="bmess">231324{{mess}}</div>
			
		</section>
		<div class="userinfo">
			<b>{{data.username}}</b>
			<span>|</span>
			<em @click="logout">退出</em>
		</div>
	</div>
</template>

<script>
	import GoBack from '../components/goback.vue'
	import LogRegButton from '../components/log-reg-button.vue'
	export default{
		data(){return {
			stara:'/images/star-active.png',//亮星星
			list:[0,1,2,3,4],
			starb:'/images/star.png',//暗星星
			xing:0,
			xing1:0,
			xing2:0,
			xing3:0,
			data:{},
			service:"",
			pay:"",
			docComment:"",
			mess:"",
			bmess:false
		}},
		components:{
			GoBack,LogRegButton
		},
		mounted(){
		},
		updated(){
		},
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
			clickStars(i){
				this.xing = i+1
			},
			clickStars1(i){
				this.xing1 = i+1
			},
			clickStars2(i){
				this.xing2 = i+1
			},
			clickStars3(i){
				this.xing3 = i+1
			},
			logout() {
				window.localStorage.removeItem('token')
				this.$router.push('/home')
			},
			comment() {
				// console.log(this.xing,this.xing1,this.xing2,this.xing3)
				let formData = new FormData();
				formData.append('username',this.data.username)
				formData.append('operation',this.xing)
				formData.append('before',this.xing1)
				formData.append('environment',this.xing2)
				formData.append('price',this.xing3)
				formData.append('service',this.service)
				formData.append('pay',this.pay)
				formData.append('docComment',this.docComment)
				axios({
					url: '/api/comment',
					method: 'post',
					data: formData
				}).then(
					res => {
						if(res.data.err==0){
							// console.log(res.data);
							this.$root.islog="log-reg"
							this.$router.push({
								name:"home",
								params:{
									type:1
								}
								}); // 跳转到登录页面
						}else{
							this.bmess=true
							this.mess=res.data.msg;
						}
					}
				);
			},
		},
		
	}
</script>

<style lang="scss" scoped="scoped">
	.comment{
		.comment-tips{
			background-color: #fdf4e2;
			text-align: center;
			padding:0 .09rem;
			line-height: .3rem;
			color: #999;
		}
		.comment-body{
			padding:.13rem .1rem .16rem .1rem;
			margin:.1rem;
			margin-bottom: .2rem;
			background:#fff;
			ul{
				li{
					display: flex;
					line-height: .32rem;
					margin-bottom: .15rem;
					span{
						margin-right: .1rem;
						width: .8rem;
					}
					.StarsWrap{
						flex: 1;
						p{
							float: left;
							img{
								width: .28rem;
								height: .28rem;
							}
						}
					}
					
				}
			}
			ol{
				li{
					display: flex;
					margin-bottom: .15rem;
					line-height: .32rem;
					span{
						margin-right: .1rem;
						width: .8rem;
					}
					input{
						border:.01rem solid #999;
						height:.28rem;
						padding:.05rem;
						flex: 1;
					}
					textarea{
						border:.01rem solid #999;
						height:1.1rem;
						padding:.05rem;
						flex: 1;
						resize: none;
					}
				}
			}
		}
		.userinfo{
			font-size: .18rem;
			height: .3rem;
			padding:.1rem;
			background:#fff;
			color: #1d70c6;
			line-height: .3rem;
			span{
				margin: 0 .1rem;
			}
		}
	}
</style>
