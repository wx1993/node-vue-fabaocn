<template>
	<article class="news-detail">
		<title v-html="data.title"></title>
		<span v-html="data.create_by"></span>
		<time v-html="data.create_date"></time>
		<content v-html="data.content"></content>
		<p class="news-action">
			<router-link :to="{name: 'news', params: {id: data.id - 1}}" replace>{{prevTxt}}</router-link>	
			<router-link :to="{name: 'news', params: {id: data.id + 1}}">{{nextTxt}}</router-link>	
		</p>
	</article>
</template>

<script>
export default {
	name: 'newsDetail',
	data () {
		return {
			data: {},	
			prevTxt: '上一篇',
			nextTxt: '下一篇',
			initialId: ''
		}
	},
	created () {
		this.getNewsDetail();
		this.initialId = this.$route.params.id;
		console.log(this.initialId);
	},
	methods: {
		getNewsDetail () {
			// use vue-resource
			const curId = this.$route.params.id;
			this.$http.post('/getNewsDetail', {id: curId }).then(data => {
				if (data.body.res) {				
					this.prevTxt = '上一篇';
					this.nextTxt = '下一篇'					
					this.data = data.body.res[0]
				}else {
					if (curId > this.initialId) {
						// 点击了下一篇
						this.nextTxt = '没有啦';
						this.prevTxt = '上一篇';
					}else {
						// 点击了上一篇
						this.prevTxt = '没有啦'
						this.nextTxt = '下一篇'
					}					
				}
			}, error => {
				console.log(error);
			})
		},
	},
	watch: {
			"$route": "getNewsDetail"
	}
}
</script>

<style scoped>
	.news-detail {
		padding: 10px 0 70px 0;
		font-size: 1.2rem;
	}
	.news-detail title {
		display: block;
		font-size: 16px;
 	   	font-weight: bold;
 	   	color: #333;
	}
	.news-detail time, .news-detail span {
		display: inline-block;
		padding: 5px 10px;
		color: #999
	}
	.news-detail content {
		text-align: left;
		line-height: 1.5;
		color: #666;
	}
	.news-detail content p {
		text-indent: 2em;
	}
	.news-detail content img {
		width: 100px;
	}
	.news-action {
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		background: #1B458D;
		border-top: 1px solid #e6e6e6;
	}
	.news-action a {
		flex: 1;
		box-sizing: border-box;
		border-right: 1px solid #e6e6e6;
		height: 40px;
		line-height: 40px;
		text-align: center;
		color: #fff;
	}
</style>
