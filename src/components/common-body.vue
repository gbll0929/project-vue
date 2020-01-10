<template>
	<section class="common-body">
		<ul class="common-body__ul">
			<li class="common-body__ul__li"><em>资质</em>国营医院</li>
			<li class="common-body__ul__li phone">
				<img src="/images/phone.png" alt="">
				<a href="javascript:;">
					4000937795
					<span>(点击拨打)</span>
				</a>
			</li>
			<li class="common-body__ul__li">
				<i class="tel"></i>
				 电话：暂缺
			</li>
			<li class="common-body__ul__li">
				<i class="position"></i>
				上海市黄浦区西藏中路18号港陆广场5F-6F 
			</li>
			<li class="common-body__ul__li zixun"><DocButton text='咨询'></DocButton></li>
		</ul>
		<h3 class="common-body__h3">
			<s>评价</s>用户对<b>上海拜耳口腔</b>的主观评价
		</h3>
		<h4 class="common-body__h4">
			总评价：
			<p v-for="(i,index) in list" :key="index">
			  <img :src="totalcomment>index?stara:starb"/>
			</p>
			<span>(<em>{{this.comments.length}}</em>网友评价)</span>
		</h4>
		<div class="comment-body__show">
			<div class="comment-body__show__left">
				<ul>
					<li>
						<span>医疗效果</span>
						<p><b class="operation"></b></p>
					</li>
					<li>
						<span>术前服务</span>
						<p><b class="beforeope"></b></p>
					</li>
					<li>
						<span>就医环境</span>
						<p><b class="environment"></b></p>
					</li>
					<li>
						<span>性价对比</span>
						<p><b class="price"></b></p>
					</li>
				</ul>
			</div>
			<div class="comment-body__show__right">
				<DocButton text='写评价' @click.native="gocomment"></DocButton>
			</div>
		</div>
	</section>
</template>

<script>
	import DocButton from './doc-button.vue'
	export default{
		name:'common-body',
		data(){
			return {
				// comments:[],
				operation:0,
				beforeope:0,
				environment:0,
				price:0,
				totalcomment:0,
				stara:'/images/star-active.png',//亮星星
				starb:'/images/star.png',//暗星星
				list:[0,1,2,3,4],
			}
		},
		props:{
			comments:{
				type:Array,
			}
		},
		components:{
			DocButton
		},
		mounted(){
			// let params = new URLSearchParams();
			// axios({
			// 	url: '/api/getcomments',
			// }).then(
			// 	res => {
			// 		this.comments = res.data.data
			// 		// res => console.log(res.data.data)
			// 		// console.log(this.comments)
			// 		this.comments.forEach((val,ind,self)=>{
			// 			this.operation += Number(val.operation);
			// 			this.beforeope += Number(val.before);
			// 			this.environment += Number(val.environment);
			// 			this.price += Number(val.price);
			// 		})
			// 	}
					
			// );
			console.log(this.comments)
			console.log(1111)
			this.comments.forEach((val,ind,self)=>{
				this.operation += Number(val.operation);
				this.beforeope += Number(val.before);
				this.environment += Number(val.environment);
				this.price += Number(val.price);
			})
			console.log(this.operation)
			// let oper = document.querySelector(".operation");
			// let be = document.querySelector(".beforeope");
			// let env = document.querySelector(".environment");
			// let pri = document.querySelector(".price");
			let len = this.comments.length*5;
			// oper.style.width = this.operation/len*1.2 +"rem";
			// be.style.width = this.beforeope/len*1.2 +"rem";
			// env.style.width = this.environment/len*1.2 +"rem";
			// pri.style.width = this.price/len*1.2 +"rem";
			this.totalcomment = Math.floor((this.operation+this.beforeope+this.environment+this.price)/(len*4)*5);
			// console.log(this.totalcomment)
		},
		updated(){
			// console.log(this.comments)
			// this.comments.forEach((val,ind,self)=>{
			// 	this.operation += Number(val.operation);
			// 	this.beforeope += Number(val.before);
			// 	this.environment += Number(val.environment);
			// 	this.price += Number(val.price);
			// })
			let oper = document.querySelector(".operation");
			let be = document.querySelector(".beforeope");
			let env = document.querySelector(".environment");
			let pri = document.querySelector(".price");
			let len = this.comments.length*5;
			oper.style.width = this.operation/len*1.2 +"rem";
			be.style.width = this.beforeope/len*1.2 +"rem";
			env.style.width = this.environment/len*1.2 +"rem";
			pri.style.width = this.price/len*1.2 +"rem";
			this.totalcomment = Math.floor((this.operation+this.beforeope+this.environment+this.price)/(len*4)*5);
			
		},
		methods:{
			gocomment(){
				this.$router.push('/comment')
			}
		},
	}
