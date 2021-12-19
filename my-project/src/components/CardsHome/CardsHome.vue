<template>
  <div class="collection__oeuvre">
    <div class="overlay">
      <p class="overlay__txt" >
        <router-link :to="{ name: `Collection${this.artiste}` }" class="overlay__txt">Voir Collection</router-link>
      </p>
    </div>
    <img :src="tab.img" alt="" class="oeuvre" />
  </div>
</template>

<script>
export default {
  name: "CardsHome",
  data() {
    return {
      artiste:this.tab.artiste,
    };
  },
  props: ["tab"],
  components: {},
  methods: {
    
   },
     
  computed:{
      
  }
};
</script>

<style lang="scss" scoped>
.collection__oeuvre{
   position: relative;
   width: 375px;
   height: 300px;
   overflow: hidden;
   display: flex;
   align-items: center;
   justify-content: center;
   @media(max-width: 1291px){
     width: 300px;
   }
    @media(max-width: 1066px){
      width: 250px;
      height: 200px;
    }
    @media(max-width: 900px){
        width: 375px;
        height: 300px;
   }
    @media(max-width: 450px){
        width: 375px;
   }

}


.oeuvre{
   max-width: 500px;
}

.overlay{
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
   width: 100%;
   background-color: #333;
   opacity: 0;
   color: white !important;
   font-size: 30px;
   font-weight: 600;
   text-decoration-line: overline;
   position: absolute;
}

 .overlay:hover{
   opacity: 0.5;
   transition-duration: 500ms;
   cursor: pointer;
   
 }

 .overlay__txt{
   opacity: 1;
   color: white!important;
 }

 .overlay__txt:hover{
    color: white!important;
    transform: scale(1.05);
    transition-duration: 300ms;
    opacity: 1;
 }
</style>
