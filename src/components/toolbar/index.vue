<template>
	<section class="footer foot-ser">
		<div class="footer-f"></div>
		<section class="foot-service">
			
			<div class="foot-service__kf"><i></i>客服</div>
			<div class="foot-service__phone">电话咨询</div>
			<div class="foot-service__reservation">立即预约</div>
		</section>
		
	</section>
</template>

<script>
	export default{
		name:'toolbar',
		data(){return {
		}},
		components:{},
		mounted(){},
		updated(){},
		methods:{}
		
	}
</script>

<style scoped>
	.footer-f{
		width:100%;
		height: .52rem;
	}
	.foot-service{
		width:100%;
		height: .32rem;
		line-height: .32rem;
		padding:.1rem 0;
		border-top:.01rem solid #dbdbdb;
		position: fixed;
		bottom: 0;
		left:0;
		z-index: 3;
		background: #ff6980;
		display: flex;
		color: #fff;
		text-align: center;
	}
	
	.foot-service .foot-service__kf{
		width: 25%;
		/* text-align: center; */
	}
	.foot-service .foot-service__kf i{
		display: inline-block;
		vertical-align: bottom;
		width: .24rem;
		height: .3rem;
		background: url(./assets/wx.png) no-repeat left center;
		background-size: .24rem;
		margin-right: .05rem;
		
	}
	.foot-service .foot-service__phone{
		width:35%;
		border: 1px solid #cfcfcf;
		border-radius: 3px;
		box-sizing: border-box;
		line-height: .3rem;
	}
	.foot-service .foot-service__reservation{
		width:35%;
		border: 1px solid #cfcfcf;
		box-sizing: border-box;
		border-radius: 3px;
		background-color: #fff;
		color: #c7180a;
		margin-left: .1rem;
	}
</style>
