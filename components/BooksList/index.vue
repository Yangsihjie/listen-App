<template>
	<view class="dataBox">
		<block v-for="(item,index) in booksList" :key="index">
			<view class="flex align-center justify-between p-2 my-1">
				<view class="font-lg">
					{{item.headerTitle}}
				</view>
				<view class="flex align-center">
					<view class="font text-light-black">
						查看全部
					</view>
					<my-icon iconName="icon-iconfonti" iconColor="text-light-black" iconSize="44"></my-icon>
				</view>
			</view>
			<block v-for="(ntm,ind) in item.books" :key="ntm.id">
				<view class="flex align-center p-1 border-bottom" style="height: 352rpx;">
					<image class="rounded mx-2" style="width: 276rpx; height: 276rpx;" :src="ntm.imgurl" mode=""></image>
					<view class="flex-1" style="height: 100%;">
						<view class="py-2 font-md font-weight-bold">
							{{ntm.name}}
						</view>
						<view class="font text-light-black">
							{{ntm.synopsis}}
						</view>
					</view>
	
				</view>
			</block>
	
		</block>
	</view>
	
</template>

<script>
	export default{
		props:{
			booksList:{
				type:Array,
				default:[]
			}
		}
	}
</script>

<style>
</style>
