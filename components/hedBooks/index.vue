<template>
	<view class="my-like">
		<view class="flex align-center justify-between p-2 my-1">
			<view class="font-lg">
				猜你喜欢
			</view>
			<view class="flex align-center">
				<view class="font text-light-black">
					更多推荐
				</view>
				<my-icon iconName="icon-iconfonti" iconColor="text-light-black" iconSize="48"></my-icon>
			</view>
		</view>
	
		<view class="flex align-center">
			<view v-for="(item,index) in NavBooks" :key="index" class="flex flex-column align-center flex-1 position-relative w-100"
			 style="height: 276rpx;">
				<image class="w-100" :src="item.src" mode="widthFix"></image>
				<text class="font my-1 text-light-black">{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			NavBooks:{
				type:Array,
				default:[]
			}
		}
	}
</script>

<style>
</style>
