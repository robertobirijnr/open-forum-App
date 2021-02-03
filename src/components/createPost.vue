<template>
     <form @submit.prevent="addPost">
        <div class="form-group">
            <textarea name="" v-model="PostText"  class="form-input"></textarea>
        </div>
        <div class="form-actions">
            <button class="btn-blue">Submit</button>
        </div>
        </form>
</template>

<script>
    export default {
        props:{
            threadId:{
                required:true
            }
        },
        data() {
            return {
                PostText:""
            }
        },
       methods:{
         addPost(){
          const postId = 'greatPost' + Math.random()

          const post = {
                 text:this.PostText,
                 publishedAt:Math.floor(Date.now()/1000),
                 threadId: this.threadId,
                 userId:'ALXhxjwgY9PinwNGHpfai6OWyDu2',
                 '.key': postId
             }
             
            
             
            this.$emit('save-post',{post})
            this.PostText = ""

            
         }
     }
    }
</script>

<style lang="scss" scoped>

</style>