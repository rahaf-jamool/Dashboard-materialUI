import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);

// async export const signIn = ({commit},Credentials) =>{
//     let response = await axios.post('url/api/auth/signin',Credentials)
//     console.log(response.data);
//     commit('attempt',response.data.token)
// }

// async export const attempt = ({commit}, token) =>{
//     commit('SET_TOKEN',token)
//     try{
//         let response = await axios.get('url/api/auth/me',{
//             headers:{
//                 'Authorization':'Bearer' + token
//             }
//         })
//         commit('SET_USER',response.data.user)
//     }catch(e){
//         commit('SET_TOKEN',null)
//         commit('SET_USER',null)
//     }
// }