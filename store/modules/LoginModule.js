//Login数据
const state = {
    userData: '', //用户信息
	userInfo:'',//用户基本信息
}
const mutations = {
    set_UserData(state,UserData) {
        //赋值用户信息
        state.userData = UserData;
    },
	set_UserInfo(state,UserInfo) {
		state.userInfo = UserInfo;
	}
} 


const actions = {
    setUserData ({commit},UserData) {
        //赋值用户信息
        commit("set_UserData", UserData);
    },
	setUserInfo ({commit},UserInfo){
		commit("set_UserInfo",UserInfo);
	}
}
const getters = {
    getUserData(state){
        //获取用户信息
        return state.userData;
    },
	getUserInfo(state){
		return state.userInfo;
	}

}

//暴露出去
export default {
    state,
    mutations,
    actions,
    getters
}