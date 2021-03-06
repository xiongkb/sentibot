import axios from "axios";

export default {
    googleLogin: function () {
        // axios.get("http://localhost:3001/api/google")

        // window.open("https://sleepy-atoll-40002.herokuapp.com/api/google", "_self");

        if (process.env.NODE_ENV === 'production') {
            window.open("https://sentitalk.herokuapp.com/api/google","_self");
        
        }
        else {
            window.open("http://localhost:3001/api/google","_self");
        }

    },

    checkUser: function () {

        console.log("get user api")
        return axios.get("/api/checkuser")
    },

    logout: function () {
        console.log("in logout")
        return axios.get("/api/logout")
    },

    localSignup: function (data) {
        console.log("in signup")
        return axios.post("/api/signup", data)
    },

    localLogin: function (data) {
        console.log("in login")
        return axios.post("/api/localLogin", data)
    },
    chatLog: function (data) {
        return axios.post("/api/watson/analyzer")
    }


}