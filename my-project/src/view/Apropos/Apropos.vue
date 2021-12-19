<template>
    <div class="apropos">
      <div class="apropos__title">
         <div class="title"><h1>A propos</h1></div>
         <div class="title__separateur"></div>
      </div>
      <div class="apropos__artistes" >
         <div class="artiste__name">
            <h2>T'M</h2>
         </div>
         <div class="artiste__separateur"></div>
         <div class="artiste__content">
            <div class="artiste__img">
               <img :src="imgBMerci" alt="">
            </div>
            <div class="artiste__description">
               <p>Je peins dans une cabane de pêcheur en Charente-Maritime, au cœur d’un Paradis, source d’inspiration infinie. Les paysages marins me ressourcent en permanence.<br><br>
                  Les toiles réalisées en méditation apportent à celle ou celui qui la reçoit un sentiment de bien-être et de bonheur. Cela peut être plus qu’un sentiment…<br><br>
                  J’utilise  la peinture à l'huile et  l’acrylique. Les supports principaux sont les toiles ; il m’arrive de peindre sur des ardoises- anciens capteurs d’huîtres-, du bois, du papier.<br><br>
                  Le bord du chenal, le soleil, la pluie, la brume, sont autant de sources d’inspiration que ce soit le matin ou l’après-midi suivant mes envies dans l’instant présent. 
                  Je vous souhaite un beau et lumineux voyage intérieur à travers la découverte des œuvres.
               </p>
            </div>
         </div>
     </div>
     
     <div class="apropos__artistes" >
         <div class="artiste__name">
            <h2>AudeEnjolive</h2>
         </div>
         <div class="artiste__separateur"></div>
         <div class="artiste__content">
            <div class="artiste__img">
               <img :src="imgAudeEnjolive" alt="">
            </div>
            <div class="artiste__description">
               <p>Il était une fois une jeune fille qui rentrait chez elle et qui tomba nez à nez avec un enjoliveur, posé le long d'un mur sur un trottoir.<br><br>
                  Après avoir regardé à gauche et à droite si ce petit bout n'appartenait à personne, elle pris la décision de lui offrir une seconde jeunesse :<br><br>
                  "toi mon petit, on va te faire tout beau, tu verras"<br><br>
                  Et voilà !
               </p>
            </div>
         </div>
     </div>
   </div>
</template>

<script>

import imgBMerci from "../../assets/BMerciProfil.jpg"
import imgAudeEnjolive from "../../assets/AudeEnjoliveProfil.jpg"
export default {
   name: "Apropos",
   data() {
      return{
         imgBMerci,
         imgAudeEnjolive

      }
   },
}
</script>

<style lang="scss" scoped>

.apropos{
   max-width: 1000px;
   margin: 0 auto;
   padding: 20px;

   &__title{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 170px;
   }

   &__artistes{
      margin-bottom: 50px;
      .artiste__name{
         display: flex;
         align-items: center;
         height: 50px;
         h2{
            font-size: 30px;
         }
      }
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
   width: 10%;
   border-bottom: 1px solid #333;
   margin-top: 0;
   
}

.artiste__separateur{
   width: 60%;
   border-bottom: 1px solid black;
   margin-bottom: 25px;
}

.artiste__content{
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   @media(max-width: 700px){
      flex-direction: column;
   }
}
.artiste__img{
   img{
      width: 300px;
   }
}

.artiste__description{
   width: 50%;
   font-size: 17px;
   text-align: justify;
   @media(max-width: 700px){
    margin-top: 15px;
   }
   @media(max-width: 650px){
   width: 300px;
    margin-top: 15px;
   }
}

</style>