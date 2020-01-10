<template>
	<div class="news-cell" @click="getNew">
		<strong class="news__cell__strong">.</strong>
		<p class="news__cell__p">{{data.title}}</p>
		<span class="news__cell__span">{{data.time}}</span>
	</div>
</template>

<script>
	export default{
		name:"news-cell",
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
		},
		mounted(){},
		updated(){},
		methods:{
			getNew(){
				this.isJump && this.$router.push('/news/'+this.data._id+'?dataName='+this.dataName)
			}
		}
		
	}
</script>

<style lang="scss" scoped="scoped">
	.news-cell{
		line-height: .4rem;
		padding:0 .05rem;
		color: #000;
		overflow: hidden;
		.news__cell__strong{
			margin-right: .05rem;
			font-weight: 700;
			float: left;
		}
		.news__cell__p{
			width: 2.4rem;
			white-space:nowrap;
			overflow:hidden;
			text-overflow:ellipsis;
			float: left;
		}
		.news__cell__span{
			float:right;
		}
	}
</style>
