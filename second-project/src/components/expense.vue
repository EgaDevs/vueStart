<script>
export default{
    data() {
        return{
            expen: '',
            datar: '',
            ctgry: '',
            comment: '',
            expenses: [],
        }
    },
    methods:{
        addExpense(){
            this.expenses.push({expen: this.expen, date:this.datar, cat:this.ctgry, cmnt: this.comment})
            console.log(this.expenses.length);
            this.expen = ''
            this.datar = ''
            this.ctgry = ''
            this.comment = ''
        }
    }
}
</script>

<template>
    <h1>Test 0</h1>
    <div class="exp-main">
        <form action="" @submit.prevent="addExpense">
            <div class="expense">
                <label for="amount">Amount:</label>
                <input type="number" placeholder="Enter amount" name="amount" v-model="expen" required>
                <label for="date">Date:</label>
                <input type="date" placeholder="Enter date" name="date" v-model="datar" required>
                <label for="category">Category:</label>
                <input type="text" placeholder="Enter category" name="category" v-model="ctgry" required>
                <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Enter comment" v-model="comment"></textarea>
                <button type="submit">Send</button>
            </div>
        </form>
        <div class="expense-info">
            <table class="table">
                <thead>
                    <tr class="namings">
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody v-for="item in expenses">
                    <tr class="posts__item">
                        <td>{{item.expen}}</td>
                        <td>{{item.date}}</td>
                        <td>{{item.cat}}</td>
                        <td>{{item.cmnt}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style>
    .exp-main{
        display: flex;
        align-items: center;
        column-gap: 300px;
    }
    .expense{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 310px;
        row-gap: 10px;
        height: 310px;
        margin: 15px;
        padding: 20px;
        background-color: rgb(78, 153, 98);
        color: #fff;
        border-radius: 30px;
    }
    .expense-info{
        width: 700px;
        height: 350px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(78, 153, 98);
        border-radius: 30px;
        color: #000000;
    }
    table{
        border-collapse: collapse;
    }
    .posts__item{
        display: flex;
        justify-content: space-between;
        
    }
    th, td{
        width: 100px;
        margin-right: 50px;
    }
</style>