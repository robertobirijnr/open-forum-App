<template>
    <div class="forum-listing">
        <div class="forum-details">
            <router-link :to="{name: 'forum', params:{id:forum['.key']}}" class="text-xlarge">{{forum.name}}</router-link>
            <p>{{forum.description}}</p>
        </div>

        <div class="threads-count">
            <p class="count">{{threadsCount}}</p> {{threadsCount === 1 ? 'thread':'threads'}}
        </div>

        <!-- <div class="last-thread">
            <img class="avatar" src="https://i.imgur.com/OqlZN48.jpg" alt="">
            <div class="last-thread-details">
                <a href="thread.html">Where is the sign in button?</a>
                <p class="text-xsmall">By <a href="profile.html">Joseph Kerr</a>, three hours ago</p>
            </div>
        </div> -->
    </div>
</template>

<script>
    export default {
        props:{
            forum:{
                type:Object,
                required:true
            }
        },
        computed:{
            threadsCount(){
                return this.forum.threads ? Object.values(this.forum.threads).length : 0
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>