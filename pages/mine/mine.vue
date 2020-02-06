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
			<view class="cu-form-group">
				<view class="title">兴趣爱好</view>
				<textarea auto-height v-model="interest" maxlength="-1"  placeholder="请输入兴趣爱好"></textarea>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">国家</view>
				<picker @change="countryListChange" mode="selector" :value="countryListIndex" :range="countryList" range-key="name">
					<view class="picker">
						{{countryListIndex>-1?countryList[countryListIndex].name:'请选择国家'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-if="provinceList.length>0">
				<view class="title">省份</view>
				<picker @change="provinceListChange" :value="provinceListIndex" :range="provinceList" range-key="name">
					<view class="picker">
						{{provinceListIndex>-1?provinceList[provinceListIndex].name:'请选择省份'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-if="cityList.length>0">
				<view class="title">市级</view>
				<picker @change="cityListChange" :value="cityListIndex" :range="cityList" range-key="name">
					<view class="picker">
						{{cityListIndex>-1?cityList[cityListIndex].name:'请选择市级'}}
					</view>
				</picker>
			</view>
			<!-- <view class="cu-form-group" v-if="districtList.length>0">
				<view class="title">县区</view>
				<picker @change="districtListChange" :value="districtListIndex" :range="districtList" range-key="name">
					<view class="picker">
						{{districtListIndex>-1?districtList[districtListIndex].name:'请选择县区'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-if="streetList.length>0">
				<view class="title">街道</view>
				<picker @change="streetListChange" :value="streetListIndex" :range="streetList" range-key="name">
					<view class="picker">
						{{streetListIndex>-1?streetList[streetListIndex].name:'请选择街道'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-if="communityList.length>0">
				<view class="title">社区</view>
				<picker @change="communityListChange" :value="communityListIndex" :range="communityList" range-key="name">
					<view class="picker">
						{{communityListIndex>-1?communityList[communityListIndex].name:'请选择社区'}}
					</view>
				</picker>
			</view> -->
			<view class="cu-form-group margin-top">
				<view class="title">生日</view>
				<dyDatePicker @getData="getBirthday" :childValue="birthday" placeholder="请选择生日"></dyDatePicker>
			</view>
			<view class="cu-form-group">
				<view class="title">星座</view>
				<picker @change="constellationListChange" :value="constellationListIndex" :range="constellationList">
					<view class="picker">
						{{constellationListIndex>-1?constellationList[constellationListIndex]:'请选择星座'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">民族</view>
				<picker @change="nationListChange" :value="nationListIndex" :range="nationList">
					<view class="picker">
						{{nationListIndex>-1?nationList[nationListIndex]:'请选择民族'}}
					</view>
				</picker>
			</view>
			
			<view class="cu-form-group margin-top">
				<view class="title">联系方式</view>
				<button class='cu-btn bg-blue shadow' @click="addPhone">添加</button>
			</view>
			
			<view class="cu-card case"  v-for="(item,index) in phoneList" :key="index">
				<view class="cu-item shadow">
					<view class="cu-form-group">
						<view class="title">类型</view>
						<input v-model="type[index]"  placeholder="请输入类型(如QQ/微信/抖音号/微博等)" name="input"></input>
					</view>
					<view class="cu-form-group">
						<view class="title">号码</view>
						<input v-model="phone_number[index]"  placeholder="请输入号码" name="input"></input>
					</view>
					<view class="cu-form-group flex justify-end">
						<button class='cu-btn bg-blue shadow' @click="delPhone(index)">删除</button>
					</view>
				</view>
			</view>
			
			
			<view class="cu-form-group margin-top">
				<view class="title">教育经历</view>
				<button class='cu-btn bg-blue shadow' @click="addEdu">添加</button>
			</view>
			
			<view class="cu-card case"  v-for="(item,index) in educationList" :key="index">
				<view class="cu-item shadow">
					<view class="cu-form-group">
						<view class="title">学校名称</view>
						<input v-model="education_name[index]"  placeholder="请输入教育名称" name="input"></input>
					</view>
					<view class="cu-form-group">
						<view class="title">院校专业</view>
						<input v-model="administrative_unit[index]"  placeholder="请输入学校专业" name="input"></input>
					</view>
					<view class="cu-form-group">
						<view class="title">学历学位</view>
						<input v-model="degree[index]"  placeholder="请输入学历学位" name="input"></input>
					</view>
					<view class="cu-form-group">
					<view class="title">入学时间</view>
						<dyDatePicker @getData="getData($event,'admission_date',index)" :childValue="admission_date[index]" placeholder="请选择入学时间"></dyDatePicker>
					</view>
					<view class="cu-form-group">
					<view class="title">毕业时间</view>
						<dyDatePicker @getData="getData($event,'graduate_date',index)" :childValue="graduate_date[index]" placeholder="请选择毕业时间"></dyDatePicker>
					</view>
					<view class="cu-form-group flex justify-end">
						<button class='cu-btn bg-blue shadow' @click="delEdu(index)">删除</button>
					</view>
				</view>
			</view>
			
			<view class="cu-form-group margin-top">
				<view class="title">工作经历</view>
				<button class='cu-btn bg-blue shadow' @click="addWork">添加</button>
			</view>
			
			<view class="cu-card case"  v-for="(item,index) in workList" :key="index">
				<view class="cu-item shadow">
					<view class="cu-form-group">
						<view class="title">公司名称</view>
						<input v-model="company[index]"  placeholder="请输入公司名称" name="input"></input>
					</view>
					<view class="cu-form-group">
						<view class="title">工作职位</view>
						<input v-model="post[index]"  placeholder="请输入工作职位" name="input"></input>
					</view>
					<view class="cu-form-group">
						<view class="title">工作简述</view>
						<textarea auto-height v-model="work_describe[index]" maxlength="-1"  placeholder="请输入工作简述"></textarea>
					</view>
					<view class="cu-form-group">
					<view class="title">入职时间</view>
						<dyDatePicker @getData="getData($event,'start_time',index)" :childValue="start_time[index]" placeholder="请选择入职时间"></dyDatePicker>
					</view>
					<view class="cu-form-group">
					<view class="title">离职时间</view>
						<dyDatePicker @getData="getData($event,'end_time',index)" :childValue="end_time[index]" placeholder="请选择离职时间"></dyDatePicker>
					</view>
					<view class="cu-form-group flex justify-end">
						<button class='cu-btn bg-blue shadow' @click="delWork(index)">删除</button>
					</view>
				</view>
			</view>
			

			<view class="padding flex flex-direction">
				<button @click="save" class="cu-btn bg-blue lg">保存</button>
			</view>
		</form>
	</view>
</template>

<script>
	import dyDatePicker from '../../components/dy-Date/dy-Date.vue'
	var SERVER_API = getApp().globalData.SERVER_API
	var _this;
	export default {
		components: {
			dyDatePicker
		},
		data() {
			return {
				constellationListIndex: -1,
				nationListIndex:-1,
				countryListIndex:-1,
				provinceListIndex:-1,
				cityListIndex:-1,
				districtListIndex:-1,
				communityListIndex:-1,
				streetListIndex:-1,
				
				
				mCompany:"",
				mPost:"",
				mDesc:"",
				myToken:"",
				interest:"",
				birthday:"",
				
				constellationList: ['白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天秤座','天蝎座','射手座','摩羯座','水瓶座','双鱼座'],
				nationList:['汉族','壮族','回族','满族','维吾尔族','苗族','彝族','土家族','藏族','蒙古族','侗族','布依族','瑶族','白族','朝鲜族','哈尼族','黎族','哈萨克族','傣族','畲族','傈僳族','东乡族','仡佬族','拉祜族','佤族','水族','纳西族','羌族','土族','仫佬族','锡伯族','柯尔克孜族','景颇族','达斡尔族','撒拉族','布朗族','毛南族','塔吉克族','普米族','阿昌族','怒族','鄂温克族','京族','基诺族','德昂族','保安族','俄罗斯族','裕固族','乌孜别克族','门巴族','鄂伦春族','独龙族','赫哲族','高山族','珞巴族','塔塔尔族'],
				countryList:[],
				provinceList:[],
				districtList:[],
				cityList:[],
				communityList:[],
				streetList:[],
				
				constellation:"",
				nation:"",
				country:'',
				province:'',
				city:'',
				district:'',
				comunity:'',
				street:'',
				
				//教育经历
				educationList:[],
				education_name:[],
				administrative_unit:[],
				degree:[],
				admission_date:[],
				graduate_date:[],
				
				//工作经历
				workList:[],
				work_describe:[],
				company:[],
				post:[],
				start_time:[],
				end_time:[],
				
				//联系方式
				phoneList:[],
				type:[],
				phone_number:[],
				
			}
		},
		methods: {
			getBirthday(e){
				_this.birthday=e;
			},
			getData(e,key,index){
				if(key=="admission_date"){
					this.admission_date[index]=e;
				}
				if(key=="graduate_date"){
					this.graduate_date[index]=e;
				}
				if(key=="start_time"){
					this.start_time[index]=e;
				}
				if(key=="end_time"){
					this.end_time[index]=e;
				}
			},
			addEdu(){
				var obj={
					"administrative_unit": "",
					"admission_date": "",
					"degree": "",
					"education_name": "",
					"graduate_date": ""
				}
				_this.educationList.push(obj)
			},
			addWork(){
				var obj={
					"start_time": "",
					"post": "",
					"work_describe": "",
					"end_time": "",
					"company": ""
				}
				_this.workList.push(obj)
			},
			addPhone(){
				var obj={
					"type": "",
					"phone_number": "",
				}
				_this.phoneList.push(obj)
			},
			delEdu(index){
				_this.educationList.splice(index,1)
				_this.education_name.splice(index,1)
				_this.administrative_unit.splice(index,1)
				_this.degree.splice(index,1)
				_this.admission_date.splice(index,1)
				_this.graduate_date.splice(index,1)
				
				console.log(_this.educationList)
			},
			delWork(index){
				_this.workList.splice(index,1)
				_this.work_describe.splice(index,1)
				_this.company.splice(index,1)
				_this.post.splice(index,1)
				_this.start_time.splice(index,1)
				_this.end_time.splice(index,1)
			},
			delPhone(index){
				_this.phoneList.splice(index,1)
				_this.phone_number.splice(index,1)
				_this.type.splice(index,1)
			},
			constellationListChange(e) {
				if(e.detail.value==-1){
					this.constellationListIndex = 0
					this.constellation = this.constellationList[0];
				}else{
					this.constellationListIndex = e.detail.value
					this.constellation = this.constellationList[e.detail.value];
				}
			},
			nationListChange(e) {
				if(e.detail.value==-1){
					this.nationListIndex = 0
					this.nation = this.nationList[0];
				}else{
					this.nationListIndex = e.detail.value
					this.nation = this.nationList[e.detail.value];
				}
			},
			countryListChange(e) {
				if(e.detail.value==-1){
					this.countryListIndex = 0
					this.country = this.countryList[0].id;
				}else{
					this.countryListIndex = e.detail.value
					this.country = this.countryList[this.countryListIndex].id;	
				}
				uni.request({
					url:SERVER_API+'appWeb/getSub',
					header: {
						"Content-Type":"application/x-www-form-urlencoded"
					},
					data:{
						parentId:this.country
					},
					method:"POST",
					success(res) {
						if(res.data.length==0){
							_this.provinceList=[]
							_this.cityList=[]
							_this.districtList=[]
							_this.streetList=[]
							_this.commuityList=[]
							_this.province=""
							_this.city=""
							_this.district=""
							_this.street=""
							_this.commuity=""
						}else{
							_this.provinceList=res.data;
						}
					}
				})
			},
			provinceListChange(e) {
				if(e.detail.value==-1){
					this.provinceListIndex = 0
					this.province = this.provinceList[0].id;
				}else{
					this.provinceListIndex = e.detail.value
					this.province = this.provinceList[e.detail.value].id;
				}
				uni.request({
					url:SERVER_API+'appWeb/getSub',
					header: {
						"Content-Type":"application/x-www-form-urlencoded"
					},
					data:{
						parentId:this.province
					},
					method:"POST",
					success(res) {
						if(res.data.length==0){
							_this.cityList=[]
							_this.districtList=[]
							_this.streetList=[]
							_this.commuityList=[]
							_this.city=""
							_this.district=""
							_this.street=""
							_this.commuity=""
						}else{
							_this.cityList=res.data;
						}
					}
				})
			},
			cityListChange(e) {
				if(e.detail.value==-1){
					this.cityListIndex = 0
					this.city = this.cityList[0].id;
				}else{
					this.cityListIndex = e.detail.value
					this.city = this.cityList[e.detail.value].id;
				}
				uni.request({
					url:SERVER_API+'appWeb/getSub',
					header: {
						"Content-Type":"application/x-www-form-urlencoded"
					},
					data:{
						parentId:this.city
					},
					method:"POST",
					success(res) {
						if(res.data.length==0){
							_this.districtList=[]
							_this.streetList=[]
							_this.commuityList=[]
							_this.district=""
							_this.street=""
							_this.commuity=""
						}else{
							_this.districtList=res.data;
						}
					}
				})
			},
			districtListChange(e) {
				if(e.detail.value==-1){
					this.districtListIndex = 0
					this.district = this.districtList[0].id;
				}else{
					this.districtListIndex = e.detail.value
					this.district = this.districtList[e.detail.value].id;
				}
				uni.request({
					url:SERVER_API+'appWeb/getSub',
					header: {
						"Content-Type":"application/x-www-form-urlencoded"
					},
					data:{
						parentId:this.district
					},
					method:"POST",
					success(res) {
						if(res.data.length==0){
							_this.streetList=[]
							_this.commuityList=[]
							_this.street=""
							_this.commuity=""
						}else{
							_this.streetList=res.data;
						}
					}
				})
			},
			streetListChange(e) {
				if(e.detail.value==-1){
					this.streetListIndex = 0
					this.street = this.streetList[0].id;
				}else{
					this.streetListIndex = e.detail.value
					this.street = this.streetList[e.detail.value].id;
				}
				uni.request({
					url:SERVER_API+'appWeb/getSub',
					header: {
						"Content-Type":"application/x-www-form-urlencoded"
					},
					data:{
						parentId:this.street
					},
					method:"POST",
					success(res) {
						if(res.data.length==0){
							_this.comunityList=[]
							_this.commuity=""
						}else{
							_this.comunityList=res.data;
						}
					}
				})
			},
			commuityListChange(e) {
				if(e.detail.value==-1){
					this.commuityListIndex = 0
					this.commuity = this.commuityList[0].id;
				}else{
					this.commuityListIndex = e.detail.value
					this.commuity = this.commuityList[e.detail.value].id;
				}
			},
			
			birthdayChange(e) {
				this.birthday= e.detail.value
			},
			DateChange(e,key,index){
				console.log(key)
				console.log(e.detail.value)
				console.log(index)
				if(key=="admission_date"){
					this.admission_date[index]=e.detail.value;
				}
				if(key=="graduate_date"){
					this.graduate_date[index]=e.detail.value;
				}
			},
			save(){
				if(_this.mCompany==""||_this.mPost==""||_this.mDesc==""){
					uni.showToast({
						"title":"写点什么吧~",
						"position":"bottom"
					})
					return;
				}
				var educationList=[]
				for(var i=0;i<_this.educationList.length;i++){
					var obj={
						educationName:_this.education_name[i],
						admissionDate:_this.admission_date[i],
						graduateDate:_this.graduate_date[i],
						administrativeUnit:_this.administrative_unit[i],
						degree:_this.degree[i]
					}
					if(JSON.stringify(obj) != "{}"){
						educationList.push(obj)
					}
				}
				var workList=[]
				for(var i=0;i<_this.workList.length;i++){
					var obj={
						describe:_this.work_describe[i],
						startTime:_this.start_time[i],
						endTime:_this.end_time[i],
						post:_this.post[i],
						company:_this.company[i]
					}
					if(JSON.stringify(obj) != "{}"){
						workList.push(obj)
					}
				}
				var phoneList=[]
				for(var i=0;i<_this.phoneList.length;i++){
					var obj={
						phoneType:_this.type[i],
						phoneName:_this.phone_number[i],
					}
					if(JSON.stringify(obj) != "{}"){
						phoneList.push(obj)
					}
				}
				var data={
					addressList:[],
					phoneList:phoneList,
					educationList:educationList,
					workList:workList
				}
				console.log(data)
				uni.request({
					url:SERVER_API+'appUser/modifyUserInfo',
					data:{
						mDesc:_this.mDesc,
						mPost:_this.mPost,
						mCompany:_this.mCompany,
						interest:_this.interest,
						birthday:_this.birthday,
						constellation:_this.constellation,
						nation:_this.nation,
						country:_this.country,
						province:_this.province,
						city:_this.city,
						district:_this.district,
						street:_this.street,
						commuity:_this.commuity,
					},
					method:"POST",
					header:{
						token:_this.myToken,
						"Content-Type":"application/x-www-form-urlencoded"
					},
					success(res) {
						// console.log(res)
						if(res.data.code==1){
							uni.request({
								url:SERVER_API+'appUser/modifyUserAttachedInfo',
								data:data,
								method:"POST",
								header:{
									token:_this.myToken
								},
								success(res) {
									// console.log(res)
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
		},
		onShow() {
			uni.request({
				url:SERVER_API+'appWeb/getCountry',
				success(res) {
					_this.countryList=res.data;
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
							_this.interest = _this.userInfo.baseInfo.interest;
							_this.birthday = _this.userInfo.baseInfo.birthday;
							_this.constellation = _this.userInfo.baseInfo.constellation;
							_this.educationList = _this.userInfo.educationList;
							_this.workList = _this.userInfo.workList;
							_this.phoneList=_this.userInfo.phoneList;
							_this.nation = _this.userInfo.baseInfo.nation;
							var country = _this.userInfo.baseInfo.country;
							var province = _this.userInfo.baseInfo.province;
							var city = _this.userInfo.baseInfo.city;
							var district = _this.userInfo.baseInfo.district;
							var street = _this.userInfo.baseInfo.street;
							var community = _this.userInfo.baseInfo.community;
							
							if(_this.educationList.length>0){
								
								for(var i=0,len=_this.educationList.length;i<len;i++){
									_this.education_name[i]=_this.educationList[i].education_name
									_this.administrative_unit[i]=_this.educationList[i].administrative_unit
									_this.degree[i]=_this.educationList[i].degree
									_this.admission_date[i]=_this.educationList[i].admission_date
									_this.graduate_date[i]=_this.educationList[i].graduate_date
								}
							}
							if(_this.workList.length>0){
								for(var i=0,len=_this.workList.length;i<len;i++){
									_this.work_describe[i]=_this.workList[i].work_describe
									_this.company[i]=_this.workList[i].company
									_this.post[i]=_this.workList[i].post
									_this.start_time[i]=_this.workList[i].start_time
									_this.end_time[i]=_this.workList[i].end_time
								}
							}
							if(_this.phoneList.length>0){
								for(var i=0,len=_this.phoneList.length;i<len;i++){
									_this.phone_number[i]=_this.phoneList[i].phone_number
									_this.type[i]=_this.phoneList[i].type
								}
							}
							
							if(country){
								for(var i=0,len=_this.countryList.length;i<len;i++){
									if(country==_this.countryList[i].name){
										_this.countryListIndex = i;
										_this.country=_this.countryList[i].id
										uni.request({
											url:SERVER_API+'appWeb/getSub',
											header: {
												"Content-Type":"application/x-www-form-urlencoded"
											},
											data:{
												parentId:_this.country
											},
											method:"POST",
											success(res) {
												_this.provinceList=res.data;
												if(province){
													for(var i=0,len=_this.provinceList.length;i<len;i++){
														if(province==_this.provinceList[i].name){
															_this.provinceListIndex=i;
															_this.province = _this.provinceList[i].id
															uni.request({
																url:SERVER_API+'appWeb/getSub',
																header: {
																	"Content-Type":"application/x-www-form-urlencoded"
																},
																data:{
																	parentId:_this.province
																},
																method:"POST",
																success(res) {
																	_this.cityList=res.data;
																	if(city){
																		for(var i=0,len=_this.cityList.length;i<len;i++){
																			if(city==_this.cityList[i].name){
																				_this.cityListIndex=i;
																				_this.city=_this.cityList[i].id
																				uni.request({
																					url:SERVER_API+'appWeb/getSub',
																					header: {
																						"Content-Type":"application/x-www-form-urlencoded"
																					},
																					data:{
																						parentId:_this.city
																					},
																					method:"POST",
																					success(res) {
																						_this.districtList=res.data;
																						if(city){
																							for(var i=0,len=_this.districtList.length;i<len;i++){
																								if(district==_this.districtList[i].name){
																									_this.districtListIndex=i;
																									_this.district = _this.districtList[i].id
																									uni.request({
																										url:SERVER_API+'appWeb/getSub',
																										header: {
																											"Content-Type":"application/x-www-form-urlencoded"
																										},
																										data:{
																											parentId:_this.district
																										},
																										method:"POST",
																										success(res) {
																											_this.streetList=res.data;
																											if(city){
																												for(var i=0,len=_this.streetList.length;i<len;i++){
																													if(street==_this.streetList[i].name){
																														_this.streetListIndex=i;
																														_this.street=_this.streetList[i].id
																														uni.request({
																															url:SERVER_API+'appWeb/getSub',
																															header: {
																																"Content-Type":"application/x-www-form-urlencoded"
																															},
																															data:{
																																parentId:_this.street
																															},
																															method:"POST",
																															success(res) {
																																_this.commuityList=res.data;
																																if(community){
																																	for(var i=0,len=_this.commuityList.length;i<len;i++){
																																		if(community==_this.commuityList[i].name){
																																			_this.communityListIndex=i;
																																			_this.commuity = _this.commuityList[i].id
																																			break;
																																		}
																																	}
																																}
																															}
																														})
																														break;
																													}
																												}
																											}
																										}
																									})
																									break;
																								}
																							}
																						}
																					}
																				})
																				break;
																			}
																		}
																	}
																}
															})
															break;
														}
													}
					
												}
											}
										})
										break;
									}
								}
							}
							if(_this.constellation){
								for(var i=0;i<12;i++){
									if(_this.constellation==_this.constellationList[i]){
										_this.constellationListIndex = i;
										break;
									}
								}
							}
							if(_this.nation){
								for(var i=0;i<12;i++){
									if(_this.nation==_this.nationList[i]){
										_this.nationListIndex = i;
										break;
									}
								}
							}
							console.log(_this.userInfo)
						}
					})
				}
			})
		}
	}
</script>

<style>
	@import "../../colorui/main.css";
	@import "../../colorui/icon.css";
</style>
