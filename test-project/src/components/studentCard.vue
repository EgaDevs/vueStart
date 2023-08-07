<template>
    <div class="heading">
        <p>Students:</p>
    </div>
    <div class="students">
        <div class="student-card" v-for="item in student">
            <div>{{item.surname}}</div>
            <div>{{item.name}}</div>
            <div>{{item.birth}}</div>
            <div>{{item.gender}}</div>
        </div>

    </div>
</template>

<script>
export default{
    name: "student",
    props: {
        student: {
            type: Array
        }
    },
}
</script>

<style>
    *{
        margin: 0;
    }
    .heading{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 75px;
        font-weight: 600;
    }
    .students{
        display: flex;
    }
    .student-card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 30px;
        width: 230px;
        height: 280px;
        margin: 15px;
        padding: 20px;
        background-color: rgb(149, 47, 47);
        color: #fff;
        font-size: x-large;
        border-radius: 30px;
    }
</style>