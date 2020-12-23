<template>
	<!-- 轮播图组件 -->
	<view class="swiper m-2">
		<swiper :indicator-dots="true"
		 :autoplay="true" :interval="3000" 
		 indicator-active-color="#fff" circular
		 :duration="1000">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill"  style="width: 100%; height: 100%;" ></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default{
		props:{
			swiperList:{
				type:Array,
				default:[]
			}
		}
	}
</script>

<style>
	.swiper{
		height: 392upx;
	}
	swiper{
		height: 100%;
		width: 100%;
	}
</style>
