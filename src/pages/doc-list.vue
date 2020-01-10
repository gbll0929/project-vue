<template>
	<section class="doc-list" >
		<router-link
			v-for="(item,index) of list"
			:key="item._id"
			:to="`/detail/${item._id}?dataName=home`"
		>
			<DoCell :isJump="false" :data="item" :index="index" />
		</router-link>
	</section>
	
</template>

<script>
	import DoCell from '../components/doc-cell.vue'
	let top=0;
	export default{
		name:'doc-list',
		data(){return {
			list:[],
		}},
		components:{
			DoCell
		},
		mounted(){
			this.$axios({
				url:'/api/home',
				params:{_page:1,_limit:2},
			}).then(
				res=>this.list = res.data.data
				// res=>console.log(res)
			);
			// console.log('mounted',top)
			document.documentElement.scrollTop=top;
		},
		updated(){},
		destroyed(){
			top=document.documentElement.scrollTop; 
			// console.log('destroyed',top)
		},
		methods:{}
		
	}
</script>

<style>
	.doc-list{
		margin:.08rem .08rem .18rem .08rem;
	}
</style>
