<template lang="html">
	<div class="job">
		<section class="job-banner">
			<h2>"法宝网-你梦想开始的地方"</h2>
			<p>我们将为有梦想的实干者提供能够展现自我的广阔舞台我们期待着新鲜血液的融入，让我们“共同参与、共同创造、共同提高、共同分享”，打造中国最大的第三方法律服务平台。</p>
			<p class="job-mail">求职邮箱：jobs@fabao.cn</p>
		</section>
		<section class="job-header">
			<p>职位分类</p>
			<div class="job-type">
				<span @click="getJoblist(6)" :class="{active: activeId == 6}">急招岗位</span>
				<span @click="getJoblist(7)" :class="{active: activeId == 7}">日常岗位</span>
				<span @click="getJoblist(8)" :class="{active: activeId == 8}">校园招聘</span>
			</div>
		</section>
		<ul class="job-list">
			<li v-for="item in items">
				<section class="job-info" @click="showDetail(item.id)">
					<h3>{{item.name}}</h3>
					<div>
						<address>{{item.company_name}}</address>
						<span>{{item.type}}</span>
						<time>{{item.create_date}}</time>
					</div>
				</section>
				<transition name="fade">	
					<section class="job-detail" v-show="jobId === item.id && ifShow">
						<h4>职位描述</h4>
						<p>
							<span>岗位职责</span>
							<pre>{{item.require}}</pre>				
							<span>任职资格</span>
							<pre>{{item.description}}</pre>
						</p>
					</section>
				</transition>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  	name: 'joblist',
  	data () {
  		return {
			items: [],
			jobId: 1,
			ifShow: false,
			activeId: 6
  		}
  	},
  	created () {
		this.getJoblist(6);
  	},
  	methods: {
  		getJoblist (jobId) {
  			this.activeId = jobId;
			this.$http.post('/getJobs', { jobId }).then(data => {
				console.log(data);
				this.items = data.body.res;
			}, error => {
				console.log(error);
			})
  		},
  		showDetail (id) {
  			this.jobId = id;
  			this.ifShow = !this.ifShow;
  		}
  	}
}
</script>

<style scoped>
	.fade-enter-active, .fade-leave-active {
	  transition: opacity 0.5s ease;
	}
	.fade-enter, .fade-leave-active {
	  opacity: 0;
	}
	.job {
		font-size: 1.2rem;
	}
	.job-banner {
		padding-bottom: 30px;
		background-image: url('/images/joinus.png');
		background-position: bottom center;
		background-repeat: no-repeat;
		background-size: 100%;
	}
	.job-banner h2 {
		padding: 20px 0 10px 0;
		color: #1b468d;
	}
	.job-banner p {
		padding: 0 20px;
		line-height: 2.0;
		color: #1b468d;
	}
	.job-banner .job-mail {
		display: inline-block;
		padding-top: 10px;
		color: #333;
	}
	.job-header {
		padding: 10px;
		text-align: left;
		border-bottom: 1px solid #e6e6e6;
	}
	.job-type {
		display: flex;
	}
	.job-type span {
		flex: 1;
		display: inline-block;
		padding: 10px 5px;
		margin: 10px 5px;
		text-align: center;
		border-radius: 20px;
		color: #fff;
		/*background: #2da2de;*/
		color: #1b468d;
		background: #dee2e5;
	}
	.job-list li {
		text-align: left;
		color: #333;
		border-bottom: 1px solid #e6e6e6;
	}
	.job-list h3 {
		font-size: 1.6rem;
	}
	.job-list address {
		display: inline-block;
		font-style: normal;
	}
	.job-list time {
		display: inline-block;
		flex: 2;
		padding-top: 1px;
		color: #999;
		text-align: right;
	}
	.job-type .active {
		color: #fff;
		background: #1B458D;
	}
	.job-info {
		padding: 10px;
	}
	.job-info div {
		display: flex;		
		padding-top: 10px;
	}
	.job-info span, .job-info address {
		flex: 1;
	}
	.job-info h3 {
		font-weight: 400;
		font-size: 1.4rem;
	}
	.job-info span {
		display: inline-block;
		width: 80px;
		text-align: center;
	}
	.job-detail {
		transition: all 0.2s linear;
	}
	.job-detail h4 {
		height: 30px;
		line-height: 30px;
		padding-left: 10px;
		font-weight: normal;
		border-top: 1px solid #e6e6e6;
		background: #A1D1E9;
		color: #1B458D;
	}
	.job-detail p {
		padding: 0 10px;		
	}
	.job-detail span {
		display: block;
		padding-top: 5px;
	}
	.job-list pre {
		width: 100%;
		display: block;
		margin: 6px 0;
		line-height: 1.5;
		font-family: "Lucida Grande", Helvetica, Arial, sans-serif;
		/*overflow: hidden;*/
		word-wrap:break-word; 
		word-break:normal;
	}
</style>
