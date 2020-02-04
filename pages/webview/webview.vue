<template>
    <view>
        <web-view :webview-styles="webviewStyles" :src="url">
		</web-view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                webviewStyles: {
                    progress: {
                        color: '#FF3333'
                    }
                },
				url:""
            }
        },
		onLoad:function (e) {
			var list =[];
			for(var i in e){
				var o = {key:"",value:""};
				o.key=i;
				o.value=e[i];
				list.push(o)
			}
			var url = e.url;
			var _this=this;
			if(list.length>1){
				url=url+"?"+list[1].key+"="+list[1].value;
				for(var i=2;i<list.length;i++){
					console.log("hhhhhhh")
					url = url+'&'+list[i].key+"="+list[i].value;
				}
			}
			this.url=url;
		},
		onNavigationBarButtonTap(e) {//监听标题栏点击事件
			if (e.index == 0) {
				uni.switchTab({
					url:'../tabbar/my/my'
				})
			}
		},
    }
</script>

<style>
</style>