import {createRouter,createWebHistory} from 'vue-router'

const routes=[

    {
        path:'/',
        redirect:'/login'
    },

    {
        path:'/login',
        component:()=>import('../views/Login.vue')
    },

    {
        path:'/index',
        component:()=>import('../layout/Layout.vue'),
        children:[
            {
                path:'dashboard',
                component:()=>import('../views/Dashboard.vue')
            },
            {
                path:'student',
                component:()=>import('../views/Student.vue')
            },
            {
                path:'class',
                component:()=>import('../views/Class.vue')
            },
            {
                path:'score',
                component:()=>import('../views/Score.vue')
            },
            {
                path:'profile',
                component:()=>import('../views/Profile.vue')
            }
        ]
    }

]

const router=createRouter({

    history:createWebHistory(),

    routes

})

export default router
router.beforeEach((to,from,next)=>{

const token=localStorage.getItem("token")

if(to.path=="/login"){

next()

}else{

if(token){

next()

}else{

next("/login")

}

}

})