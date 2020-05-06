import axios from 'axios'

//axios配置
axios.defaults.timeout=8000;

//http request拦截器
axios.interceptors.request.use(
  config =>{
    console.log('config', config)
    const token = localStorage.getItem('token');
    if (token){  //判断是否存在token，如果存在的话，则每个http header都加上token
      // config.headers.Authorization = 'token ${store.state.token}'
      config.headers['token'] = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error)
  }
);

//http response拦截器
axios.interceptors.response.use(
  response =>{
    console.log('response', response)
    return response
  },
  error => {
    if(error.response){
      switch (error.response.status){
        case 401: //    401 清除token信息并跳转到登录页面
          store.commit(types.LOGOUT);
          //只有在当前路由不是登录页面才跳转
          router.replace({
            		path:'login',
            		query:{redirect:router.currentRoute.fullPath}
         	 })
      }
    }
    return Promise.reject(error.response.data);  //返回接口返回的错误信息
  }
);

export default axios;