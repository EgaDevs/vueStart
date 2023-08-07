<script>
export default{
    name: "lesson",
    props: {
        lesson: {
            type: Array
        },
        student: {
            type: Array
        },
    },

    data() {
        return {
            lsnName: '',
            surname: '',
            mark: '',
            markers: [],
        }
    },
    
    methods: {
        addMark() {
            this.markers.push({lesName: this.lsnName, srnme: this.surname, merk: this.mark})
            this.mark = ''
            this.surname = ''
            this.lsnName = ''
            // localStorage.setItem("myMark", this.mark);
        },
        getMark() {
            console.log(localStorage.getItem("myMark"))
        },
    }
}
</script>
<template>
    <div class="heading">
        <p>Lessons:</p>
    </div>
    <div class="marks">
            <div class="mrk_info">
                <div class="mark">
                    <form action="" @submit.prevent="addMark">
                        <div class="info_slct">
                            <select class="info_name" name="" id="" v-model="lsnName" required>
                                <option v-for="item in lesson">{{item.lsnName}}</option>
                            </select>

                            <select name="stud-info" id="" v-model="surname" required>
                                <option  v-for="item in student">{{item.surname}}</option>
                            </select>

                            <select class="info_name" name="" id="" v-model="mark" required>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
                
                <table>
                    <thead>
                        <tr class="studes">
                            <th v-for="item in student">{{item.surname}}</th>
                        </tr>
                    </thead>
                </table>
                
                <div class="quote">
                    <p>The roots of education are bitter, but the fruit is sweet. ©Aristotel</p>
                </div>
                <button @click="$router.go(-1)">Назад</button>
            </div>
        </div>

        <div class="stud-journal">
            <div class="stud" v-for="item in markers">
                    <div>{{item.lesName}}</div>
                    <div>{{item.srnme}}</div>
                    <div>{{item.merk}}</div>
            </div>
        </div>
    </template>
    

<style>
    *{
        margin: 0;
    }
    .mrk_info{
        display: flex;
        flex-direction: row;
        align-items: center;
        row-gap: 50px;
        width: 95%;
        height: 280px;
        margin: 15px;
        padding: 20px;
        background-color: rgb(149, 47, 47);
        color: #fff;
        border-radius: 30px;
    }
    .mark{
        display: flex;
        align-items: center;
        column-gap: 50px;
    }
    .info_slct{
        display: flex;
        flex-direction: column;
        row-gap: 30px;
    }
    .info_actn{
        display: flex;
        flex-direction: column;
        row-gap: 30px;
    }
    .info_name{
        width: 80px;
        height: 48px;
        background-color: #fff;
        color: rgb(149, 47, 47);
    }
    table{
        margin-left: 10%;
    }
    .studes{
        display: flex;
        flex-direction: column;
    }
    .quote{
        width: 250px;
        margin-left: 10%;
        font-size: xx-large;
    }
    button {
        background-color: #fff;
        border: none;
        color: rgb(149, 47, 47);
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin-left: 15%;
        border-radius: 15px;
    }
    .stud{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 250px;
        height: 55px;
        margin: 15px;
        background-color: rgb(149, 47, 47);
        color: #fff;
        border-radius: 15px;
        gap: 15px;
    }
    .stud-journal{
        display: flex;
    }
</style>