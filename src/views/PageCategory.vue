<template>
    <div class="col-full">
        {{category.name}}
        <category-list-items :category="category"/>
    </div>
</template>

<script>
import CategoryListItems from '../components/categoryListItems.vue'
    export default {
        props:{
            id:{
               type:String,
                required:true
            }
        },
        components:{
            CategoryListItems 
        },
        computed:{
            category(){
                return this.$store.state.dataSource.categories[this.id]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>