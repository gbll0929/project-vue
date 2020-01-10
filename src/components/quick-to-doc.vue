<template>
	<section class="quicktodoc"></section>
</template>

<script>
	export default{
		name:'quicktodoc',
		data(){
			return {}
		},
		components:{},
		mounted(){},
		updated(){},
		methods:{}
	}
</script>

<style>
	.quicktodoc{
		position: fixed;
		left: 0;
		top: 50%;
		z-index: 100001;
		display: block;
		margin-top: -.3rem;
		width: .6rem;
		height: .6rem;
		background: url(../../public/images/quicktodoc.png) no-repeat center;
	}
</style>
