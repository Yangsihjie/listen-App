<template>
	<view class="content">
		<view :style="{height: `${statusBarHeight}px`}"></view>
		<!-- 头部搜索框 -->
		<hed-serch></hed-serch>
		<!-- 轮播图组件 -->
		<my-swiper :swiperList="swiperList"></my-swiper>
		<!-- 导航组件 -->
	</view>
</template>

<script>
	// 头部搜索框
	import HedSerch from '../../components/HedSerch'
	//轮播图组件
	import MySwiper from '../../components/HedSwiper'
	export default {
		data() {
			return {
			statusBarHeight:this.$statusBarHeight,
			swiperList:[
				{
					url:'http://ceshi.dishait.cn/ceshiData/swiperImages/swipertab1.png'
				},
				{
					url:'http://ceshi.dishait.cn/ceshiData/swiperImages/swipertab2.png'
				},
				{
					url:'http://ceshi.dishait.cn/ceshiData/swiperImages/swipertab3.png'
				},
				{
					url:'http://ceshi.dishait.cn/ceshiData/swiperImages/swipertab4.png'
				},
			]
			}
		},
		components:{
			HedSerch, //搜索组件
			MySwiper, //轮播图组件
		},
		onLoad() {

		},
		onShow() {
		},
		methods: {
			
		},
		onShow() {
			
		}
	}
</script>

<style>

</style>
