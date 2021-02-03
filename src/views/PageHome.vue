<template>
  <div class="col-full">
    <h1>Welcome to the Forum</h1>
    <category-list :categories="categories"/>
  </div>
</template>

<script>
import dataSource from '@/data.json'
import categoryList from '@/components/categoryList'
console.log(dataSource)

export default {
  components: { categoryList },
  name: 'HelloWorld',
  data() {
    return {
      categories: Object.values(dataSource.categories),
      
    }
  },
  
}
</script>

