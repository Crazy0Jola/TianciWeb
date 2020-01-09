<template>
    <view>
        <web-view :webview-styles="webviewStyles" :src="url"></web-view>
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
			console.log(e)
			this.url = e.url;
			if(e.type){
				this.url = e.url+'?type='+e.type;
			}
		}
    }
</script>

<style>

</style>