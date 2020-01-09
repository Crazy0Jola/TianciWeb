<template>
	<view>
		<form>
			<view class="cu-form-group">
				<view class="title">我的公司</view>
				<input v-model="mCompany" placeholder="请输入公司名称" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">我的职位</view>
				<input v-model="mPost" placeholder="请输入职位" name="input"></input>
			</view>
			<view class="cu-form-group align-start">
				<view class="title">个人简介</view>
				<textarea auto-height v-model="mDesc" maxlength="-1"  placeholder="请输入个人简介"></textarea>
			</view>
			<view class="padding flex flex-direction">
				<button @click="save" class="cu-btn bg-blue lg">保存</button>
			</view>
		</form>
	</view>
</template>

<script>
	var SERVER_API = getApp().globalData.SERVER_API
	var _this;
	export default {
		data() {
			return {
				mCompany:"",
				mPost:"",
				mDesc:"",
				myToken:""
			}
		},
		methods: {
			save(){
				uni.request({
					url:SERVER_API+'appUser/modifyUserInfo',
					data:{
						mDesc:_this.mDesc,
						mPost:_this.mPost,
						mCompany:_this.mCompany
					},
					method:"POST",
					header:{
						token:_this.myToken,
						"Content-Type":"application/x-www-form-urlencoded"
					},
					success(res) {
						console.log(res)
						if(res.data.code==1){
							uni.showToast({
								"title":"保存成功"
							})
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
		onLoad(){
			_this=this;
			_this.myToken=uni.getStorageSync("setUserData").token;
			uni.request({
				url:SERVER_API+'appUser/getUserDetailInfo',
				data:{
					token:_this.myToken
				},
				method:"POST",
				header:{
					token:_this.myToken
				},
				success(res) {
					_this.userInfo = res.data.result;
					_this.mCompany=_this.userInfo.baseInfo.companyName;
					_this.mPost = _this.userInfo.baseInfo.post;
					_this.mDesc=_this.userInfo.baseInfo.description;
					console.log(_this.userInfo)
				}
			})
		}
	}
</script>

<style>
	@import "../../colorui/main.css";
	@import "../../colorui/icon.css";
</style>
