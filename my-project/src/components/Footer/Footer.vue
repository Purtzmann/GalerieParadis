<template>
   <div class="footer">
      <div class="footer__separateur"></div>
      <div class="footer__information">
         <p>Contact</p>
         <p>Conditions</p>
         <p>© 2021 - Tous droits réservés</p>
         
      </div>
      
   </div>
</template>

<script>
export default {
   name: 'Footer',
}
</script>

<style lang="scss" scoped>


.footer{
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: #FFF;
   height: 250px;
   width: 100%;
}

.footer__separateur{
   width: 50%;
   border-bottom: 1px solid #333;
   margin-bottom: 30px;
}

.footer__information{
   display: flex;
   flex-direction: column;
   align-items: center;
   font-size: 20px;
}

</style>