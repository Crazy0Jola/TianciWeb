import JMessage from './jmessage-wxapplet-sdk-1.4.2.min.js'
import md5 from './md5.min.js'
export default class Chat{
	constructor() {
		this.JIM=null;		
	}
	init(){
		var appkey='09970876f33e884a3624335c';
		var random_str="90zfjiak95849b58b3ef0e943421ed9";
		var key='e8e873e60245315a70ede4b2';
		var timestamp = (new Date()).getTime();
		var signature=md5("appkey="+appkey+"&timestamp="+timestamp+"&random_str="+random_str+"&key="+key);
		this.JIM = new JMessage({
			debug:true
		});
		this.JIM.init({
				  "appkey"    : appkey,
				  "random_str": random_str,
				  "signature" : signature,
				  "timestamp" : timestamp,
				  "flag":1
		}).onSuccess(function(data) {
			console.log('Init-success:' + JSON.stringify(data));		
		}).onFail(function(data) {
		    console.log('Init-error:' + JSON.stringify(data))		    
		});
	}
	getJIM(){
		let _that = this;
		if(!this.JIM){
			_that.init();
		}
		return this.JIM;
	}
}