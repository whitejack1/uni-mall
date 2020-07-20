<template>
	<view class="tab-control">
		<view v-for="(item, index) in titles" class="tab-caontrol-item" :class="{active: index === currentIndex}" @click="itemClick(index)">
			<span>{{item}}</span>
			 
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 0
			}
		},
		props: {
			titles: {
				type: Array,
				default(){
					return []
				}
			}
		},
		methods: {
			itemClick(index){
				this.currentIndex = index;
			}
		}
	}
</script>

<style>
	.tab-control{
		display: flex;
		text-align: center;
		font-size: 15px;
	}
	
	.tab-caontrol-item{
		flex: 1;
		height: 40px;
		line-height: 40px;
	}
	
	.tab-caontrol-item span{
		padding: 5px;
	}
	
	.active{
		color: var(--color-high-text);
		
	}
	
	.active span{
		border-bottom: 3px solid var(--color-tint);
	}
</style>
