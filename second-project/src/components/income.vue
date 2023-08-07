<script>
export default{
    data() {
        return{
            amount: '',
            dater: '',
            category: '',
            amounts: [],
        }
    },
    methods:{
        addIncome(){
            this.amounts.push({amount: this.amount, date:this.dater, cat:this.category})
            console.log(this.amounts.length);
            this.amount = ''
            this.dater = ''
            this.category = ''
        }
    }
}
</script>

<template>
    <h1>Test 1</h1>
    <div class="inc-main">
        <form action="" @submit.prevent="addIncome">
            <div class="income">
                <label for="amount">Amount:</label>
                <input type="number" placeholder="Enter amount" name="amount" v-model="amount" required>
                <label for="date">Date:</label>
                <input type="date" placeholder="Enter date" name="date" v-model="dater" required>
                <label for="category">Category:</label>
                <input type="text" placeholder="Enter category" name="category" v-model="category" required>
                <button type="submit">Send</button>
            </div>
        </form>
        <!-- <div class="posts">
            <h2>{{title}}</h2>
            <div class="posts__item" v-for="(amount, dater, category) in amounts">{{amount.text}}</div>
        </div> -->
        <div class="income-info">
            <table class="table">
                <thead>
                    <tr class="namings">
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="posts__item" v-for="item in amounts">
                        <td>{{item.amount}}</td>
                        <td>{{item.date}}</td>
                        <td>{{item.cat}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style>
    .inc-main{
        display: flex;
        align-items: center;
        column-gap: 300px;
    }
    .income{
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
    .income-info{
        width: 700px;
        height: 350px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(78, 153, 98);
        border-radius: 30px;
        color: #000000;
    }
    td{
        display: flex;
    }
    .posts{
        display: flex;
        width: 100px;
    }
    .posts__item{
        display: flex;
        width: 40px;
    }
</style>