<script>
export default{
    props: ['expense', 'income'],
    data(){
          return {
                show: false,
                allPosts: [],
                post: '',
                textEdit: '',
                edit_index: 0,
                title: 'Diagram',
            }
    },
    methods:{
        addPost() {
            this.show = true
            if(this.allPosts.length >= 1) {
                this.title = 'Diagrams'
            }
            this.allPosts.push({text: this.post, style:{}})
            console.log(this.allPosts.length);
            this.post = ''
        },
    },
}
</script>

<template>
    
    <form action="" @submit.prevent = "addPost()">
        <h2>New post</h2>
        <div class="form">
            <input type="text" v-model = "post" placeholder="new post">
            <button >Add post</button>
        </div>
    </form>
    
    <div v-if="show" class="posts">
        <h2>{{title}}</h2>
        <div class="posts__item" v-for="(posts, index) in allPosts" v-bind:style = "posts.style"><p>{{index + 1}}</p>{{posts.text}}</div>
    </div>
</template>

<style>
    .posts__item{
        display: flex;
        align-items: center;
    }
    .stat{
        display: flex;
        align-items: end;
        column-gap: 40px;
    }
    .sdgrm{
        color: black;
    }
    .food{
        width: 50px;
        height: 350px;
        background-color: rgb(78, 153, 98);
    }
    .car{
        width: 50px;
        height: 250px;
        background-color: rgb(78, 153, 98);
    }
    .clothes{
        width: 50px;
        height: 280px;
        background-color: rgb(78, 153, 98);
    }
</style>