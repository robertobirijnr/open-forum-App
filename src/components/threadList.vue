<template>
    <div class="thread-list">
        <h2 class="list-title">Threads</h2>
        <thread-list-item
        v-for="thread in threads" :key="thread.index"
        :thread="thread"
        />
    </div>
</template>

<script>
import threadListItem from './threadListItem.vue'
    export default {
  components: { threadListItem },
  props:{
      threads:{
          type:Array,
          required:true
      }
  }
        
    }
</script>

