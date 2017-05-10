<template>
	<div class="contact">
	  	<div id="container"></div>
		<div class="location">
		    <h2>上海百事通信息技术股份有限公司</h2>
		    <div class="location-item">
		    	<div class="location-info clearfix" @click="showMap(121.407585, 31.176521, 1)">
			    	<div class="location-icon">
			    		<img src="/images/home1.png">
			    	</div>
			    	<div class="location-content">
				        <h3>上海总部</h3>
				        <p>徐汇区宜山路1009号18楼</p>
			        </div>
		        </div>        
				<div class="contact-way" v-show="showNumber && locationId == 1">
			        <p>电话：<a href="tel: 021-54268114">021-54268114</a></p>
			        <p>传真：<a href="tel: 021-54278114">021-54278114</a></p>
		        </div>
		    </div>
		    <div class="location-item">
		    	<div class="location-info clearfix" @click="showMap(118.74693, 31.998054, 2)"> 
			    	<div class="location-icon">
			    		<img src="/images/home3.png">
			    	</div>
			    	<div class="location-content">
				        <h3>南京分公司</h3>
				        <p>建邺区奥体大街69号新城科技园5栋4楼东侧</p>
			        </div>
		        </div>        	        
				<div class="contact-way" v-show="showNumber && locationId == 2">
					<p>电话：<a href="tel: 025-58992726">025-58992726</a></p>
				</div>
		    </div>
		    <div class="location-item">
		        <div class="location-info clearfix" @click="showMap(113.342646, 23.14959, 3)">
			    	<div class="location-icon">
			    		<img src="/images/home2.png">
			    	</div>
			    	<div class="location-content">
				        <h3>广州分公司</h3>
				        <p>天河区龙口西路359号广建大厦二楼223-224室</p>
			        </div>
		        </div>        	        
		        <div class="contact-way" v-show="showNumber && locationId == 3">
			        <p>电话：<a href="tel: 020-85568130">020-85568130</a></p>
			        <p>传真：<a href="tel: 020-85563199">020-85563199</a></p>
				</div>
		    </div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'contact',
	data () {
		return {
			locationId: 0,
			showNumber: true,
		}
	},
	mounted () {
		this.showMap(121.407585, 31.176521);
	},
	methods: {
		showMap (x, y, locationId) {
			this.locationId = locationId;
			this.showNumber = !this.showNumber;
			var map = new BMap.Map("container");       // 创建地图实例  
			var point = new BMap.Point(x, y);  		   // 创建点坐标  
			map.centerAndZoom(point, 17);              // 初始化地图，设置中心点坐标和地图级别  			
		}
	}
}
</script>

<style scoped>
	.contact {
		height: 100%;
		font-size: 1.2rem;
	}
	.clearfix {
		overflow: hidden;
		clear: both;
	}
	#container {
		height: calc(100vh - 238px);
		border: 1px solid #ccc;
	}  
	.location {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 999;
		border-top: 1px solid #e6e6e6;
		background: #fff;
	}
	.location h2 {
		padding: 10px 0;
		font-size: 1.2rem;
	}
	.location h3 {
		font-size: 1.3rem;
	}
	.location-item {
		border-top: 1px solid #e6e6e6;
	}
	.location-icon {
		height: 35px;
		line-height: 35px;
	}
	.location-icon img {
		height: 30px;
		vertical-align: middle;
	}
	.location-icon, .location-content {
		float: left;
	}
	.location-info {
		padding: 15px;
	}
	.location-content {
		text-align: left;
		padding-left: 10px;
		overflow: hidden;
	}
	.location-content p {
		padding-top: 3px;
		font-size: 1.2rem;
		color: #666;
	}
	.contact-way {
		display: flex;
		border-top: 1px solid #e6e6e6;
	}
	.contact-way p {
		flex: 1;
		padding: 10px 0;
		color: #666;
	}

</style>