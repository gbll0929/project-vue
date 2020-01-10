<template>
	<div class="doc-header" @click="tohome">
		<h3>上海拜耳口腔</h3>
	</div>
</template>

<script>
	export default{
		name:'doc-header',
		data(){return {}},
		components:{},
		mounted(){},
		updated(){},
		methods:{
			tohome(){
				this.$router.push('/home')
			}
		}
		
	}
</script>

<style>
	.doc-header{
		height: .5rem;
		line-height: .5rem;
		font-size: .2rem;
		text-align:center;
		background-color: #c7180a;
		color: #fff;
		}
	.doc-header h3{
		font-weight: 100;
	}
</style>
