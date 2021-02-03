<template>
    <div class="container">
      <div class="col-full">
          <div>
             <forum-list-items
              v-for="forum in forums"
               :key="forum['.key']"
               :forum="forum"
               />
          </div>
      </div>
  </div>
</template>

<script>
import forumListItems from './forumListItems.vue'
    export default {
  components: { forumListItems },
        props:{
            forums:{
                type:Array,
                required:true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>