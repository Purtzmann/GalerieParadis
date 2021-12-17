import Vue from 'vue'
import Vuex from 'vuex'

//Firebase//



Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      GalerieAudeEnjolive:[
          { id: 1, titre: "ENJOLIVEUR N*1", price: 45, img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N1.jpg'), dimension: '42 x 42cm', peinture:'Peinture Acrylique', artiste: "AudeEnjolive"},
          { id: 2, titre: "ENJOLIVEUR N*3", price: 35, img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N3.jpg'), dimension: '44 x 44cm', peinture:'Peinture Acrylique', artiste: "AudeEnjolive"},
          { id: 3, titre: "ENJOLIVEUR N*5", price: 45, img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N5.jpg'), dimension: '44 x 44cm', peinture:'Peinture Acrylique', artiste: "AudeEnjolive"},
          { id: 4, titre: "ENJOLIVEUR N*7", price: 35, img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N7.jpg'), dimension: '39 x 39cm', peinture:'Peinture Acrylique', artiste: "AudeEnjolive"},
          { id: 5, titre: "ENJOLIVEUR N*9", price: 45, img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N9.jpg'), dimension: '39 x 39cm', peinture:'Peinture Acrylique', artiste: "AudeEnjolive"},
          { id: 6, titre: "ENJOLIVEUR N*11", price: 45, img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N11.jpg'), dimension: '39 x 39cm', peinture:'Peinture Acrylique', artiste: "AudeEnjolive"},
          { id: 7, titre: "ENJOLIVEUR N*13", price: 50, img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N13.jpg'), dimension: '40 x 40cm', peinture:'Peinture Acrylique', artiste: "AudeEnjolive"},
          { id: 8, titre: "ENJOLIVEUR N*15", price: 35, img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N15.jpg'), dimension: '39 x 39cm', peinture:'Peinture Acrylique', artiste: "AudeEnjolive"},
          { id: 9, titre: "ENJOLIVEUR N*19", price: 45, img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N19.jpg'), dimension: '41 x 41cm', peinture:'Peinture Acrylique', artiste: "AudeEnjolive"},
          { id: 10, titre: "ENJOLIVEUR N*21", price: 45, img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N21.jpg'), dimension: '44.5 x 44.5cm', peinture:'Peinture Acrylique', artiste: "AudeEnjolive"},
          { id: 11, titre: "ENJOLIVEUR N*25", price: 40, img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N25.jpg'), dimension: '39 x 39cm', peinture:'Peinture Acrylique', artiste: "AudeEnjolive"},
          { id: 12, titre: "ENJOLIVEUR N*27", price: 50, img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N27.jpg'), dimension: '40 x 40cm', peinture:'Peinture Acrylique et papier', artiste: "AudeEnjolive"},
          { id: 13, titre: "ENJOLIVEUR N*29", price: 60, img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N29.jpg'), dimension: '42 x 42cm', peinture:'Peinture Acrylique et papier', artiste: "AudeEnjolive"},
          { id: 14, titre: "ENJOLIVEUR N*31", price: "Vendu", img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N31.jpg'), dimension: '41.8 x 41.8cm', peinture:'Peinture Acrylique', artiste: "AudeEnjolive"},
          { id: 15, titre: "ENJOLIVEUR N*37", price: 35, img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N37.jpg'), dimension: '39 x 39cm', peinture:'Peinture Acrylique', artiste: "AudeEnjolive"},  
      ],
      GalerieBMerci:[
        { id: 1, titre: "Bords de Charente un après-midi d’hiver", price: 700, img: require('../assets/GalerieBMerci/Bords-de Charente-un après-midi-dhiver.jpg'), dimension: '73 x 60cm', peinture:'Peinture Acrylique', artiste: "BMerci"},
        { id: 2, titre: "Lumières célestes", price: 1000, img: require('../assets/GalerieBMerci/Lumières-célestes.jpg'), dimension: '116 x 89cm', peinture:'Peinture à l\'huile', artiste: "BMerci"},
        { id: 3, titre: "Message en vie", price: "Vendu", img: require('../assets/GalerieBMerci/Message-en-vie.jpg'), dimension: '100 x 81cm', peinture:'Peinture à l\'huile', artiste: "BMerci"},
        { id: 4, titre: "Voilier en admiration", price: "Vendu", img: require('../assets/GalerieBMerci/Message-en-vie.jpg'), dimension: '100 x 73cm', peinture:'Peinture Acrylique', artiste: "BMerci"},
        { id: 5, titre: "Sérénité de fin du jour", price: "Vendu", img: require('../assets/GalerieBMerci/Sérénité-de-fin-du-jour.jpg'), dimension: '61 x 46cm', peinture:'Peinture à l\'huile', artiste: "BMerci"},
        { id: 6, titre: "Soins en Art", price: "1500", img: require('../assets/GalerieBMerci/Soins-en-Art.jpg'), dimension: '116 x 89cm', peinture:'Peinture à l\'huile', artiste: "BMerci"},
        { id: 7, titre: "S’Aimer", price: "1200", img: require('../assets/GalerieBMerci/Saimer.jpg'), dimension: '100 x 73cm', peinture:'Peinture Acrylique', artiste: "BMerci"},
        { id: 8, titre: "Carrelets de plénitude", price: "500", img: require('../assets/GalerieBMerci/Carrelets-de-plénitude.jpg'), dimension: '90 x 30cm', peinture:'Peinture Acrylique', artiste: "BMerci"},
        
      ],
      postLoaded: true,
   },
   getters:{
    galerieAudeEnjoliveHome(state){
      return state.GalerieAudeEnjolive.slice(0, 3)
    },
    galerieBMerciHome(state){
      return state.GalerieBMerci.slice(0, 3)
    },
   },
   actions: {


   },
   mutation: {
    verif({state}){
      if(state.GalerieAudeEnjolive.length > 0){
        state.postLoaded = true
      }
    }
      
   },
   modules: {

   }
})