<template>
	<view class="content">
		<view :style="{height: `${statusBarHeight}px`}"></view>
		首页
		<button type="default" @click="Dian">安娜娜</button>
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

</style>
