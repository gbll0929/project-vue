<template>
	<div class="log-reg-button">
		<input type="button" class="log-reg-button__button" :value="text" 
		:style="{'background-color':bgColor}">
	</div>
</template>

<script>
  export default {
    data(){return {}},
    props:{
      text:{
        type:String,
        default:'按 钮'
      },
	  bgColor: {
	  	type: String,
	  	default: '#2d8db9'
	  },
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
	.log-reg-button input{
		display: inline-block;
		line-height: .37rem;
		/* background-color: #2d8db9; */
		color:#fff;
		border-radius: .03rem;
		text-align: center;
		font-size: .14rem;
		width: 100%;
	}
 
</style>
