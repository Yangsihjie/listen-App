<template>
	<view class="navBox m-1">
		<my-icon iconName="icon-tubiao11" class="hedicon" iconSize="26" iconColor="text-light-muted" ></my-icon>
		<input type="text" placeholder="搜索你想听的节目" />
	</view>
</template>

<script>
</script>

<style>
	.navBox{
		height: 60upx;
		border: #C0C0C0 1px solid;
		position: relative;
		padding:0 20upx;
		background-color: #f8f9fa;
		border-radius: 10upx;
		line-height: 60upx;
	}
	.hedicon{
		position: absolute;
		top: 0;
		left: 20upx;
	}
	.navBox input{
		font-size: 24upx;
		text-indent: 40upx;
		height: 40upx;
		margin-top: 10upx;
	}
</style>
