<template>
	<div class="doc-cell" @click="getDetail">
		<div class="doc-cell__left">
			<img :src="$baseUrl + data.imgUrl" alt="">
		</div>
		<div class="doc-cell__right">
			<ul>
				<li class="doc-cell__right__first">
					<span>{{data.name}}</span>
					<DocButton text="咨询" class="bu"/>
					<DocButton text="预约" class="bu"/>
				</li>
				<li class="doc-cell__right__other">
					<span>职称：</span>
					<p>{{data.title}}</p>
				</li>
				<li class="doc-cell__right__other">
					<span>擅长：</span>
					<p>{{data.skill}}</p>
				</li>
			</ul>
		</div>
	</div>
	
</template>

<script>
	import DocButton from './doc-button.vue'
	export default{
		data(){return {}},
		props:{
		  data:{
		    type:Object,
		    default:function(){
		      return {}
		    }
		  },
		  dataName:{
		    type:String,
		    default:null
		  },
		  index:{
		    type:Number,
		    default:null
		  },
		  isJump:{
		    type:Boolean,
		    default:true
		  }
		},
		components:{
			DocButton
		},
		mounted(){},
		updated(){},
		methods:{
			getDetail(){
				this.isJump && this.$router.push('/detail/'+this.data._id+'?dataName='+this.dataName)
			}
		}
		
	}
</script>

<style>
	.doc-cell{
		padding:.13rem;
		font-size: .14rem;
		display: flex;
		background:#fff;
		border-bottom:.01rem solid #f5f5f5;
	}
	.doc-cell .doc-cell__left{
		margin-right: .1rem;
	}
	.doc-cell .doc-cell__left img{
		width: .85rem;
		height: .85rem;
	}
	.doc-cell .doc-cell__right{
		min-height: .65rem;
		flex:1;
	}
	.doc-cell .doc-cell__right ul li{
		display: flex;
		line-height: .22rem; 
		width:100%;
		color:#323232;
	}
	.doc-cell .doc-cell__right ul li.doc-cell__right__first{
		line-height: .32rem;
	}
	
	.doc-cell .doc-cell__right ul li.doc-cell__right__first span{
		width: 50%;
	}
	.doc-cell .doc-cell__right ul li.doc-cell__right__first .bu{
		width: 25%;
		margin-right: .03rem;
	}
	.doc-cell .doc-cell__right ul li.doc-cell__right__other{
		padding:.04rem 0;
		margin-top:.04rem;
	}
	.doc-cell .doc-cell__right ul li.doc-cell__right__other span{
		width:.5rem;
		display:block;
	}
	.doc-cell .doc-cell__right ul li.doc-cell__right__other p{
		color:#999;
		flex:1;
	}
</style>
