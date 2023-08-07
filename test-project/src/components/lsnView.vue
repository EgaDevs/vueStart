<template>
    <div class="heading">
        <p>Lessons:</p>
    </div>
    <div class="lessons">
            <div class="lsn-card" v-for="item in lesson">
                <router-link :to = "{name: 'Marks', params:{id:item.lsnName}}">
                    <div class="info">
                        <div >{{item.lsnName}}</div>
                        <div>{{item.teacher}}</div>
                        <div>{{item.lsnDate}}</div>
                    </div>
                </router-link>
            </div>
    </div>
</template>

<script>
export default{
    name: "lesson",
    props: {
        lesson: {
            type: Array
        }
    }
}
</script>

<style>
    *{
        margin: 0;
    }
    .lessons{
        display: flex;
        flex-direction: row;
    }
    .lsn-card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 50px;
        width: 230px;
        height: 280px;
        margin: 15px;
        padding: 20px;
        background-color: rgb(149, 47, 47);
        color: #fff;
        border-radius: 30px;
    }
    .info{
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 50px;
        font-size: xx-large;
        font-weight: xx-large;
    }
</style>