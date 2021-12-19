<template>
   <div class="card">

      <modale v-bind:revele="revele" v-bind:toggleModale="toggleModale" v-bind:props="props"></modale>
      
      <div class="card__img">
         <router-link  :to="{name: 'Produit', params: {artiste: this.props.artiste, id: this.props.id}}" ><img :src="props.img" alt="" v-on:mouseover="show = !show" ></router-link>
         <transition name="fade">
         <div class="card__overlay" v-if="show">
            <div class="overlay__zoom" v-on:click="toggleModale"><font-awesome-icon :icon="['fas', 'search']" /></div>
            <div class="overlay__color">
               <div class="color--one"></div>
               <div class="color--two"></div>
            </div>
         </div>
         </transition>
      </div>
      
      <div class="card_informations">
         <div class="card__title">
            <p>{{ props.titre }}</p>
            
         </div>
         <div class="card__dimension">
            <p>{{ props.dimension }}</p>
            
         </div>
         <div class="cards__infoAndPrice">
            <div> <p class="card__info">{{ props.peinture }}</p></div>
            
            <div v-if="props.price > 0" class="card__price"><p>{{ props.price }}€</p></div>
            <div v-else class="card__price--vendu"><p>{{ props.price }}</p></div>
           
         </div>
      </div>
   </div>
</template>

<script>

import Modale from "../Modale/Modale.vue"

export default {
   name: 'Cards',
   data() {
      return{
        revele: false,
        active: true,
        show: false
      }
   },
   props:['props'],
   components:{
      "modale": Modale
   },
   methods:{
      toggleModale(){
         this.revele = !this.revele
      },
      toggleModale2(){
         this.active = !this.active
         setTimeout(()=>{
            this.active = !this.active
         }, 5000)

         
      }
   }
   
}

</script>

<style lang="scss" scoped>



.card{
   height: 370px;
   width: 420px;
   display: flex;
   flex-direction: column;
   margin-bottom: 0px;
   @media(max-width: 600px){
      width: 350px;
   }

   @media(max-width: 450px){
      width: 300px;
   }
   
}

.card__overlay{
   width: 70px;
   height: 240px;
   background-color: rgba(228, 228, 228, 0.5);
   position: absolute;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  transition: width .5s
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
  width: 0px;
}


.overlay__zoom{
   background-color: #fff;
   border-radius: 50px;
   height: 30px;
   width: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
   border: solid 3px rgb(54, 54, 54);
   cursor: pointer;
   
}



.overlay__color{
   height: 40%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
}


.card__img{
   width: 420px;
   height: 240px;
   overflow: hidden;
   display: flex;
   align-items: center;
   justify-content: right;
   @media(max-width: 600px){
      display: flex;
      align-items: center;
      justify-content: center;
      width: 350px;
   }
   @media(max-width: 450px){
      display: flex;
      align-items: center;
      justify-content: center;
      width: 300px;
   }
}

img{
   max-width: 420px;
   cursor: pointer;
   
}


.card__title{
   font-size: 22px;
   font-weight: bold;
}
.card__dimension{
   font-size: 20px;
    margin-top: 20px;
}

.cards__infoAndPrice{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
  
}

.card__info{
   font-size: 20px;
}

.card__price{
   font-weight: 700;
   font-size: 25px;
   padding: 10px;

   &--vendu{
      font-weight: 900;
      font-size: 25px;
      background-color: rgb(255, 209, 124);
      padding: 10px;
      @media(max-width: 600px){
         font-size: 20px;
         padding: 8px;
   }
      @media(max-width: 450px){
         font-size: 18px;
         padding: 6px;
   }
   }
}

</style>