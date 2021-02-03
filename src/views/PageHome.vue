<template>
  <div class="col-full">
    <h1>Welcome to the Forum</h1>
    <forum-list :forums="forums"/>
  </div>
</template>

<script>
import dataSource from '@/data.json'
import forumList from '@/components/forumList'
console.log(dataSource)

export default {
  components: { forumList },
  name: 'HelloWorld',
  data() {
    return {
      forums: Object.values(dataSource.forums),
      posts:dataSource.posts,
      users:dataSource.users
    }
  },
  
}
</script>

