import axios from "axios"

const service=axios.create({

    baseURL:"http://localhost:8080",

    timeout:5000

})

service.interceptors.request.use(config=>{

    const token=localStorage.getItem("token")

    if(token){

        config.headers.token=token

    }

    return config

})

service.interceptors.response.use(res=>{

    return res.data

})

export default service