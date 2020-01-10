<template>
	<div class="route-line">
		<div id="map"></div>
		<div class="route-line__start">
			<span>起点：</span><input type="text" placeholder="起始点" v-model="start">
		</div>
		<div class="route-line__end">
			<span>终点：</span><input type="text" placeholder="终点" v-model="end">
		</div>
		<div class="route-line__route">
			<input class="btn" type="button" value="步行路线" @click="walkingRoute">
		</div>
		
	</div>
	
</template>

<script>
	export default{
		data(){return {
			start:'',
			end:'上海拜尔口腔',
			// routePolicy:[BMAP_DRIVING_POLICY_LEAST_TIME,BMAP_DRIVING_POLICY_LEAST_DISTANCE,BMAP_DRIVING_POLICY_AVOID_HIGHWAYS],
		}},
		components:{},
		mounted(){
			// 百度地图API功能
			this.map = new BMap.Map("map");
			this.point = new BMap.Point(121.4654321100,31.1923957800);
			//添加窗口监听
			window.onresize=this.checkPosition;
			
			this.map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
			this.map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
			
			this.checkPosition()
		},
		updated(){},
		methods:{
			checkPosition(){
				// 初始化地图，设置中心点坐标和地图级别 
				this.map.centerAndZoom(this.point, 15);
				this.addMarker()
			},
			addMarker(){
				let marker = new BMap.Marker(this.point);  // 创建标注
				this.map.addOverlay(marker);               // 将标注添加到地图中
				marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
			},
			// drivingRoute(){
			//   this.map.clearOverlays();//清除所有覆盖物
			//   this.addMarker();
			//   var driving = new BMap.DrivingRoute(this.map, {renderOptions:{map: this.map, autoViewport: true},policy: this.routePolicy[2]});
			//   driving.search(this.start,this.end);
			// },
			walkingRoute(){
			  this.map.clearOverlays();//清除所有覆盖物
			  var walking = new BMap.WalkingRoute(this.map, {renderOptions:{map: this.map, autoViewport: true}});
			  walking.search(this.start, this.end);
			}
		}
		
	}
</script>

<style scoped>
	.route-line{
		margin:0.1rem .08rem;
		margin-bottom: .18rem;
		background:#fff;
		line-height: .45rem;
		padding:0 .09rem;
		overflow: hidden;
	}
	#map{
		margin:.1rem 0;
		/* padding:.2rem 0; */
		height: 3rem;
	}
	input[type='text']{
		border:.01rem solid #999;
		line-height: .3rem;
		height:.3rem;
		padding:0 .05rem;
		width: 100%;
		flex: 1;
	}
	input[type="button"]{
		border:0;
		background:#0077AA;
		border-radius: .15rem;
		line-height: .3rem;
		padding:0 0.2rem;
		color: #fff;
		margin:.1rem 0;
	}
	span{
		display:inline-block;
		width: .6rem;
	}
	.route-line__start{
		display: flex;
		margin:.1rem 0;
	}
	.route-line__end{
		display: flex;
		margin:.1rem 0; 
	}
	.route-line__route{
		text-align: center;
		margin:.1rem 0;
	}
	
</style>
