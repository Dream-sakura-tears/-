import { defineStore } from "pinia"

export const useUserStore = defineStore("user",{

    state:()=>({

        token:localStorage.getItem("token")||"",

        username:"admin",

        role:"管理员"

    }),

    getters:{

        isLogin:(state)=>state.token!==""

    },

    actions:{

        login(token){

            this.token=token

            localStorage.setItem("token",token)

        },

        logout(){

            this.token=""

            localStorage.removeItem("token")

        }

    }

})