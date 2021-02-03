<template>
    <div class="forum-list">
        <h2 class="list-title">
            <a href="#">{{category.name}}</a>
        </h2>

        <forum-list :forums="categoryForums"/>
    </div>
</template>

<script>
import forumList from './forumList.vue'
import dataSource from '@/data.json'
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
          return Object.values(dataSource.forums)
          .filter(forum => forum.categoryId === this.category['.key'] )
      }
  }
        
    }
</script>

<style lang="scss" scoped>

</style>