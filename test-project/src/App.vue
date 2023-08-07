<script>
export default{
  data() {
      return {
        lessons: [
          {
            lsnName: 'Math',
            lsnDate: '01-05-2023',
            teacher: 'Mr. Werkesson',
            marks: [5, 6, 7],
          },
          {
            lsnName: 'Tennis',
            lsnDate: '02-05-2023',
            teacher: 'Mr. Blumer',
            marks: ['-'],
          },
          {
            lsnName: 'History',
            lsnDate: '03-05-2023',
            teacher: 'Mr. Irnazarov',
            marks: ['-'],
          },
          {
            lsnName: 'Judo',
            lsnDate: '04-05-2023',
            teacher: 'Mr. Takashi',
            marks: ['-'],
          },
          {
            lsnName: 'Physics',
            lsnDate: '05-05-2023',
            teacher: 'Mrs. Berkley',
            marks: ['-'],
          }
        ],
        students: [
          {
            surname: 'Egamberdiev',
            name: 'Abbos',
            birth: '04.11.2003',
            gender: 'Male'
          },
          {
            surname: 'Rashidov',
            name: 'Sharof',
            birth: '13.10.2004',
            gender: 'Male'
          },
          {
            surname: 'Abduvaliev',
            name: 'Bekhruz',
            birth: '25.01.2004',
            gender: 'Male'
          },
          {
            surname: 'Kaxarov',
            name: 'Abdumalik',
            birth: '23.12.2006',
            gender: 'Male'
          },
          {
            surname: 'Karimov',
            name: 'Husniddin',
            birth: '31.12.2005',
            gender: 'Male'
          },
        ]
      }
    }
}  
</script>

<template>
  <div class="page">
    <header class="header">
      <div class="header-name">
        <h1>Diary</h1>
      </div>
      <ul class="navigation">
        <li>
          <router-link :to = "{name: 'View Lessons'}">Lessons</router-link>      
        </li>
        <li>
          <router-link :to = "{name: 'Cards'}">Student Card</router-link>
        </li>
      </ul>
    </header>
  </div>
  <router-view :lesson="lessons" :student="students" :marks="marks"></router-view>
</template>

<style>
  body{
    background-color: rgb(255, 255, 255);
    color: rgb(149, 47, 47);
  }
  .header{
    background-color: rgb(149, 47, 47);
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
