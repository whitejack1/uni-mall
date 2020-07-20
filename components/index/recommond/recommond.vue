<template>
	<view class="recommond">
		<view v-for="item in recommends" class="recommond-item">
			<a :href="item.link">
				<image :src="item.image"></image>
				<view>{{item.title}}</view>
			</a>
		</view>	
	</view>
</template>

<script>
	export default {
		props: {
			recommends: {
				type: Array,
				default(){
					return []
				}
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.recommond{
		display: flex;
		text-align: center;
		font-size: 12px;
		padding: 10px 0 20px;
		border-bottom: 8px solid #eee;
	}
	.recommond-item{
		display: 1;
		
	}
	.recommond-item image{
		width: 188rpx;
		height: 180rpx;
		margin-bottom: 10px
	}
</style>
