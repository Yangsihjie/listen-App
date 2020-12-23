<template>
	<!-- icon图标组件 -->
	
		<text :class="[`iconfont ${iconName}`,iconColor]" :style="{fontSize: `${iconSize}rpx`}"></text>
	
</template>

<script>
	
	export default {
		//接收父组件定义的数据
		props :{
			iconName:{
				type:String,
				default:''
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
		
	}
</script>

<style>
/* text{
	font-size: 80rpx;
} */
</style>
