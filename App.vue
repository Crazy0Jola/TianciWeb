 <script>
	import Vue from 'vue'
	import JMessage from 'js_sdk/jmessage-wxapplet-sdk-1.4.2.min.js'
	import getCodeMsg from "@/js_sdk/ErrorCode.js"
	import { checkUpdater } from '@/js_sdk/checkUpdater'
	
	var JIM = new JMessage({
		debug:false
	})
	var SERVER_API="http://117.83.152.39:8081/interconnect/";
	
	export default {
		globalData:{
			JIM:JIM,
			SERVER_API:SERVER_API
		},
		onLaunch: function() {	
			
			// app打开时先检查是否有更新记录（更新记录会被保存在storage中）
			// 更新记录的内容为 { 更新标记, 安装包位置 }
			
			// 如果存在更新记录，且更新标记（complete=true）则删除上次使用过的安装包，达到存储释放空间的目的
			
			// 如果存在更新记录，且更新标记（complete=false）则进行安装更新 - 2019年3月27日 新增强制更新内容
			
			// #ifdef APP-PLUS
			plus.screen.lockOrientation('portrait-primary') //竖屏正方向锁定
			
			const updated = uni.getStorageSync('updated') // 尝试读取storage
			
			if (updated.completed === true) { // 如果上次刚更新过
				// 删除安装包及安装记录
				console.log('安装记录被删除，更新成功')
				uni.removeSavedFile({ 
					filePath: updated.packgePath,
					success: (res) => {
						uni.removeStorageSync('updated')
					}
				})
			} else if (updated.completed === false) {
				uni.showModal({
					title: '更新提示',
					content: updated.content,
					showCancel: false,
					complete: () => {
						plus.runtime.install(updated.packgePath, { force: true },function(){
							uni.removeStorageSync('updated')
							uni.setStorage({
								key: 'updated',
								data: {
									completed: true,
									packgePath: updated.packgePath
								},
								success: (res) => {
									console.log('成功安装上次的更新，应用需要重启才能继续完成')
								}
							})  
							plus.runtime.restart();  
						},function(e){  
						});
					}
				})  
			} else {
				plus.runtime.getProperty(plus.runtime.appid, (widgetInfo) => {
					checkUpdater(widgetInfo.version) 
				})
			}
			// #endif
			
			uni.getStorage({
				key: 'BM',
				success: function (res) {
					
				},
				fail:function(res){
					uni.setStorageSync("BM",true)
					uni.setStorageSync("third",4)
				}
			});
			uni.getStorage({
				key: 'LS',
				success: function (res) {
					
				},
				fail:function(res){
					uni.setStorageSync("LS",true)
					uni.setStorageSync("third",4)
				}
			});
			uni.getStorage({
				key: 'HY',
				success: function (res) {
					
				},
				fail:function(res){
					uni.setStorageSync("HY",true)
					uni.setStorageSync("third",4)
				}
			});
			uni.getStorage({
				key: 'XZ',
				success: function (res) {
					
				},
				fail:function(res){
					uni.setStorageSync("XZ",true)
					uni.setStorageSync("third",4)
				}
			});
		
			// 加载公共图标库
			const domModule = weex.requireModule('dom')
			domModule.addRule('fontFace', {
			    'fontFamily': "iconfont",
			    'src': "url('https://at.alicdn.com/t/font_1587665_1mh1vquff72.ttf')"
			});
			// 初始化录音管理器
			this.$store.commit('initRECORD')
				
			console.log('App Launch')
			
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif
					
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		
					
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})
			
			JIM.onDisconnect(function(){
				uni.showToast({
					"title":"聊天系统离线，正在重新连接",
					"position":"bottom"
				})
				uni.switchTab({
					url:"/pages/tabbar/index/index"
				})
			});
			
		},
		onShow: function() {
			
			var times = 0;
			var Interval = setInterval(function(){
				times +=1;
				if(!JIM.isInit()){
					uni.showLoading({
						title:"聊天系统初始化中..."
					})
					var appkey='09970876f33e884a3624335c';
					var random_str="NkSYvAH3yAw93dqdlto47G9A35xHv4Oa";
					var timestamp=(new Date()).getTime();
					var signature;
					uni.request({
						url: SERVER_API+'appUser/getJMKey',
						header: {
							"token": '1ab5f25e6e44485fb69646158126b6f6',
							"Content-Type":"application/json"
						},
						data:{
							timestamp:timestamp
						},
						success(res) {
							signature = res.data.result;
							JIM.init({
									  "appkey"    : appkey,
									  "random_str": random_str,
									  "signature" : signature,
									  "timestamp" : timestamp,
									  "flag":1
							}).onSuccess(function(data) {
								console.log('Init-success:22222222222222222' + JSON.stringify(data));	
								uni.$emit("reInit",{})
								uni.hideLoading()
							}).onFail(function(data) {
								uni.hideLoading()
							    uni.showToast({
							    	"title":getCodeMsg(data.code),
							    	"position":"bottom"
							    })	    
							});
						}
					})
				}else{
					clearInterval(Interval);
				}
			},3000)
			
			uni.setStorageSync("onShow",true)
			
			// uni.getStorageInfo({
			// 	success: function (res) {
			// 		console.log(res.keys);
			// 	}
			// });	
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
			uni.setStorageSync("onShow",false)
		}
		
	}
</script>

<style>
	/*每个页面公共css */
	@import "./common/free.css";
	@import "./common/common.css";
	/* #ifndef APP-PLUS-NVUE */
	@import "./common/free-icon.css";
	/* #endif */
</style>
