<template>
    <div class="forum-list">
        <h2 class="list-title">
            <router-link :to="{name:'category', params:{id:category['.key']}}">
                {{category.name}}
            </router-link>
        </h2>

        <forum-list :forums="categoryForums"/>
    </div>
</template>

<script>
import forumList from './forumList.vue'

    export default {
  components: { forumList },
  props:{
      category:{
          required:true,
          type:Object
      }
  },
  computed:{
      categoryForums(){
          return Object.values(this.$store.state.dataSource.forums)
          .filter(forum => forum.categoryId === this.category['.key'] )
      }
  }
        
    }
</script>

<style lang="scss" scoped>

</style>