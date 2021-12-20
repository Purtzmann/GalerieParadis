<template>
  <div id="app" >
    <header-top></header-top>
    <router-view></router-view>
    <footer-bot></footer-bot>
  </div>
</template>

<script>

import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'



export default {
  name: 'App',
  data(){
    return{
      
    }
    
  },
  components: {
    "header-top" : Header,
    "footer-bot" : Footer,
  },
  computed:{
    
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gruppo&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Gruppo", sans-serif;
  font-weight: lighter;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
}


a{
  text-decoration: none;
  list-style-type: none;
  color: black;

}
 

</style>
