<template>
	<swiper :options="swiperOption"  ref="mySwiper">
	    <!-- <swiper-slide><img src="/images/banner1.png" alt=""></swiper-slide>
	    <swiper-slide><img src="/images/banner2.jpg" alt=""></swiper-slide>
	    <swiper-slide><img src="/images/banner3.jpg" alt=""></swiper-slide>
	    <swiper-slide><img src="/images/banner4.jpg" alt=""></swiper-slide>
	    <swiper-slide><img src="/images/banner5.jpg" alt=""></swiper-slide> -->
		<swiper-slide v-for="(item) of this.data" :key="item._id">
			<router-link
			  :to="{path:'/banner-news/'+item._id+'?dataName='+dataName}"
			  tag="img" :src="$baseUrl + item.imgUrl" alt=""
			>
		    </router-link>
		</swiper-slide>
		
		
		
		<!-- 分页 -->
		<div class="swiper-pagination"  slot="pagination"></div>
		
	</swiper>
</template>

<script>
	// require styles
	import 'swiper/dist/css/swiper.css';
	
	export default{
		name:'banner',
		props:['data','dataName'],
		data(){return {
			swiperOption: {
				pagination:{
					el:'.swiper-pagination',  // 分页
					clickable:true, // 是否点击跳转
				},
				speed:1000, // 速度
				//自动播放
				autoplay: {
					delay: 1500, // 每张banner间隔的时间
				},
				// autoplayDisableOnInteraction : false, // 
				loop : true, // 是否循环播放
				grabCursor: true,// 小手掌抓取滑动
			},
		}},
		components:{},
		mounted(){
		},
		updated(){},
		computed:{
		},
		methods:{
		}
		
	}
</script>

<style>
	.swiper-wrapper .swiper-slide img{
		width: 3.75rem;
		height: 2.76rem;
		display: block;
	}
</style>
