<template>
  <div class="col-full">
    <h1>Welcome to the Forum</h1>
    <category-list :categories="categories"/>
  </div>
</template>

<script>
import categoryList from '@/components/categoryList'



export default {
  components: { categoryList },
  name: 'page-home',
  data() {
    return {
      categories: Object.values(this.$store.state.dataSource.categories),
      
    }
  },
  
  
}
</script>

