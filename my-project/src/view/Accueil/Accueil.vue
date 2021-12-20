<template>
   <div class="accueil">
     <div class="accueil__slider">
        <img :src="slider" alt="" class="slider"/>
     </div>
     <section class="accueil__collection">
        <div class="collections">
            <div class="collection">
               <h3 class="accueil__title"><router-link to='/Collection_TM'>Collection artiste T'M</router-link></h3>
               <div class="title__separateur"></div>
               <div class="collection__oeuvres" >
                  <CardsHome v-for="(tab, index) in galerieBMerciHome" v-bind:key="index" :tab="tab"/>
               </div>
            </div>
            <div class="collection">
               <h3 class="accueil__title"><router-link to='/Collection_AudeEnjolive'>Collection artiste Aude Enjolive</router-link></h3>
               <div class="title__separateur"></div>
               <div class="collection__oeuvres" >
                  <CardsHome v-for="(tab, index) in galerieAudeEnjoliveHome" v-bind:key="index" :tab="tab"/>
               </div>
            </div>
        </div>
     </section>
   </div>
</template>

<script>
import Slide1 from "../../assets/slider.jpg"
import CardsHome from "../../components/CardsHome/CardsHome.vue"

export default {

   name: 'Accueil',
   data() {
      return{
         slider: [Slide1],
      } 
   },
   components:{
      CardsHome,
   },
   computed:{
      galerieAudeEnjoliveHome(){
         return this.$store.getters.galerieAudeEnjoliveHome
      },
      galerieBMerciHome(){
         return this.$store.getters.galerieBMerciHome
      },
   },
}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.accueil{
   margin-bottom: 100px;
   display: flex;
   flex-direction: column;
   align-items: center;

}

.accueil__slider{
   height: 400px;
   overflow: hidden;
   display: flex;
   align-items: center;
   justify-content: center;
      @media(max-width: 900px){
      height: 200px;
   }
}

.slider{
   width: 100%;
}

.collections{
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-bottom: 50px;
   
}

.collection{
   margin-top: 40px;
   margin-bottom: 20px;
   padding: 25px;
      @media(max-width: 450px){
            margin-top: 20px;
            margin-bottom: 0px;
      }

}

.accueil__title{
   font-size: 30px;
      @media(max-width: 450px){
         font-size: 25px;
      }
}

.accueil__title:hover{
   font-weight: 700;
}

.title__separateur{
   width: 40%;
   border-bottom: 1px solid #333;
   margin-bottom: 25px;
   margin-top: 15px;
}

.collection__oeuvres{
   display: flex;
   flex-direction: row;
   align-items: center;
   flex-wrap: wrap;
   justify-content: center;
   gap: 30px;
   @media(max-width: 900px){
     flex-direction: column;
   }
}

</style>