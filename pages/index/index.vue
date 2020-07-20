<template>
	<view class="home">
		<!--轮播图-->
		<swiper indicator-dots circular autoplay="true" interval="2000">
			<swiper-item v-for="item in banners">
				<a :href="item.link">
					<image class="image" :src="item.image"></image>
				</a>
			</swiper-item>
		</swiper>
		<!--活动选择项-->
		<recommend :recommends="recommends"></recommend>
		<!-- 特色选项 -->
		<feature-view></feature-view>
		<!-- 具有吸顶效果的导航栏（未完成） -->
		<tab-control class="tab-control-new" :titles="['流行', '新款', '精选']"></tab-control>
		<view>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
		</view>
		
	</view>
	
</template>

<script>
	import featureView from '../../components/index/featureView/featureView.vue'
	import tabControl from '../../components/common/tabControl/tabControl.vue'
	import recommend from '../../components/index/recommond/recommond.vue'
	export default {
		components: {
			featureView,
			tabControl,
			recommend
		},
		data() {
			return {
				banners: [],
				recommends: []
			}
		},
		onLoad() {
			// uni.request({
			// 	url: "http://123.207.32.32:8000/home/multidata",
			// 	success(res) {
			// 		console.log(res)
			// 		this.banners = res.data.banner.list;
			// 		this.recommends = res.data.recommend
			// 	}
			// })
			this.$myRequest({
				url: "/home/multidata"
			}).then(res => {
				console.log(res);
				this.banners = res.data.data.banner.list;
				this.recommends = res.data.data.recommend.list
			})
		},
		methods: {

		}
	}
</script>

<style>
	/* .content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	} */

	.home {
		width: 750rpx;
		height: 375rpx;
	}
	.image{
		height: 100%;
		width: 100%;
	}
	
	.tab-control-new{
		position: sticky;
		top: 100px
	}
</style>
