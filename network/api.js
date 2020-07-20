//封装request请求
const Base_Url = 'http://123.207.32.32:8000'
export const MyRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: Base_Url + options.url,
			method: options.method || 'Get',
			data: options.data || {},
			
			success: (res) => {
				// if(res.data.status !== 0){
				// 	return uni.showToast({
				// 		title: "获取数据失败"
				// 	})
				// }
				resolve(res)
			},
			
			fail: (err) => {
				return uni.showToast({
					title: "请求接口失败"
				})
				reject(err)
			}
		})
	})
}