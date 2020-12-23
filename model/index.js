//配置请求api
import {HTTP} from'../utils/requset.js'
class IndexModel extends HTTP{
	
	GitIndexData(){
		return this.request({
			url:'app_index',
			method:'GET'
		})
	}
	
}


// 导出实例
export {IndexModel}