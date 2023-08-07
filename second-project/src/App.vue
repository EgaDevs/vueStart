<script>
</script>

<template>
  <div class="main">
    <header class="header">
      <div class="header-name">
        <h1>Test</h1>
      </div>
      <ul>
        <li><router-link :to = "{name: 'Show Expenses'}">Show Expenses</router-link> </li>
        <li><router-link :to = "{name: 'Show Incomes'}">Show Incomes</router-link></li>
        <li><router-link :to = "{name: 'Statistic'}">Statistic</router-link></li>
      </ul>
    </header>
  </div>
  <router-view :expense="expense" :income="income" :statistic="statistic"></router-view>
</template>

<style>
body{
  background-color: rgb(255, 255, 255);
  color: rgb(78, 153, 98);
}
.header{
  background-color: rgb(78, 153, 98);
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
  color: #fff;
}
</style>
