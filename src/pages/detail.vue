<template>
	<section class="detail">
		<GoBack bgColor="#c7180a" fSize=".2rem" :data="detail.name"></GoBack>
		<div class="detail__header">
			<span>
				<img :src="$baseUrl + detail.imgUrl" alt="">
			</span>
			<p>{{detail.name}}</p>
			<p>{{detail.title}}</p>
		</div>
		<div class="detail__list">
			<ul>
				<li>所在地区：上海市黄浦区西藏中路18号港陆广场5F-6F </li>
				<li>职称：{{detail.title}}</li>
				<li>擅长：{{detail.skill}}</li>
				<li class="last"><DocButton text="与专家对话"/></li>
			</ul>
		</div>
		<div class="detail__into">
			<h3>医生简介</h3>
			<p>{{detail.description}}</p>
		</div>
	</section>
	
</template>

<script>
	import GoBack from '../components/goback.vue'
	import DocButton from '../components/doc-button.vue'
	export default{
		name:'detail',
		data(){return {
			detail:{},
		}},
		components:{
			DocButton,GoBack
		},
		mounted(){
			this.$axios({
			  url: '/api/' + this.$route.query.dataName + '/' + this.$route.params._id,
			}).then(
			  res => this.detail = res.data.data
			  // res => console.log(res)
			)
		},
		updated(){},
		methods:{},
		
	}
</script>

<style>
	.detail{}
	.detail .detail__header{
		padding:.18rem 0;
		text-align: center;
		background-color: #414044;
	}
	.detail .detail__header span{
		display: inline-block;
		width: 1.12rem;
		height: 1.12rem;
		border-radius: 50%;
		border-width: 0.3em;
		border-style: solid;
		overflow: hidden;
		border-color: #414044 #ffba00 #ffba00 #ffba00;
		/* transform: rotate(15deg); */
	}
	.detail .detail__header span img{
		width:100%;
	}
	.detail .detail__header p{
		color: #fff;
	}
	.detail .detail__list{
		margin:.08rem .08rem .17rem .08rem;
		background-color: #fff;
		box-shadow: 0 .02rem .02rem #e8e8e8;
	}
	.detail .detail__list li{
		padding:0 .16rem;
		border-bottom:.02rem solid #e9fffe;
		line-height: .46rem;
		
	}
	.detail .detail__list li.last{
		text-align: center;
		border-bottom: none;
	}
	.detail .detail__into{
		margin:.08rem .08rem .17rem .08rem;
	}
	.detail .detail__into h3{
		padding-left: .1rem;
		background-color: #ebebeb;
		color: #ff6980;
		line-height: .4rem;
	}
	.detail .detail__into p{
		padding:.09rem .13rem;
		text-indent: 2em;
		text-decoration: underline;
		background:#fff;
		line-height: .24rem;
		color:#323232;
	}
</style>

