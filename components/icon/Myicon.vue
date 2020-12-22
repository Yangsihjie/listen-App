<template>
	<!-- icon图标组价 -->
	<view>
		<text :class="[iconName,iconColor]" :style="{fontsize: `${iconSize}rpx`}"></text>
	</view>
</template>

<script>
	
	export default {
		//接收父组件定义的数据
		props :{
			iconName:{
				type:String,
				default:'iconfont'
			},
			iconColor:{
				type:String,
				default:'text-dark'
			},
			iconSize:{
				type:[String,Number],
				default:45
			}
		},
		data() {
			return {
				
			};
		},
		onShow() {
			console.log(this.iconSize)
		}
	}
</script>

<style>
text{
	font-size: 80rpx;
}
</style>
