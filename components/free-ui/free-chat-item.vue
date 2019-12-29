<template>
	<div @longpress="long">
		<!-- 时间显示 -->
		<view v-if="showTime" 
		class="flex align-center justify-center pb-4 pt-2">
			<text class="font-sm text-light-muted">{{showTime}}</text>
		</view>
		<!-- 撤回消息 -->
		<view v-if="item.msg_body.extras.isremove" ref="isremove"
		class="flex align-center justify-center pb-4 pt-1 chat-animate">
			<text class="font-sm text-light-muted">你撤回了一条信息</text>
		</view>
		<!-- 气泡 -->
		<view v-else class="flex align-start position-relative mb-3"
		:class="isother ? 'justify-start' : 'justify-end'">
			<!-- 好友 -->
			<template v-if="isother">
				<free-avater size="70" :src="avator"
				clickType="navigate"></free-avater>
				
				<text v-if="hasLabelClass" class="iconfont text-white font-md position-absolute chat-left-icon">&#xe601;</text>
			</template>
			
			<div class="p-2 rounded" :class="labelClass" style="max-width:500rpx;" :style="labelStyle">
				<!-- 文字 -->
				<text v-if="item.msg_type === 'text'" class="font-md">{{item.msg_body.text}}</text>
				<!-- 表情包 | 图片-->
				<free-image  v-else-if="item.msg_type === 'emoticon' || item.msg_type === 'image'" :src="getImg" @click="preview(url)" imageClass="rounded" :maxWidth="500" :maxHeight="350"></free-image>
				
				<!-- 音频 -->
				<view v-else-if="item.msg_type === 'audio'" 
				class="flex align-center"
				@click="openAudio">
					<image v-if="!isother" :src=" !audioPlaying ? '/static/audio/audio3.png' : '/static/audio/play.gif'" 
					style="width: 50rpx;height: 50rpx;" 
					class="mx-1"></image>
					<text class="font">{{item.options.time + '"'}}</text>
					<image v-if="isother" :src=" !audioPlaying ? '/static/audio/audio3.png' : '/static/audio/play.gif'"
					style="width: 50rpx;height: 50rpx;" 
					class="mx-1"></image>
				</view>
				
				<!-- 视频 -->
				<view v-else-if="item.msg_type === 'video'"
				class="position-relative rounded"
				@click="openVideo">
					<free-image :src="item.options.poster" imageClass="rounded" :maxWidth="300" :maxHeight="350" @load="loadPoster"></free-image>
					<text class="iconfont text-white position-absolute" style="font-size: 80rpx;width: 80rpx;height: 80rpx;" :style="posterIconStyle">&#xe737;</text>
				</view>
				
			</div>
			<!-- 本人 -->
			<template v-if="!isother">
				<text v-if="hasLabelClass" class="iconfont text-chat-item font-md position-absolute chat-right-icon">&#xe619;</text>
				<free-avater size="70" :src="myAvator"
				clickType="navigate"></free-avater>
			</template>
		</view>
		
	</div>
</template>

