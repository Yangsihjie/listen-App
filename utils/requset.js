//导入公用请求地址
import config from '../config.js'
//配置uni.request请求  利用es6class类实现
class HTTP {
	//请求
	request({url,data={},method}){
		return new Promise((resolve,reject)=>{
			this._request(url,resolve,reject,data,method)
		})
	};
	
	//具体请求
	_request(url,resolve,reject,data,method='GET'){
		uni.request({
			url:config.api_base_url  + url,
			data,
			method,
			success(res) {
				resolve(res)
			},
			fail(err) {
				reject(err)
			}
		})
	}
	
}
export {HTTP}