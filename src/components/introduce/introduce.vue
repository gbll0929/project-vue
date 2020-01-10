<template>
	<section class="introduce">
		<div class="introduce__content">
			<h2>上海拜尔口腔</h2>
			<p>拜博口腔医疗集团聘请了包括美国、英国、德国、韩国、香港等国内外众多口腔医生组建了学术委员会，组建了拜博口腔的现在医生团队。下设种植中心、矫正中心、美容修复中心、牙周及综合齿科治疗中心、牙齿根管治疗中心、儿童无痛特色诊疗中心、体检中心、培训中心、义齿加工中心、专业材料研发中心等机构，让顾客享受到安心的医疗服务。</p>
			<p>2014年6月获得联想控股10亿元投资，成为联想控股成员企业。执着梦想，恪守医道。拜博口腔以“厚德、进取、创新、奉献”为企业核心价值观，秉承对口腔健康医疗事业的热忱与坚持，坚守品牌承诺，立志为人类口腔健康作出贡献。</p>
			<p>在口腔医疗行业耕耘20余年，黎昌仁高瞻远瞩，眼光独到。胆识和谋略是他的名片。黎昌仁在企业的发展战略制定、运营管理、投资创业等方面拥有丰富的经验。黎昌仁带领着拜博口腔医疗集团阔步前进。</p>
			<p>1993年，黎昌仁从公立医院辞职，在深圳开启口腔医疗事业新篇章。他探索的“五心级”服务理念为拜博口腔赢得了顾客的喜爱和信赖。目前拜博口腔医疗集团的医疗机构分布于全国40余个一线和省会城市，全国的40余个事业部采用集中统一管控模式，在口腔行业独树一帜。</p>
			<p>拜博口腔的发展引来多家投资基金关注并达成战略合作，企业快速扩张，走上良性可持续发展的快车道。</p>
			<p>2005年抢滩上海，2013年挥师北京，黎昌仁带领企业完成了在国内一线重点城市设点的战略布局。在做强做优核心口腔业务的同时，拜博口腔继续向口腔产业链上下游延伸，以形成以口腔医疗为主业的上下游产业链完整、资产优良、多元布局的新兴口腔产业，打造成口腔服务行业的品牌。</p>
		</div>
		<a href="javascript:;" class="introduce__a">
			<span @click="more">{{type}}</span>
			<i :class="`${type === '收起' ? 'up' : 'down'}`"></i>
		</a>
	</section>
	
</template>

<script>
	export default{
		name:'introduce',
		data(){return {
			type:'展开',
		}},
		components:{},
		mounted(){},
		updated(){},
		methods:{
			more(){
				let con = document.querySelector('.introduce__content');
				if(this.type=='展开'){
					this.type = '收起';
					con.style.height = 'auto';
				}else{
					this.type = '展开';
					con.style.height = '4.4rem';
				}
			}
		}
		
	}
</script>

<style scoped>
	.introduce{
		padding:.1rem .1rem 0 .08rem;
		margin:.08rem .08rem .18rem .08rem;
		background:#fff;
	}
	.introduce .introduce__content{
		overflow: hidden;
		height: 4.4rem;
	}
	.introduce .introduce__content h2{
		height: .25rem;
		line-height: .25rem;
		font-weight: 100;
		font-size: .2rem;
	}
	.introduce .introduce__content p{
		text-indent: 2em;
		color:#323232;
		line-height: .3rem;
	}
	.introduce .introduce__a{
		display: block;
	    color: #c63d35;
		height: .4rem;
		line-height: .4rem;
		text-align: right;
	}
	.introduce .introduce__a span{
		margin-right: .1rem;
	}
	.introduce .introduce__a i{
		display: inline-block;
		width: .1rem;
		height: .15rem;
		/* background-size: .2rem .2rem; */
	}
	.introduce .introduce__a i.down{
		background:url(./assets/down.png) no-repeat center;
		background-size: .2rem .2rem;
	}
	.introduce .introduce__a i.up{
		background:url(./assets/up.png) no-repeat center;
		background-size: .2rem .2rem;
	}
</style>
