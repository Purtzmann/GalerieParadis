<template>
   <div class="produit" v-if="currentTab">
      <div class="container">
         <div class="produit__img">
            <img :src="currentTab[0].img" alt="">
         </div>
         <div class="produit__content">
            <div class="informations__haut">
               <div class="informations__title"><p>{{ currentTab[0].titre }}</p></div>
               <div class="informations__artiste"> <p>Artiste: {{ currentTab[0].artiste }}</p></div>
               <div v-if="currentTab[0].price > 0" class="informations__prix"> <p>Prix: {{ currentTab[0].price }}€</p></div>
               <div v-else class="informations__prix--vendu"> <p>{{ currentTab[0].price }}</p></div>
            </div>
            <div class="informations__bas">
               <h3>Les principales informations</h3>
               <div class="informations__main"><p>Fait main</p></div>
               <div class="informations__peinture"><p>Peinture utilisée: {{ currentTab[0].peinture }}</p></div>
               <div class="informations__dimension"><p>Dimension: {{ currentTab[0].dimension }}</p></div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name:"Produit",
   data() {
      return{
         currentArtiste: this.$route.params.artiste,
         currentTab: null,
      }
   },


   async mounted(){
      if(this.currentArtiste === "T'M"){
         this.currentTab = await this.$store.state.GalerieBMerci.filter((tab) =>{
         return tab.id === this.$route.params.id;
         })
      } else if(this.currentArtiste === "AudeEnjolive"){
         this.currentTab = await this.$store.state.GalerieAudeEnjolive.filter((tab) =>{
         return tab.id === this.$route.params.id;
         })
      }
   },
}
</script>

<style lang="scss"  scoped>

.produit{
   display: flex;
   align-items: center;

   max-width: 1440px;
   margin: 0 auto;

   .container {
      margin-top: 50px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 950px;
      flex-wrap: wrap;
      @media(max-width: 850px){
         justify-content: center;
      }
   }

   .produit__img{
      @media(max-width: 450px){
      width: 300px;
      }
      img{
         border-radius:10px ;
         @media(max-width: 450px){
            width: 300px;
            border-radius:5px
         }
      }
   }

   .produit__content{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 40%;
      @media(max-width: 850px){
         max-width: 96%;
      }
      


      .informations__haut{
         margin-top: 25px;
         .informations__title{
            margin-top: 15px;
            font-size: 30px;
            white-space: pre-wrap;
            @media(max-width: 450px){
               margin-top: 0px;
               font-size: 20px;
            }
         }
         .informations__artiste{
            margin-top: 15px;
            font-size: 25px;
            @media(max-width: 450px){
               margin-top: 8px;
               font-size: 20px;
            }
         }
         .informations__prix{
            margin-top: 15px;
            font-size: 30px;
            @media(max-width: 450px){
               font-size: 25px;
            }
            &--vendu{
               display: flex;
               justify-content: center;
               margin-top: 15px;
               font-weight: 900;
               font-size: 25px;
               background-color: rgb(255, 209, 124);
               padding: 10px;
               width: 40%;
               letter-spacing: 0.1em;
            }
         }
      }

      .informations__bas{

         margin-bottom: 25px;
         @media(max-width: 450px){
            margin-top: 25px;
         }

         h3{
            font-size: 25px;
            margin-bottom: 15px;
            font-weight: 600;
            @media(max-width: 450px){
               font-size: 20px;
               margin-bottom: 25px;
            }
         }
         .informations__main{
            margin-top: 10px;
            font-size: 18px;
         }
         .informations__peinture{
            margin-top: 10px;
            font-size: 18px;
         }
         .informations__dimension{
            margin-top: 10px;
            font-size: 18px;
         }
      }


   }


   
}






.produit__artiste{
   width: 100%;
}

img{
   max-width: 500px;
}



</style>