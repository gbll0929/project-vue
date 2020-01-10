<template>
  <div id="app">
	  <DocHeader v-show="this.$root.bDocHeader"/>
	  <Home/>
	  <Toolbar v-show="this.$root.bToolbar"></Toolbar>
	  
  </div>
</template>

<script>
	import DocHeader from './doc-header.vue';
	import Home from '../pages/home.vue';
	import Toolbar from '../components/toolbar'
	import Loading from '../components/loading'
	export default {
	  name: 'app',
	  data(){
	    return {
	      
	    }
	  },
	  components: {
		  DocHeader,
		  Toolbar,
		  Home
	  },
	  mounted(){
	  },
	  //路由监听|属性检测|数据观测
	  watch:{
	    $route:{
	      handler(nextValue,PrevValue){
	        // console.log('path变化',nextValue.path);
	        
	        let path = nextValue.path;//路由路径  
	        //修改集中式的数据
	        if(/login|reg/.test(path)){
				this.$root.bDocHeader=this.$root.bBanner=this.$root.bNav=this.$root.bCommentBody=
				this.$root.bToLogReg=this.$root.bQuickToDoc=this.$root.bGoTop=this.$root.bToolbar=false;
				this.$root.bCopyright=true;
	        }
			if(/detail|news/.test(path)){
				this.$root.bToLogReg=this.$root.bCopyright=this.$root.bQuickToDoc=
				this.$root.bGoTop=this.$root.bToolbar=true;
				this.$root.bBanner=this.$root.bNav=this.$root.bCommentBody=this.$root.bDocHeader=false;
			}
	        if(/home|doc-list|dynamic|discount|doc-case|route-line|introduce/.test(path)){
	          this.$root.bDocHeader=this.$root.bBanner=this.$root.bNav=this.$root.bCommentBody=
	          this.$root.bToLogReg=this.$root.bQuickToDoc=this.$root.bGoTop=this.$root.bToolbar=
			  this.$root.bCopyright=true;
	        }
	        if(path.includes('user')){this.$root.bDocHeader=this.$root.bBanner=this.$root.bNav=this.$root.bCommentBody=
	          this.$root.bToLogReg=this.$root.bQuickToDoc=this.$root.bGoTop=this.$root.bToolbar=false;
				this.$root.bCopyright=true;
	        }
			if(path.includes('comment')){
				this.$root.bDocHeader=this.$root.bBanner=this.$root.bNav=this.$root.bCommentBody=
			  this.$root.bToLogReg=this.$root.bQuickToDoc=this.$root.bGoTop=false;
				this.$root.bGoTop=this.$root.bCopyright=this.$root.bToolbar = true;
			}
	      },
	      immediate:true
	    }
	  },
	}
</script>

<style>
	#app {
	  
	}
</style>
