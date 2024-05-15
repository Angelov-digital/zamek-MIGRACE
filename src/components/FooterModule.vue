<template>
    <div class="footer">
       <img class="logofooter" src="@/assets/logoBystriceWhite.png">
       <p class="">Hotel Zámek Velká Bystřice</p>
       <p class="">Obchodní podmínky</p>
    </div>    
</template>
  
<script>
  export default {
    name: 'FooterModule'
  };
</script>
  
<style scoped>
   .footer{
    background-color: #232D3E;
    align-items: center;
    text-align: center;
    height: 30vh;
    
   }
   .footer p{
    color: aliceblue;
   }
   .logofooter{
    max-width: 100px;
    margin-top: 40px;
   }
</style>
  