<template>
   <div class="container">
      <div class="col-full push-top">
          <div class="forum-header">
              <div class="forum-details">
                  <h1>{{forum.name}}</h1>
                  <p class="text-lead">{{forum.description}}</p>
              </div>
              <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
          </div>
      </div>
      <div class="col-full push-top">
          <thread-list :threads="threads"/>
      </div>
  </div>

  
</template>

<script>
import threadList from '../components/threadList.vue'

    export default {
  components: { threadList },
  props:{
      id:{
          type:String,
          required:true
      }
  },
  computed:{
      forum(){
          return this.$store.state.dataSource.forums[this.id]
      },
      threads(){
          return Object.values(this.$store.state.dataSource.threads)
          .filter(thread => thread.forumId === this.id)
      }
  }
        
    }
</script>