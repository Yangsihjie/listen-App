<template>
	<view class="content">
		<view :style="{height: `${statusBarHeight}px`}"></view>
		<!-- 头部搜索框 -->
		<hed-serch></hed-serch>
		<!-- 轮播图组件 -->
		<my-swiper :swiperList="swiperList"></my-swiper>
		<!-- 导航组件 -->
		<my-nav-bar></my-nav-bar>
		<!-- 推荐喜欢组件 -->
		<my-like-books :NavBooks="NavBooks"></my-like-books>
		<!-- book图文混排组件 -->
		<my-books-list :booksList="booksList"></my-books-list>
	</view>
</template>

<script>
	//导入api接口
	import {
		IndexModel
	} from '../../model/index.js'
	const IndexAPi = new IndexModel()
	// 头部搜索框
	import HedSerch from '../../components/HedSerch'
	//轮播图组件
	import MySwiper from '../../components/HedSwiper'
	//导航组件
	import MyNavBar from '../../components/NavBar'
	//猜你喜欢组件
	import MyLikeBooks from '../../components/hedBooks'
	//图文混排组件
	import MyBooksList from '../../components/BooksList'
	export default {
		data() {
			return {
				statusBarHeight: this.$statusBarHeight,
				swiperList: [{
						url: 'http://ceshi.dishait.cn/ceshiData/swiperImages/swipertab1.png'
					},
					{
						url: 'http://ceshi.dishait.cn/ceshiData/swiperImages/swipertab2.png'
					},
					{
						url: 'http://ceshi.dishait.cn/ceshiData/swiperImages/swipertab3.png'
					},
					{
						url: 'http://ceshi.dishait.cn/ceshiData/swiperImages/swipertab4.png'
					},
				],
				NavBooks: [],
				booksList: []

			}
		},
		components: {
			HedSerch, //搜索组件
			MySwiper, //轮播图组件
			MyNavBar, //导航组件
			MyLikeBooks, //猜你喜欢组件
			MyBooksList, //图文混排组件
		},
		onLoad() {

		},

		methods: {
			//请求页面渲染数据
			async gitData() {
				const {
					data
				} = await IndexAPi.GitIndexData()
				//导航数组
				this.NavBooks = data.Rebooks
				//图文混排
				this.booksList = data.bookResources
				console.log(data)
			}
		},
		onShow() {
			//当页面打开时请求数据
			this.gitData()
		}
	}
</script>

<style>

</style>
