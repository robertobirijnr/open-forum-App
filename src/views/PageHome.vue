<template>
  <div class="col-full">
    <h1>Welcome to the Forum</h1>
    <thread-list :threads="threads"/>
  </div>
</template>

<script>
import dataSource from '@/data.json'
import threadList from '@/components/threadList'

export default {
  components: { threadList },
  name: 'HelloWorld',
  data() {
    return {
      threads: Object.values(dataSource.threads),
      posts:dataSource.posts,
      users:dataSource.users
    }
  },
  
}
</script>

