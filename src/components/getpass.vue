<template>
	<section class="getpass">
		<router-link :to="url" tag="span">{{text}}</router-link>
		<a href="javascript:;">找回密码</a>
	</section>
</template>

<script>
	export default{
		name:'getpass',
		props:{
			text:{
				type:String,
				default:''
			},
			url:{
				type:String,
				default:''
			}
		},
		
		data(){return {
			
		}},
		components:{},
		mounted(){},
		updated(){},
		methods:{
		}
	}
</script>

<style scoped>
	.getpass{
		height: .22rem;
		padding:.1rem;
		color:#323232;
		display: flex;
		justify-content: space-between;
		font-size: .14rem;
	}
</style>
