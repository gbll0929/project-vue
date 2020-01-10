<template>
	<section class="news">
		<GoBack bgColor="#c7180a" fSize=".2rem" :data="news.title"></GoBack>
		<section class="news-body">
			<div class="news-head">
				<div class="news-header__top">
					<b>{{news.time}}</b>
					<p>
						<em>来源:</em>
						<span>上海拜耳口腔</span>
					</p>
				</div>
				<div class="news-header__bottom">
					<img src="/images/news-h.jpg" alt="">
				</div>
			</div>
			<div class="news-content">
				<h3>{{news.title}}</h3>
				<div class="news-des" v-for="(item,index) of news.description" :key="index">{{item}}</div>
				<a v-show='news.imgUrl' href="javascript:;"><img :src="$baseUrl + news.imgUrl" alt=""></a>
				<div class="sub-content" v-for="(item,index) in news.content">
					<h4>{{item.stitle}}</h4>
					<p v-for="(val,ind) in item.scontent" :key="ind">{{val}}</p>
				</div>
			</div>
		</section>
	</section>
	
</template>

<script>
	import GoBack from '../components/goback.vue'
	export default{
		name:'news',
		data(){return {
			news:{},
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
	.news-body{
		background:#fff;
		margin:.08rem;
		margin-bottom: .18rem;
		.news-head{
			padding:.05rem .09rem .18rem .09rem;
			.news-header__top{
				display: flex;
				justify-content: space-between;
				line-height: .21rem;
				font-size: .14rem;
				b{
					color:#999;
				}
				p{
					em{
						color:#999;
						margin-right: .1rem;
					}
				}
			}
			.news-header__bottom{
				img{
					width: 3.4rem;
					height: .4rem;
					vertical-align: top;
				}
			}
		}
		.news-content{
			line-height: .4rem;
			padding:.05rem .09rem .18rem .09rem;
			h3{
				color: #E53333;
				text-align: center;
			}
			.news-des{
				text-indent: 2em;
			}
			a{
				display: block;
				img{
					display: block;
					width: 3.4rem;
					height: 3.3rem;
				}
			}
			.sub-content{
				h4{
					
				}
				p{
					text-indent: 2em;
					line-height: .6rem;
				}
			}
		}
	}
</style>

