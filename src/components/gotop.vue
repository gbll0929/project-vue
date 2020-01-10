<template>
	<section class="gotop" @click="toto" v-show="style">
		<img src="/images/totop.png" alt="">
	</section>
</template>

<script>
	export default{
		name:'Gotop',
		data(){return {
			style:false,
			scrollT:0
		}},
		components:{},
		mounted(){
			window.onscroll = ()=>{
				let scrollT = document.documentElement.scrollTop;
				this.scrollT = scrollT;
			}
		},
		updated(){},
		watch:{
			scrollT:{
				handler(nextValue,PrevValue){
					if(nextValue >= 500){
						this.style=true;
					}else{
						this.style=false;
					}
				},
				immediate:true
			}
			
		},
		methods:{
			toto(){
				let otop = document.querySelector(".totop");
				let t;
				clearInterval(t);
				t = setInterval(function(){
					if(document.documentElement.scrollTop <= 0){
						clearInterval(t);
					}else{
						document.documentElement.scrollTop -= 100;
					}
				}, 30);
			},
			
		},
	}
		
</script>

<style>
	.gotop{
		position:fixed;
		bottom:1rem;
		right: 0;
		z-index: 99;
	}
	.gotop img{		
		width: .4rem;
		height: .4rem;
	}
</style>
