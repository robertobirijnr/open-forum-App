<template>
    <div class="post">
        <div class="user-info">
        <a href="#" class="user-name">{{users.name}}</a>

        <a href="#">
            <img :src="users.avatar" class="img-round" alt="">
        </a>

        <p class="desktop-only text-small">{{userPostCount}}</p>
        </div>

        <div class="post-content">
        <div>
        {{post.text}}
        </div>
        </div>
        <div class="post-date text-faded">
           {{post.publishedAt |formatDate}}
        </div>
        </div>
</template>

<script>

    export default {
        props:{
            post:{
                type:Object,
                required:true
            }
        },
        computed:{
            users(){
                return this.$store.state.dataSource.users[this.post.userId]
            },
            userPostCount(){
            return Object.keys(this.users.posts).length
        }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>