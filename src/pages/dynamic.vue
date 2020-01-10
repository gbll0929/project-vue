<template>
	<section class="dynamic">
		<router-link
			v-for="(item,index) of list"
			:key="item._id"
			:to="`/news/${item._id}?dataName=news`"
		>
			<NewsCell :isJump="false" :data="item" :index="index"/>
		</router-link>
	</section>
	
</template>

<script>
	import NewsCell from '../components/news-cell.vue'
	export default{
		data(){return {
			list:[]
		}},
		components:{
			NewsCell
		},
		mounted(){
			this.$axios({
				url:"/api/news",
				params:{
					_limit:3,
					_page:1
				}
			}).then(
				res=>this.list=res.data.data
			)
		},
		updated(){},
		methods:{}
		
	}
</script>

<style>
	.dynamic{
		background-color: #fff;
		margin: 0.09rem;
		margin-bottom: .18rem;
		box-shadow: 0 .02rem .02rem #e8e8e8;
	}
</style>
