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
       :threadId="id"
       />

    </div>
    </div>
</template>

<script>
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
            thread:this.$store.state.dataSource.threads[this.id],
            
            
        }
     },
     computed:{
        posts(){
            const postIds = Object.values(this.thread.posts)
            return Object.values(this.$store.state.dataSource.posts)
            .filter(post => postIds.includes(post['.key']))
        }
     },  
            
    }
</script>