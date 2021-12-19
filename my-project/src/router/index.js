import Vue from "vue";
import VueRouter from "vue-router";


import Accueil from '../view/Accueil/Accueil.vue'
import CollectionBMerci from '../view/CollectionBMerci/CollectionBMerci.vue'
import CollectionAudeEnjolive from '../view/CollectionAudeEnjolive/CollectionAudeEnjolive.vue'
import Apropos from '../view/Apropos/Apropos.vue'
import Produit from '../view/Produit/Produit.vue'

Vue.use(VueRouter);

const routes = [
   {
     path: "/",
     name: "Accueil",
     component: Accueil,
     meta:{
       title: 'Accueil'
     }
   },
   {
     path: "/Collection_TM",
     name: "CollectionT'M",
     component: CollectionBMerci,
     meta:{
       title: 'CollectionBMerci'
     }
   },
   {
     path: "/Collection_AudeEnjolive",
     name: "CollectionAudeEnjolive",
     component: CollectionAudeEnjolive,
     meta:{
       title: 'CollectionAudeEnjolive'
     }
   },
   {
     path: "/Apropos",
     name: "Apropos",
     component: Apropos,
     meta:{
       title: 'Apropos'
     }
   },
   {
     path: "/collection/:artiste/:id",
     name: "Produit",
     component: Produit,
     meta:{
       title: 'Produit'
     }
   },
   
 ];
 
 const router = new VueRouter({
   mode: "history",
   base: process.env.BASE_URL,
   routes,
 });
 
 router.beforeEach((to, from, next) =>{
   document.title = `${to.meta.title} | Galerie`;
   next();
 })



export default router;