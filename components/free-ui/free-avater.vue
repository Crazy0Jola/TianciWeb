<template>
	<image :src="src" mode="aspectFill" :style="getStyle" :class="type" @click="clickEvent"></image>
</template>

<script>
	export default {
		props: {
			size:{
				type:[String,Number],
				default:90
			},
			src: {
				type: String,
				default: ""
			},
			type:{
				type:String,
				default:"rounded"
			},
			token:{
				type:String,
				default:""
			},
			clickType:{
				type:String,
				default:"none"
			}
		},
		computed: {
			getStyle() {
				return `width: ${this.size}rpx;height: ${this.size}rpx;`
			}
		},
		methods: {
			clickEvent() {
				switch (this.clickType){
					case 'navigate':
					if(this.token==uni.getStorageSync("setUserData").token){
						uni.showToast({
							"title":"您戳到了自己",
							"position":"bottom"
						})
						return;
					}
					uni.navigateTo({
						url: `/pages/mail/user-base/user-base?token=${this.token}`
					});
						break;
					default:
					this.$emit('click')
						break;
				}
			}
		},
	}
</script>

<style>
</style>