</script>

<style scoped>
	.common-body{
		margin:.08rem .08rem .18rem .08rem;
	}
	.common-body .common-body__ul{
		background-color: #fff;
	}
	.common-body .common-body__ul .common-body__ul__li{
		padding:0 .16rem;
		border-bottom: 2px solid #e9fffe;
		line-height: .45rem;
	}
	.common-body .common-body__ul .common-body__ul__li em{
		font-size:.14rem;
		font-style: normal;
		margin-right:.13rem;
		background:#ffa800;
		padding:0 .08rem;
		color:#fff;
		line-height: .45rem;
	}
	.common-body .common-body__ul .common-body__ul__li.phone img{
		width: .4rem;
		height: .4rem;
		vertical-align: middle;
		margin-right:.13rem;
	}
	.common-body .common-body__ul .common-body__ul__li.phone a{
		color:#000;
	}
	.common-body .common-body__ul .common-body__ul__li.phone a span{
		color:#ff6980;
	}
	.common-body .common-body__ul .common-body__ul__li i{
		display: inline-block;
		vertical-align: middle;
		margin-right: .16rem;
		width: .25rem;
		height: .25rem;
		
	}
	.common-body .common-body__ul .common-body__ul__li i.tel{
		background: url(../../public/images/tel.png) no-repeat center;
		background-size: .25rem .25rem;
	}
	.common-body .common-body__ul .common-body__ul__li i.position{
		background: url(../../public/images/position.png) no-repeat center;
		background-size: .25rem .25rem;
	}
	.common-body .common-body__ul .common-body__ul__li.zixun{
		text-align:center;
	}
	/* .common-body .common-body__ul .common-body__ul__li.zixun a{
		padding:.05rem .1rem;
		background-color: #ffa800;
		border-radius: .05rem;
		color: #fff;
	} */
	.common-body__h3{
		height:.44rem;
		line-height: .44rem;
		font-size: .14rem;
		font-weight: 100;
		background:#ebebeb;
		padding:0 .09rem;
		font-size: .18rem;
		font-weight: 100;
	}
	.common-body__h3 s{
		color: #1d70c6;
		margin-right: .03rem;
	}
	.common-body__h3 b{
		color: #ff6980;
		margin:0 .03rem;
	}
	.common-body__h4{
		height: .44rem;
		line-height: .44rem;
		padding:.05rem 0 .05rem .1rem;
		background:#fff;
		display: flex;
	}
	.common-body__h4 p img{
		width: .28rem;
		height: .28rem;
		vertical-align: middle;
	}
	.common-body__h4 span{
		color:#999;
		font-size: .14rem;
	}
	.common-body__h4 span em{
		color:#ff6980;
		margin:0 .1rem;
	}
	

	.comment-body__show{
		border-top: 2px solid #E9FFFE;
		background:#fff;
		display: flex;
	}
	.comment-body__show .comment-body__show__left{
		padding:0 .09rem 0 .09rem;
		width: 2.1rem;
		font-size: .14rem;
		
	}
	.comment-body__show .comment-body__show__left ul{
		
	}
	.comment-body__show .comment-body__show__left ul li{
		margin:.14rem 0;
		height: .21rem;
		display: flex;
	}
	.comment-body__show .comment-body__show__left ul li p{
		margin:.05rem .07rem 0 .07rem;
		width: 1.2rem;
		height: .12rem;
		background:#ddd;
		position:relative;
	}
	.comment-body__show .comment-body__show__left ul li p b{
		display: inline-block;
		background:#ff7800;
		width: 75%;
		height: .12rem;
		position: absolute;
		top:0;
		left:0;
	}
	.comment-body__show .comment-body__show__right{
		padding:.42rem .08rem 0;
		border-left:2px solid #E9FFFE;
	}
	.comment-body__show .comment-body__show__right a{
		display: inline-block;
		width: .42rem;
		height: .26rem;
		line-height: .26rem;
		background-color: #ffa800;
		color:#fff;
		padding:0 .08rem;
		border-radius: .03rem;
		text-align: center;
		font-size: .14rem;
	}
</style>
