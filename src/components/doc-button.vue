<template>
	<div class="doc-button">
		<a href="javascript:;">{{text}}</a>
	</div>
</template>

<script>
  export default {
    data(){return {}},
    props:{
      text:{
        type:String,
        default:'按 钮'
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
	.doc-button a{
		display: inline-block;
		line-height: .26rem;
		background-color: #ffa800;
		color:#fff;
		padding:.03rem .1rem;
		border-radius: .05rem;
		text-align: center;
		font-size: .14rem;
	}
 
</style>
