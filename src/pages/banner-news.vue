<template>
	<section class="banner-news">
		<GoBack bgColor="#c7180a" fSize=".2rem" data="上海拜耳口腔"></GoBack>
		<section class="news-body">
			<img :src="$baseUrl + news.imgUrl" alt="">
			<p>
				{{news.content}}
			</p>
		</section>
	</section>
	
</template>

<script>
	import GoBack from '../components/goback.vue'
	export default{
		name:'banner-news',
		data(){return {
			news:{},
			// data:xinwen
		}},
		components:{
			GoBack
		},
		mounted(){
			this.$axios({
			  url: '/api/' + this.$route.query.dataName + '/' + this.$route.params._id,
			}).then(
			  res => this.news = res.data.data
			  // res => console.log(res.data)
			)
		},
		updated(){},
		methods:{}
		
	}
</script>

<style lang="scss" scoped="scoped">
	.banner-news{
		.news-body{
			img{
				width: 3.75rem;
				height: 2.76rem;
				display: block;
			}
			p{
				margin:.08rem;
				margin-bottom: .18rem;
				background:#fff;
				padding:.05rem .09rem .18rem .09rem;
				line-height: .3rem;
				text-indent: 2em;
			}
		}
	}
</style>

