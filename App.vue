 <script>
	import Vue from 'vue'
	import JMessage from 'js_sdk/jmessage-wxapplet-sdk-1.4.2.min.js'
	import getCodeMsg from "@/js_sdk/ErrorCode.js"
	var JIM = new JMessage({
		debug:true
	})
	var SERVER_API="http://117.83.152.39:8081/interconnect/";
	export default {
		globalData:{
			JIM:JIM,
			SERVER_API:SERVER_API
		},
		onLaunch: function() {
			uni.getStorage({
			    key: 'BM',
			    success: function (res) {
			        console.log(res.data);
			    },
				fail:function(res){
					uni.setStorageSync("BM",true)
				}
			});
			uni.getStorage({
			    key: 'LS',
			    success: function (res) {
			        console.log(res.data);
			    },
				fail:function(res){
					uni.setStorageSync("LS",true)
				}
			});
			uni.getStorage({
			    key: 'HY',
			    success: function (res) {
			        console.log(res.data);
			    },
				fail:function(res){
					uni.setStorageSync("HY",true)
				}
			});
			uni.getStorage({
			    key: 'XZ',
			    success: function (res) {
			        console.log(res.data);
			    },
				fail:function(res){
					uni.setStorageSync("XZ",true)
				}
			});
			
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
					console.log(res)
					signature = res.data.result;
					console.log(appkey,random_str,signature,timestamp)
					JIM.init({
							  "appkey"    : appkey,
							  "random_str": random_str,
							  "signature" : signature,
							  "timestamp" : timestamp,
					}).onSuccess(function(data) {
						console.log('Init-success:' + JSON.stringify(data));	
						uni.$emit("JIMinit",{})
					}).onFail(function(data) {
						uni.showToast({
							"title":getCodeMsg(data.code),
							"position":"bottom"
						})	    
					});
				}
			})
			// 加载公共图标库
			const domModule = weex.requireModule('dom')
			domModule.addRule('fontFace', {
			    'fontFamily': "iconfont",
			    'src': "url('https://at.alicdn.com/t/font_1587665_jb7gr7tlgy.ttf')"
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
				"title":"网络中断，请检查网络",
				"position":"bottom"
			  })
			});
			
		},
		onShow: function() {
			uni.setStorageSync("token","1772b438615944e09c42603130e04cbe")
			
			uni.getStorageInfo({
				success: function (res) {
					console.log(res.keys);
				}
			});
			if(!JIM.isInit()){
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
							console.log('Init-success:' + JSON.stringify(data));	
							uni.$emit("reInit",{})
							uni.hideLoading()
						}).onFail(function(data) {
						    uni.showToast({
						    	"title":getCodeMsg(data.code),
						    	"position":"bottom"
						    })	    
						});
					}
				})
			}	
				
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		
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
