<template>
	<view class="page">
		<free-nav-bar bgColor="bg-white">
			<free-icon-button slot="right" :icon="'\ue6ed'"></free-icon-button>
		</free-nav-bar>
		
		<free-list-item @click="changeAvator" cover="../../../static/images/demo/demo6.jpg" coverSize="120" title="楚绵" showRight>
			<view class="flex flex-column">
				<text class="text-dark font-lg font-weight-bold">楚绵</text>
				<text class="text-light-muted font mt-2">仿微信号：summer</text>
			</view>
			<view slot="right">
				<text class="iconfont font-md text-light-muted">&#xe614;</text>
			</view>
		</free-list-item>
		<free-divider></free-divider>
		<free-list-item title="支付" showRight>
			<text slot="icon" class="iconfont font-lg py-1">&#xe66c;</text>
		</free-list-item>
		<free-divider></free-divider>
		<free-list-item title="收藏" showRight>
			<text slot="icon" class="iconfont font-lg py-1">&#xea2d;</text>
		</free-list-item>
		<free-list-item title="相册" showRight>
			<text slot="icon" class="iconfont font-lg py-1">&#xe608;</text>
		</free-list-item>
		<free-list-item title="表情" showRight>
			<text slot="icon" class="iconfont font-lg py-1">&#xe605;</text>
		</free-list-item>
		<free-divider></free-divider>
		<free-list-item title="设置" showRight>
			<text slot="icon" class="iconfont font-lg py-1">&#xe612;</text>
		</free-list-item>
		<free-list-item title="退出登录" showRight @click="exit">
			<text slot="icon" class="iconfont font-lg py-1">&#xe612;</text>
		</free-list-item>
		
	</view>
</template>

<script>
	import freeNavBar from "@/components/free-ui/free-nav-bar.vue"
	import freeIconButton from "@/components/free-ui/free-icon-button.vue"
	import freeListItem from "@/components/free-ui/free-list-item.vue"
	import freeDivider from "@/components/free-ui/free-divider.vue"
	
	var JIM=getApp().globalData.JIM;	
	export default {
		components: {
			freeNavBar,
			freeIconButton,
			freeListItem,
			freeDivider
		},
		data() {
			return {
				
			}
		},
		onShow(){
			
		},
		methods: {
			exit(){
				JIM.loginOut();
				this.$store.dispatch("setUserData","") //清空登录状态
				try {
					uni.clearStorage();
				} catch (e) {
					// error
				}
				uni.reLaunch({
					url:"../../login/login"
				})
			},
			changeAvator(){
				
				uni.chooseImage({
					count:1,
					success: (res) => {
						// 发送到服务器					
						// 渲染到页面						
						JIM.updateSelfAvatar({'avatar' : res.tempFilePaths[0]}).onSuccess(function(data) {
						    console.log('success:' + JSON.stringify(data));				
						  
						}).onFail(function(data) {
						    console.log('error:' + JSON.stringify(data));				
						});
					}
				})
				
			}
		}
	}
</script>

<style>

</style>
