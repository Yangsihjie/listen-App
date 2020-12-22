<template>
	<view class="content">
		<view :style="{height: `${statusBarHeight}px`}"></view>
		首页
		<button type="default" @click="Dian">安娜娜</button>
		<view class="bg-primary border col-12">
			<text class="iconfont icon-shoucang" style="font-size:200rpx"></text>
			<text class="iconfont">&#xe6a4;</text>
			<my-icon iconName="iconfont icon-shoucang" ></my-icon>
		</view>
		<view class="box" hover-class="animate__animated animate__bounce">
			<my-icon iconName="iconfont icon-xihuan2" :iconSize="80"></my-icon>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			statusBarHeight:this.$statusBarHeight
			}
		},
		onLoad() {

		},
		onShow() {
		},
		methods: {
			Dian(){
				console.log(this.$statusBarHeight)
			}
		}
	}
</script>

<style>
.box{
	height: 200upx;
	border: #0E151D 1px solid;
	background-color: #0F6674;
}
</style>
