<template>
	<section class="goback" 
	:style="{
		'background':bgColor,
		'font-size':fSize
	}"
	@click="goback">
		<i></i>
		<span>{{data}}</span>
		<!-- <router-link to="/home" class="gohome"> -->
			<!-- <ToHome /> -->
			<ToHome class="gohome" @click.stop.native="gohome"/>
		<!-- </router-link> -->
	</section>
</template>

<script>
	import ToHome from './tohome.vue';
	export default{
		name:'goback',
		props:{
			data:{
				type:String,
				default:''
			},
			bgColor: {
				type: String,
				default: '#2d8db9'
			},
			fSize: {
				type: String,
				default: '.16rem'
			},
		},
		data(){return {
			
		}},
		components:{
			ToHome
		},
		mounted(){},
		updated(){},
		methods:{
			goback(){
			  this.$router.go(-1)
			},
			gohome(){
				this.$router.push("/home")
			}
		}
	}
</script>

<style>
	.goback{
		height: .48rem;
		line-height: .48rem;
		padding:.06rem .1rem;
		text-align: center;
		background-color: #2d8db9;
		position:relative;
	}
	.goback i{
		display: inline-block;
		background:url(../../public/images/left.png) no-repeat center;
		width: .24rem;
		height: .24rem;
		background-size: .24rem .24rem;
		position:absolute;
		left: .1rem;
		top:.3rem;  /* 计算包括padding的一半 */
		transform: translateY(-50%);
	}
	.goback span{
		/* font-size: .16rem; */
		display: inline-block;
		color:#fff;
		width: 2.6rem;
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
	}
	.goback .gohome{
		position: absolute;
		top:.3rem;
		transform: translateY(-50%);
		right: .2rem;
	}
</style>
