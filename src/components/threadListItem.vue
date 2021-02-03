<template>
    <div class="thread">
        <div>
            <p>
                <router-link :to="`/thread/${thread['.key']}`">{{thread.title}}</router-link>
            </p>
            <p class="text-faded text-xsmall">
                By <a href="#">{{user}}</a> {{thread.publishedAt | formatDate}}.
            </p>
        </div>

        <div class="activity">
            <p class="replies-count">
                {{repliesCOunt}}replies
            </p>

            <!-- <img src="" alt="" class="avatar-medium"> -->

            <!-- <div>
                <p class="text-xsmall">
                    <a href="#">Eugenia Ofosu</a>
                </p>
                <p class="text-xsmall text-faded">2 hours Ago</p>
            </div> -->
        </div>
    </div>
</template>

<script>
import dataSource from '@/data.json'
    export default {
        props:{
            thread:{
                type:Object,
                required:true
            }
        },
        computed:{
            repliesCOunt(){
              return  Object.keys(this.thread.posts).length -1
            },
            user(){
                return dataSource.users[this.thread.userId].name
            }
        }
    }
</script>
