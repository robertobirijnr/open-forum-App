<template>
    <div>
      <div class="col-large push-top">
         <h1>{{thread.title}}</h1>

         <p>
             By <a href="#" class="link-unstyled">Bob Alaska</a>{{thread.publishedAt | formatDate}}
             <span style="float:right; margin-top:2px" class="hide-mobile text-faded text-small"> 3 replies by 3 contributors</span>
         </p>

        <post-list :posts="posts"/>
       <create-post 
       @save-post="addPost"
       :threadId="id"
       />

    </div>
    </div>
</template>

<script>
import dataSource from '@/data.json'
import PostList from '../components/PostList.vue'
import CreatePost from '../components/createPost.vue'
    export default {
  components: { PostList, CreatePost },
        name: 'threadShow',
       props:{
           id:{
               type:String,
               required:true
           }
       },
      data() {
        return {
            thread:dataSource.threads[this.id],
            
            
        }
     },
     computed:{
        posts(){
            const postIds = Object.values(this.thread.posts)
            return Object.values(dataSource.posts)
            .filter(post => postIds.includes(post['.key']))
        }
     },
     methods:{
         addPost({post}){
             const posts = post
             const postId = post['.key']
             this.$set(dataSource.posts, postId,posts)
             this.$set(this.thread.posts,postId,postId)
             this.$set(dataSource.users[post.userId].posts, postId, postId)
         }
         
     }
     
            
    }
</script>