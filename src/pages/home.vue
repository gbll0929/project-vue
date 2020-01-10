<template>
	<div class="home">
		<Banner :data="banner" dataName="banner" v-show="this.$root.bBanner"/>
		<Nav v-show="this.$root.bNav"/>
		<comment-body :comments="comments" v-show="this.$root.bCommentBody"></comment-body>
		<QuickToDoc v-show="this.$root.bQuickToDoc"/>
		<GoTop v-show="this.$root.bGoTop"/>
		<router-view></router-view>
		<component :is="this.$root.islog" v-show="this.$root.bToLogReg"/></component>
		<Copyright v-show="this.$root.bCopyright"></Copyright>
		<Loading v-show="this.$root.bLoading"></Loading>
	</div>
	
</template>

<script>
	import Nav from '@/components/nav.vue'
	import Banner from '@/components/banner.vue'
	import CommentBody from '@/components/common-body.vue'
	import ToLogReg from '@/components/to-log-reg.vue';
	import LogReg from '@/components/log-reg.vue';
	import Copyright from '@/components/copyright.vue';
	import QuickToDoc from '@/components/quick-to-doc.vue';
	import GoTop from '@/components/gotop.vue';
	import Introuduce from '@/components/introduce/introduce.vue'
	import Loading from '@/components/loading'
	
	let top=0;
	export default{
		data(){return {
			banner:[],
			comments:[],
		}},
		components:{
			Introuduce,
			Nav,
			Banner,
			'comment-body':CommentBody,
			ToLogReg,
			LogReg,
			Copyright,
			QuickToDoc,
			GoTop,
			Loading
		},
		mounted(){
			
			document.documentElement.scrollTop=top;
			let token = window.localStorage.getItem('token');
			if(token){
				this.$root.islog="log-reg"
			}else{
				this.$root.islog="to-log-reg"
			}
		
			
			this.$axios({
				url:'/api/banner',
				params:{_page:1,_limit:6}
			}).then(
				res=>this.banner=res.data.data
			);
			
			axios({
				url: '/api/getcomments',
			}).then(
				res => {
					this.comments = res.data.data
					// console.log(this.comments)
				}
					
			);
		},
		watch:{
			$route(a,b){
				if(a.params.type == 1){
					axios({
						url: '/api/getcomments',
					}).then(
						res => {
							this.comments = res.data.data
						}
							
					);
				}
			}
		},
		// destroyed(){
		// 	top=document.documentElement.scrollTop;  
		// 	console.log("11111")
		// 	// console.log('destroyed',top);
		// },
		methods:{}
		
	}
</script>
	
<style>
	.home{}
	
</style>
