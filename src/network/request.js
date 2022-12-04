import axios from 'axios'

export function request(config){
    //1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    //2.axios的拦截器
    instance.interceptors.request.use(config => {//请求拦截
        //console.log(config)
        //放行
        return config
    },err => {
        console.log(err) 
    })
    instance.interceptors.response.use(res => {//响应拦截
        //console.log(res) 
        return res.data
    },err => {
        console.log(err) 
    })
    //3.发生真正的网络请求
    return instance(config);
}