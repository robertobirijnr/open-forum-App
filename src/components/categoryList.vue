<template>
    <div>
        <category-list-items 
        v-for="category in categories"
        :key="category.index"
        :category="category"
        />
    </div>
</template>

<script>
import CategoryListItems from './categoryListItems.vue'
    export default {
        components:{
            CategoryListItems
        },
        props:{
            categories:{
                type:Array,
                required:true
            }
        }
        
    }
</script>

<style  scoped>

</style>