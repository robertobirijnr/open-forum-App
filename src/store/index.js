import Vue from 'vue'
import Vuex from 'vuex'
import dataSource from '@/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataSource
  },
  mutations: {
    setPost(state,{posts, postId}){
      Vue.set(state.dataSource.posts, postId,posts)
    },

    appendPostToThread(state,{postId,threadId}){
      Vue.set(state.threads[threadId].posts,postId,postId)
    },

    appendPostToUser(state,{postId,userId}){
      const user = state.users[userId]
      Vue.set(user.posts, postId, postId)
    }
  },
  actions: {
    createPost({commit},post){
      const postId = 'greatPost' + Math.random()
      commit('setPost',{post, postId})
      commit('appendPostToThread',{threadId: post.threadId,postId})
      commit('appendPostToUser',{userId:post.userId,postId})
      
    }
  },
  modules: {
  }
})
