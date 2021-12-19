<template>
   <div class="collection">
      <div class="collection__title">
         <div class="title"><h1>Collection T'M</h1></div>
         <div class="title__separateur"></div>
      </div>
      <div class="collection__tableaux " >
         <card v-bind:props="props" v-for="(props, index) in galerieBMerci" v-bind:key="index" > 
         </card>
     </div>
   </div>
</template>

<script>

import Card from '../../components/Cards/Cards.vue'

export default {
   name:'CollectionBMerci',
   data(){
      return{
        
      }
   },
   components:{
      'card' : Card
   },
   computed:{
      galerieBMerci(){
         return this.$store.state.GalerieBMerci
      },
   },
}
</script>

<style lang="scss" scoped>

.collection{
   max-width: 1440px;
   margin: 0 auto;

   &__title{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 170px;
   }
}

.title{
   font-size: 20px;
}

h1{
   margin: 0;
   margin-bottom: 10px;
}

.title__separateur{
   width: 20%;
   border-bottom: 1px solid #333;
   margin-top: 0;
}

.collection__tableaux{
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-evenly;
   gap: 15px;
}

</style>