<script>
	import freeAvater from "@/components/free-ui/free-avater.vue"
	import freeImage from './free-image.vue';
	import $T from "@/common/free-lib/time.js"
	
	import { mapState,mapActions } from 'vuex'
	
	var JIM = getApp().globalData.JIM;
	var _this;
	export default {
		components: {
			freeAvater,
			freeImage
		},
		props: {
			item: Object,
			index:Number,
			// 上一条消息的时间戳
			pretime:[Number,String],
			avator:String,
			myAvator:String,
			username:String
		},
		data() {
			return {
				innerAudioContext:null,
				audioPlaying:false,
				// 默认封面的宽高
				poster:{
					w:100,
					h:100
				},
				url:"/static/images/noImg.jpg"
			}
		},
		computed: {
			// 是否是他人
			isother() {
				// 获取他人id
				return this.item.from_id === this.username
			},
			// 显示的时间
			showTime(){
				return $T.getChatTime(this.item.create_time,this.pretime)
			},
			// 是否需要气泡样式
			hasLabelClass(){
				return this.item.msg_type === 'text' || this.item.msg_type === 'audio'
			},
			// 气泡的样式
			labelClass(){
				let label = this.hasLabelClass ? 'bg-chat-item mr-3' : 'mr-3'
				return this.isother ? 'bg-white ml-3' : label
			},
			labelStyle(){
				if (this.item.msg_type === 'audio') {
					let time = this.item.options.time || 0
					let width = parseInt(time) / (60/500)
					width = width < 150 ? 150 : width
					return `width:${width}rpx;`
				}
			},
			// 短视频封面图标位置
			posterIconStyle(){
				let w = this.poster.w/2 - uni.upx2px(80)/2
				let h = this.poster.h/2- uni.upx2px(80)/2
				return `left:${w}px;top:${h}px;`
			},
			//获取图片
			getImg(){
				_this = this;
				JIM.getResource({'media_id' :this.item.msg_body.media_id}).onSuccess(function(data){
					  _this.url=data.url;
					  console.log('success:' + JSON.stringify(data));
				 }).onFail(function(data){
					   console.log('error:' + JSON.stringify(data));
				 });
				 return _this.url;
			},
		},
		mounted() {
			// 注册全局事件
			if (this.item.msg_type === 'audio') {
				this.audioOn(this.onPlayAudio)
			}
			// 监听是否撤回消息
			// #ifdef APP-PLUS-NVUE
			this.$watch('item.isremove',(newVal,oldVal)=>{
				if (newVal) {
					const animation = weex.requireModule('animation')
					this.$nextTick(()=>{
						animation.transition(this.$refs.isremove, {
						    styles: {
								opacity:1
						    },
						    duration: 100, //ms
						    timingFunction: 'ease',
						    }, function () {
						       console.log('动画执行结束');
						    })
					})
				}
			})
			// #endif
		},
		// 组件销毁
		destroyed() {
			if (this.item.msg_type === 'audio') {
				this.audioOff(this.onPlayAudio)
			}
			// 销毁音频
			if (this.innerAudioContext) {
				this.innerAudioContext.destroy()
				this.innerAudioContext = null
			}
		},
		methods:{
			...mapActions(['audioOn','audioEmit','audioOff']),
			// 加载封面
			loadPoster(e){
				this.poster.w = e.w
				this.poster.h = e.h
			},
			// 监听播放音频全局事件
			onPlayAudio(index){
				if (this.innerAudioContext) {
					if (this.index !== index) {
						this.innerAudioContext.pause()
					}
				}
			},
			// 播放音频
			openAudio(){
				// 通知停止其他音频
				this.audioEmit(this.index)
				if (!this.innerAudioContext) {
					this.innerAudioContext = uni.createInnerAudioContext();
					this.innerAudioContext.src = this.item.data
					this.innerAudioContext.play()
					// 监听播放
					this.innerAudioContext.onPlay(()=>{
						this.audioPlaying = true
					})
					// 监听暂停
					this.innerAudioContext.onPause(()=>{
						this.audioPlaying = false
					})
					// 监听停止
					this.innerAudioContext.onStop(()=>{
						this.audioPlaying = false
					})
					// 监听错误
					this.innerAudioContext.onError(()=>{
						this.audioPlaying = false
					})
				} else {
					this.innerAudioContext.stop()
					this.innerAudioContext.play()
				}
			},
			// 预览图片
			preview(url){
				this.$emit('preview',url)
			},
			// 长按事件
			long(e){
				let x = 0
				let y = 0
				// #ifdef APP-PLUS-NVUE
				if (Array.isArray(e.changedTouches) && e.changedTouches.length > 0) {
					x = e.changedTouches[0].screenX
					y = e.changedTouches[0].screenY
				}
				// #endif
				// #ifdef MP
				x = e.detail.x
				y = e.detail.y
				// #endif
				this.$emit('long',{
					x,
					y,
					index:this.index
				})
			},
			// 打开视频
			openVideo(){
				uni.navigateTo({
					url: '/pages/chat/video/video?url='+this.item.data,
				});
			}
		}
	}
</script>

<style scoped>
	.chat-left-icon{
		left: 80rpx;top: 20rpx;
	}
	.chat-right-icon{
		right: 80rpx;
		top: 20rpx;
	}
	.chat-animate{
		/* #ifndef APP-PLUS-NVUE */
		opacity: 0;
		/* #endif */
	}
</style>
