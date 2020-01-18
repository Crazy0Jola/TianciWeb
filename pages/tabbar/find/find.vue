<template>
	<view id="moments">

		<view class="home-pic">
			<view class="home-pic-base">
				<view class="top-pic">
					<image class="header" mode="aspectFill" :src="myAvatar||'/static/images/userpic.jpg'" @tap="goView"></image>
				</view>
				<text class="top-name font-lg">{{username}}</text>
			</view>
		</view>

		<view class="moments__post" v-for="(post,index) in posts" :key="post.id" :id="post.id">
			<view class="post-left">
				<image mode="aspectFill" class="post_header" :src="post.photo||'/static/images/userpic.jpg'"></image>
			</view>

			<view class="post_right">
				<text class="post-username font-md">{{post.publisherName}}</text>
				<view id="paragraph" class="paragraph">{{post.content}}</view>
				
				
				<view v-if="post.urlList.length!=0">
					<!-- 视频 -->
					<view class="thumbnails" v-if="isVideo(post.urlList)">
						<view class="my-gallery" style="position: relative;">
							<image class="gallery_img" lazy-load mode="aspectFill" :src="getSrc(post.urlList)" @tap="openVideo(post.urlList,post.id)"></image>
							<image mode="aspectFill" src="/static/video/play.png" @tap="openVideo(post.urlList,post.id)" style="width: 80upx;height: 80upx; position: absolute;top:160upx;left:85upx"></image>
						</view>
					</view>
					
					<!-- 图片 -->
					<view class="thumbnails" v-else>
						<view :class="post.urlList.length === 1?'my-gallery':'thumbnail'" v-for="(image, index_images) in post.urlList" :key="index_images">
							<image class="gallery_img" lazy-load mode="aspectFill" :src="image.url" :data-src="image.url" @tap="previewImage(post.urlList,index_images)"></image>
						</view>
					</view>	
				</view>
				
				<!-- 资料条 -->
				<view class="toolbar">
					<text class="timestamp font-small">{{getCreateTime(index)}}</text>
					<text class="post-username font-small ml-2" v-if="isMine(post.publisherId)"  @click="deletePost(post.id,index)">删除</text>
					<view class="like" @tap="changeLike(post.id,index)">
						<image :src="post.like ?'../../../static/moments/like.png': '../../../static/moments/islike.png'"></image>
					</view>
					<view class="comment" @tap="comment(index)">
						<image src="../../../static/moments/comment.png"></image>
					</view>
				</view>
				<!-- 赞／评论区 -->
				<view class="post-footer">
					<view class="footer_content" v-if="post.praiseUserList.length!=0">
						<image class="liked" src="../../../static/moments/liked.png"></image>
						<text class="nickname" v-for="(user,index_like) in post.praiseUserList" :key="index_like">{{index_like==0?'':','}}{{user.userRealName}}</text>
					</view>
					<view @longpress="long" v-if="post.commentList.length!=0" :id="comment.id" :data-commentContent="comment.content" :data-commentIndex="comment_index" :data-postIndex="index" :data-userId="comment.commentUserId" class="footer_content" v-for="(comment,comment_index) in post.commentList" :key="comment_index" @tap="reply(comment.id,index,comment_index)">
						<view v-if="comment.parentId"><text   class="comment-nickname">{{comment.commentUserName}}</text>回复<text class="comment-nickname">{{comment.parentName}}: </text><text class="comment-content">{{comment.content}}</text></text></view>
						<text v-else class="comment-nickname">{{comment.commentUserName}}: <text class="comment-content">{{comment.content}}</text></text>
					</view>
				</view>
			</view>
			<!-- 结束 post -->
		</view>

		<view class="foot" v-show="showInput">
			<chat-input @send-message="send_comment" @blur="blur" :focus="focus" :placeholder="input_placeholder"></chat-input>
		</view>
		<view class="uni-loadmore">{{loadMoreText}}</view>
		
		<free-confirm ref="confirm" title="温馨提示">
			<text class="font-md">确认删除？</text>
		</free-confirm>
		
		<!-- 弹出层 -->
		<free-popup ref="extend" :bodyWidth="240" :bodyHeight="getMenusHeight">
			<view class="flex flex-column" 
			style="width: 240rpx;"
			:style="getMenusStyle">
				<view class="flex-1 flex align-center" 
				v-for="(item,index) in menusList"
				:key="index"
				@click="clickEvent(item.event)">
					<text class="font-md pl-3">{{item.name}}</text>
				</view>
			</view>
		</free-popup>
	</view>
</template>

