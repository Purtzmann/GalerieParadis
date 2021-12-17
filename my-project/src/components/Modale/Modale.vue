<template>
   <div class="bloc__modale" v-if='revele'>

      <div v-on:click="toggleModale" class="overlay"></div>

      <div class="modale">
         <div v-on:click="toggleModale" class="btn-modale"><font-awesome-icon :icon="['fas', 'times']" /></div>
         <div class="card__img">
            <img :src="props.img" v-on:click="toggleModale" alt="">
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "Modale",
   props: ['revele', "toggleModale", 'props']
}
</script>

<style lang="scss" scoped>


.bloc__modale{
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 10;
}

.overlay{
   background: #333;
   opacity: 0.6;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   cursor: pointer;
}

.modale{
   background: #f1f1f1;
   color: #333;
   position: fixed;
   height: 80%;
}

.btn-modale{
   position: absolute;
   top: 20px;
   right: 20px;
   cursor: pointer;
   background-color: #fff;
   width: 20px;
   height: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 100%;
}

.card__img{
   width: 100%;
   height: 100%;
   
   overflow: hidden;
   display: flex;
   align-items: center;
   justify-content: center;

   
}

img{
   max-width: 100%;
   height: 100%;
   cursor: pointer;
   border: 10px solid #fff;
}

</style>