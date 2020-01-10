<template>
	<ul class="doc-nav">
		<li>
			<router-link to='/introduce' class="doc-nav__li__a" active-class="doc-nav__li__a--active">医院介绍</router-link>
			<router-link to='/doc-list' class="doc-nav__li__a middle" active-class="doc-nav__li__a--active">专家介绍</router-link>
			<router-link to='/discount' class="doc-nav__li__a" active-class="doc-nav__li__a--active">医院优惠</router-link>
		</li>
		<li>
			<router-link to='/dynamic' class="doc-nav__li__a" active-class="doc-nav__li__a--active">医院动态</router-link>
			<router-link to='/doc-case' class="doc-nav__li__a middle" active-class="doc-nav__li__a--active">医院案例</router-link>
			<router-link to='/route-line' class="doc-nav__li__a" active-class="doc-nav__li__a--active">乘车路线</router-link>
		</li>
	</ul>
</template>

<script>
	export default{
		name:'doc-nav',
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
	.doc-nav{
		height: 1rem;
		margin-bottom: .16rem;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.doc-nav li{
		/* border-right:.01rem solid #fff; */
		border-bottom:.01rem solid #fff;
		
	}
	.doc-nav li .doc-nav__li__a{
		display: inline-block;
		text-align: center;
		width: 1.25rem;
		height: .5rem;
		line-height: .5rem;
		color:#bf1001;
		background:#eee;
		font-weight: 700;
	}
	.doc-nav li .middle{
		width: 1.23rem;
		border-left:.01rem solid #fff;
		border-right:.01rem solid #fff;
	}
	.doc-nav li .doc-nav__li__a--active{
		background:#adadad;
		color:#fff;
	}
</style>
