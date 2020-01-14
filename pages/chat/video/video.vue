<template>
	<view>
		<video :src="url" style="width: 750rpx;"
		:style="'height:'+windowHeight+'px;'" @ended="back"></video>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:"",
				windowHeight:500
			}
		},
		onLoad(e) {
			if (e.url === '') {
				this.back()
				return uni.showToast({
					title: '非法视频',
					icon: 'none'
				});
			}
			this.url ="file://"+ e.url
			console.log(e.url)
			// 动态获取高度
			let res = uni.getSystemInfoSync()
			this.windowHeight = res.windowHeight
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>

</style>