<script>
	import chatInput from '@/components/im-chat/chatinput.vue'; //input框
	import freeConfirm from "@/components/free-ui/free-confirm.vue"
	import freePopup from "@/components/free-ui/free-popup.vue"
	import $T from '@/common/free-lib/time.js';
	var SERVER_API = getApp().globalData.SERVER_API;
	var _this;
	export default {
		components: {
			chatInput,
			freeConfirm,
			freePopup
		},
		data() {
			return {	
				propIndex:-1,
				posts: [],//模拟数据
				username: 'Liuxy',
				myAvatar:"",
				myToken:"",
				myId:"",
				
				comment_id:"",
				user_id:"",
				comment_index:"",
				comment_content:"",
			
				
				menus:[
					{
						name:"复制",
						event:"copy"
					},
					{
						name:"删除",
						event:"delete"
					}
				],

				index: '', //盆友圈索引

				input_placeholder: '评论', //占位内容
				focus: false, //是否自动聚焦输入框
				is_reply: false, //回复还是评论
				showInput: false, //评论输入框
				parentName:"",//需要回复的评论人
				parentId:"",//需要回复的评论ID

				screenHeight: '', //屏幕高度(系统)
				platform: '',
				windowHeight: '' ,//可用窗口高度(不计入软键盘)
				
				loadMoreText: "加载中...",
				showLoadMore: true,
				pageNo:1
			}
		},
		mounted() {

		},
		onLoad() {
			_this=this;
			var userData = uni.getStorageSync("setUserData")
			console.log(userData)
			_this.myAvatar = userData.photo;
			_this.username = userData.name;
			_this.myToken = userData.token;
			_this.myId = userData.id;
		
			uni.getSystemInfo({ //获取设备信息
				success: (res) => {
					this.screenHeight = res.screenHeight;
					this.platform = res.platform;
				}
			});
	
			uni.startPullDownRefresh();
		},
		onShow() {
			
			uni.onWindowResize((res) => { //监听窗口尺寸变化,窗口尺寸不包括底部导航栏
				if(this.platform === 'ios'){
					this.windowHeight = res.size.windowHeight;
					this.adjust();
				}else{
					if (this.screenHeight - res.size.windowHeight > 60 && this.windowHeight <= res.size.windowHeight) {
						this.windowHeight = res.size.windowHeight;
						this.adjust();
					}
				}
			});
		},
		onHide() {
			uni.offWindowResize(); //取消监听窗口尺寸变化
		},
		onUnload() {
			this.data = []
		},
		onReachBottom() { //监听上拉触底事件
			console.log('onReachBottom');
			console.log(_this.pageNo)
			if(_this.showLoadMore){
				uni.request({
				    url: SERVER_API+"appFriends/list", //仅为示例，并非真实接口地址。
				    data: {
				        "type":"2",
				        "pageNo":_this.pageNo.toString()
				    },
					method:"POST",
				    header: {
				        "token":_this.myToken //自定义请求头信息
				    },
				    success: (res) => {
						console.log(res)
						if(res.data.code==1){
							if(res.data.result.length<10){
							   _this.loadMoreText="暂无更多";
							   _this.showLoadMore=false
							}
							var olen = _this.posts.length;
							var newResult = res.data.result
							var nlen = newResult.length;
							for(var i =0;i<olen;i++){
								for(var j=0;j<nlen;j++){
									if(_this.posts[i].id==newResult[j].id){
										newResult = newResult.splice(j,1);
										break;
									}
								}
							}
							_this.posts = _this.posts.concat(newResult);
							console.log(JSON.stringify(_this.posts))
							
							_this.pageNo++;
							var len = _this.posts.length;
							console.log(len)
							
							for(var i =10*_this.pageNo ;i<len;i++){
								_this.posts[i].like=_this.islike(i);
							}
						}
				    },
					fail:(res)=>{
						console.log(res)
						uni.showToast({
							"title":res.data.message,
							"position":"bottom"
						})
					}
				});
			}	
		},
		onPullDownRefresh() { //监听下拉刷新动作
			console.log('onPullDownRefresh');  	
			this.loadMoreText = "加载中...",
			this.showLoadMore = true;
			this.pageNo = 1;
			uni.request({
			    url: SERVER_API+"appFriends/list", //仅为示例，并非真实接口地址。
			    data: {
			        "type":"1",
			        "pageNo":"0"
			    },
				method:"POST",
			    header: {
			        "token":_this.myToken //自定义请求头信息
			    },
			    success: (res) => {
				   _this.posts=res.data.result;
				   console.log(JSON.stringify(_this.posts))
				   var len = _this.posts.length;
				   if(len<10){
					   _this.loadMoreText="暂无更多";
					   _this.showLoadMore=false
				   }
				   for(var i =0 ;i<len;i++){
					   _this.posts[i].like=_this.islike(i);
				   }
			       uni.stopPullDownRefresh(); //停止下拉刷新
			    },
				fail:(res)=>{
					console.log(res)
					uni.showToast({
						"title":res.data.message,
						"position":"bottom"
					})
					uni.stopPullDownRefresh(); //停止下拉刷新
				}
			});
			
		},
		onNavigationBarButtonTap(e) {//监听标题栏点击事件
			if (e.index == 0) {
				uni.showActionSheet({
				    itemList: ['照片', '视频'],
				    success: function (res) {
						if(res.tapIndex==0){
							uni.navigateTo({
								url: '../publish/publish?type=photo'
							})
						}else if(res.tapIndex==1){
							uni.navigateTo({
								url: '../publish/publish?type=video'
							})
						}
				    },
				    fail: function (res) {
				        console.log(res.errMsg);
				    }
				});		
			}
		},
		computed:{
			// 动态获取菜单高度
			getMenusHeight(){
				let H = 100
				return this.menusList.length * H
			},
			// 获取菜单的样式
			getMenusStyle(){
				return `height: ${this.getMenusHeight}rpx;`
			},
			// 获取操作菜单
			menusList(){
				return this.menus.filter(v=>{
					if (v.name === '删除' && _this.myId!=_this.user_id) {
						return false
					} else {
						return true
					}
				})
			},
			islike(){
				return function(index){
					var praiseList = _this.posts[index].praiseUserList;
					var len = praiseList.length
					
					for(var i =0;i<len;i++){
						if(_this.myId === praiseList[i].id){
							return true;
						}
					}
					return false;
				}
			},
			isMine(){
				return function(id){
					return id==_this.myId;
				}
			},
			getCreateTime(){
				return function(index){
					return $T.getTimeFormat(_this.posts[index].createTime.substring(0,19))
				}
			}
		},
		methods: {
			isVideo(list){
				if(list.length!=2){
					console.log("222222222")
					return false;
					
				}else{
					if(list[0].url.lastIndexOf('.mp4')!=-1){
						console.log("1111111111")
						return true;
					}else if(list[1].url.lastIndexOf('.mp4')!=-1){
						console.log("1111111111")
						return true;
					}else{
						console.log("222222222")
						return false;
					}
				}
			},
			getSrc(list){
				if(list.length==0){
					return ''
				}else{
					return list[0].url.lastIndexOf('.mp4')==-1? list[0].url:list[1].url 
				}
			},
			// 分发菜单事件
			clickEvent(event){
				switch (event){
					case "copy": // 置顶/取消置顶会话
					uni.setClipboardData({
					    data: _this.comment_content,
					    success: function () {
					        console.log('success');
					    }
					});
						break;
					case "delete": // 删除当前会话
					this.deleteComment()
						break;
				}
				this.$refs.extend.hide()
			},
			deleteComment(){
				uni.request({
					url:SERVER_API+"appFriends/deleteComment",
					method:"POST",
					data: {
					    commentId:_this.comment_id
					},
					header: {
					    "token":_this.myToken //自定义请求头信息
					},
					success: (res) => {
						console.log(res)
						if(res.data.code==1){
							_this.posts[_this.index].commentList.splice(_this.comment_index,1);
						}
					},
					fail:(res) =>{
						uni.showToast({
							"title":res.data.message,
							"position":"bottom"
						})
					}
				})
			},
			long(e){
				console.log(e)
				let x = 0
				let y = 0
				if (Array.isArray(e.changedTouches) && e.changedTouches.length > 0) {
					x = e.changedTouches[0].clientX
					y = e.changedTouches[0].clientY
				}

				_this.comment_id = e.currentTarget.id;
				_this.user_id = e.currentTarget.dataset.userid;
				_this.index = e.currentTarget.dataset.postindex;
				_this.comment_index = e.currentTarget.dataset.commentindex;
				_this.comment_content = e.currentTarget.dataset.commentcontent;
				this.$refs.extend.show(x,y)
			},
			deletePost(postId,index){
				this.$refs.confirm.show((close)=>{
					uni.request({
					    url: SERVER_API+"appFriends/delete", //仅为示例，并非真实接口地址。
					    data: {
					        postId:postId
					    },
						method:"POST",
					    header: {
					        "token":_this.myToken //自定义请求头信息
					    },
					    success: (res) => {
							if(res.data.code==1){
								uni.showToast({
									"title":"删除成功",
								})
								_this.posts.splice(index, 1);
							}
						},
						fail(res){
							uni.showToast({
								"title":res.data.message,
								"position":"bottom"
							})
						}						
					})
					close();
				})

			},
			changeLike(postId,index) {
				if (_this.posts[index].like) {
					uni.request({
						url:SERVER_API+"appFriends/canclePraise",
						method:"POST",
						header:{
							"token":_this.myToken
						},
						data:{
							"postId":postId
						},
						success(res){
							if(res.data.code==1){
								_this.posts[index].like = false;
								_this.posts[index].praiseUserList.splice(_this.posts[index].praiseUserList.indexOf({
									"id": _this.myId
								}), 1);
							}	
						},
						fail(res){
							uni.showToast({
								"title":res.data.message,
								"position":"bottom"
							})
						}
					})	
				} else {
					uni.request({
						url:SERVER_API+"appFriends/praise",
						method:"POST",
						header:{
							"token":_this.myToken
						},
						data:{
							"postId":postId
						},
						success(res){
							if(res.data.code==1){
								_this.posts[index].like = true;
								_this.posts[index].praiseUserList.push({
									"id": _this.myId,
									"postId": postId,
									"userRealName": _this.username
								});
							}	
						},
						fail(res){
							uni.showToast({
								"title":res.data.message,
								"position":"bottom"
							})
						}
					})			
				}
			},
			comment(index) {
				this.showInput = true; //调起input框
				this.focus = true;
				this.index = index;
			},
			adjust() { //当弹出软键盘发生评论动作时,调整页面位置pageScrollTo
				return;
				uni.createSelectorQuery().selectViewport().scrollOffset(res => {
					var scrollTop = res.scrollTop;
					let view = uni.createSelectorQuery().select("#post-" + this.index);
					view.boundingClientRect(data => {
						console.log("data:" + JSON.stringify(data));
						console.log("手机屏幕高度:" + this.screenHeight);
						console.log("竖直滚动位置" + scrollTop);
						console.log("节点离页面顶部的距离为" + data.top);
						console.log("节点高度为" + data.height);
						console.log("窗口高度为" + this.windowHeight);

						uni.pageScrollTo({
							scrollTop: scrollTop - (this.windowHeight - (data.height + data.top + 45)), //一顿乱算
							// scrollTop: 50, 
							duration: 300
						});
					}).exec();
				}).exec();
			},
			reply(commentId,index, comment_index) {
				this.is_reply = true; //回复中
				this.showInput = true; //调起input框
				this.parentName = _this.posts[index].commentList[comment_index].commentUserName;
				this.input_placeholder = '回复' + this.parentName;
				this.index = index; //post索引
				this.parentId = commentId;
				this.focus = true;
			},
			blur: function() {
				this.init_input();
			},
			send_comment: function(message) {
				if(_this.is_reply){
					uni.request({
						url:SERVER_API+"appFriends/publishComment",
						method:"POST",
						header:{
							"token":_this.myToken
						},
						data:{
							"postId":_this.posts[_this.index].id,
							"content":message.content,
							"parentId":_this.parentId,
							"parentName": _this.parentName
						},
						success(res){
							console.log(res)
							if(res.data.code==1){
								_this.posts[_this.index].commentList.push({
									"id":res.data.result,
									"postId": _this.posts[_this.index].id,
									"content": message.content,
									"commentUserId": _this.myId,
									"commentUserName": _this.username,
									"parentId":_this.parentId,
									"parentName":_this.parentName
								});
								_this.init_input();
							}
						},
						fail(res){
							uni.showToast({
								"title":res.data.message,
								"position":"bottom"
							})
						}
					})
				}else{
					uni.request({
						url:SERVER_API+"appFriends/publishComment",
						method:"POST",
						header:{
							"token":_this.myToken
						},
						data:{
							"postId":_this.posts[_this.index].id,
							"content":message.content
						},
						success(res){
							if(res.data.code==1){
								console.log(JSON.stringify(res))
								_this.posts[_this.index].commentList.push({
									"id":res.data.result,
									"postId": _this.posts[_this.index].id,
									"content": message.content,
									"commentUserId": _this.myId,
									"commentUserName": _this.username,
								});
								_this.init_input();
							}
						},
						fail(res){
							uni.showToast({
								"title":res.data.message,
								"position":"bottom"
							})
						}
					})
				}
							
			},
			//还原评论框
			init_input() {
				this.showInput = false;
				this.focus = false;
				this.input_placeholder = '评论';
				this.is_reply = false;
			},
			previewImage(imageList, image_index) {
				var new_imageList = [];
				for(var i =0,len= imageList.length;i<len;i++){
					new_imageList.push(imageList[i].url)
				}
				var current = new_imageList[image_index];
				uni.previewImage({
					current: current,
					urls: new_imageList
				});
			},
			openVideo(list,id){
				var url = ''
				if(list.length!=0){
					url = list[0].url.lastIndexOf('.mp4')==-1? list[1].url:list[0].url 
				}
				uni.navigateTo({
					url:'../../chat/video/video?url='+url+'&id='+id
				})
			}
		}
	}
</script>

<style scoped>
	@import url("../../../common/uni.css");
	@import url("../../../common/moments/moments.css");
</style>
