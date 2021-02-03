<template>
    <div class="post-list">
       <post-list-item v-for="post in posts" :key="post.index" :post="post"/>
    </div>
</template>

<script>
import PostListItem from './PostListItem.vue'
    export default {
  components: { PostListItem },
        props:{
            posts:{
                type:Array,
                required:true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>