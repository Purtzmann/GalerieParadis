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
          { id: 7, titre: "ENJOLIVEUR N*13", price: "Vendu", img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N13.jpg'), dimension: '40 x 40cm', peinture:'Peinture Acrylique', artiste: "AudeEnjolive"},
          { id: 8, titre: "ENJOLIVEUR N*15", price: 35, img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N15.jpg'), dimension: '39 x 39cm', peinture:'Peinture Acrylique', artiste: "AudeEnjolive"},
          { id: 9, titre: "ENJOLIVEUR N*19", price: 45, img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N19.jpg'), dimension: '41 x 41cm', peinture:'Peinture Acrylique', artiste: "AudeEnjolive"},
          { id: 10, titre: "ENJOLIVEUR N*21", price: 45, img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N21.jpg'), dimension: '44.5 x 44.5cm', peinture:'Peinture Acrylique', artiste: "AudeEnjolive"},
          { id: 11, titre: "ENJOLIVEUR N*25", price: "Vendu", img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N25.jpg'), dimension: '39 x 39cm', peinture:'Peinture Acrylique', artiste: "AudeEnjolive"},
          { id: 12, titre: "ENJOLIVEUR N*27", price: "Vendu", img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N27.jpg'), dimension: '40 x 40cm', peinture:'Peinture Acrylique et papier', artiste: "AudeEnjolive"},
          { id: 13, titre: "ENJOLIVEUR N*29", price: "Vendu", img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N29.jpg'), dimension: '42 x 42cm', peinture:'Peinture Acrylique et papier', artiste: "AudeEnjolive"},
          { id: 14, titre: "ENJOLIVEUR N*31", price: "Vendu", img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N31.jpg'), dimension: '41.8 x 41.8cm', peinture:'Peinture Acrylique', artiste: "AudeEnjolive"},
          { id: 15, titre: "ENJOLIVEUR N*37", price: 35, img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N37.jpg'), dimension: '39 x 39cm', peinture:'Peinture Acrylique', artiste: "AudeEnjolive"},  
          { id: 16, titre: "ENJOLIVEUR N*39", price: 60, img: require('../assets/GalerieAudeEnjolive/ENJOLIVEUR_N39.jpg'), dimension: '42 x 42cm', peinture:'Peinture Acrylique', artiste: "AudeEnjolive"},  
      ],
      GalerieAudeEnjoliveHome:[],
      GalerieBMerci:[
        { id: 1, titre: "Bords de Charente un apr??s-midi d???hiver", price: 700, img: require('../assets/GalerieBMerci/Bords-de Charente-un apr??s-midi-dhiver.jpg'), dimension: '73 x 60cm', peinture:'Peinture Acrylique', artiste: "T'M"},
        { id: 2, titre: "Lumi??res c??lestes", price: 1000, img: require('../assets/GalerieBMerci/Lumi??res-c??lestes.jpg'), dimension: '116 x 89cm', peinture:'Peinture ?? l\'huile', artiste: "T'M"},
        { id: 3, titre: "Message en vie", price: "Vendu", img: require('../assets/GalerieBMerci/Message-en-vie.jpg'), dimension: '100 x 81cm', peinture:'Peinture ?? l\'huile', artiste: "T'M"},
        { id: 4, titre: "Voilier en admiration", price: "Vendu", img: require('../assets/GalerieBMerci/Voilier-en-admiration.jpg'), dimension: '100 x 73cm', peinture:'Peinture Acrylique', artiste: "T'M"},
        { id: 5, titre: "S??r??nit?? de fin du jour", price: "Vendu", img: require('../assets/GalerieBMerci/S??r??nit??-de-fin-du-jour.jpg'), dimension: '61 x 46cm', peinture:'Peinture ?? l\'huile', artiste: "T'M"},
        { id: 6, titre: "Soins en Art", price: "1500", img: require('../assets/GalerieBMerci/Soins-en-Art.jpg'), dimension: '116 x 89cm', peinture:'Peinture ?? l\'huile', artiste: "T'M"},
        { id: 7, titre: "S???Aimer", price: "1200", img: require('../assets/GalerieBMerci/Saimer.jpg'), dimension: '100 x 73cm', peinture:'Peinture Acrylique', artiste: "T'M"},
        { id: 8, titre: "Carrelets de pl??nitude", price: "500", img: require('../assets/GalerieBMerci/Carrelets-de-pl??nitude.jpg'), dimension: '90 x 30cm', peinture:'Peinture Acrylique', artiste: "T'M"},
      ],

      postLoaded: null,
   },
   getters:{
    galerieAudeEnjoliveHome(state){
      let tab1 = state.GalerieAudeEnjolive[9]
      let tab2 = state.GalerieAudeEnjolive[14]
      let tab3 = state.GalerieAudeEnjolive[15]
      
      state.GalerieAudeEnjoliveHome.push(tab1)
      state.GalerieAudeEnjoliveHome.push(tab2)
      state.GalerieAudeEnjoliveHome.push(tab3)
      console.log(state.GalerieAudeEnjoliveHome)
      
      return state.GalerieAudeEnjoliveHome
    },
    galerieBMerciHome(state){
      return state.GalerieBMerci.slice(0, 3)
    },

   },
   actions: {
     
   },
   mutation: {
    
      
   },
   modules: {

   }
})