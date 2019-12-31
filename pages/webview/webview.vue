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
			this.url = e.url;
		}
    }
</script>

<style>

</style>