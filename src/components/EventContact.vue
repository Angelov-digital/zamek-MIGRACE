<template>

    <div class="headFrame2">
        
        <p class="nadpis2">Těšíme se na Vás!</p>
        
    </div>

    
    <div class="spacer1"></div> 

    <div class="headFrame2">
        <img class="line1" src="@/assets/svg/zámecké ornamenty-04.svg">
        <p class="nadpis1">Kontakt na ředitele</p>
        <img class="line1" src="@/assets/svg/zámecké ornamenty-02.svg">
    </div> 

    <div class="SplitFrame">
        
        <div class="mapFrame">
          <iframe id="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1293.0989739374677!2d17.357195098098796!3d49.59401647206571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47124cf2bf8ba553%3A0x46bbc665518ca663!2sHotel%20Z%C3%A1mek!5e0!3m2!1scs!2scz!4v1714394516836!5m2!1scs!2scz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <ContactCardMaster id="contact-card"/>

    </div>

</template>
  
<script>
import ContactCardMaster from './ContactCardMaster.vue';

export default {
  name: 'FrontSectionRezervace',
  components: {
    ContactCardMaster,
  }
};
</script>
  
<style scoped>
.SplitFrame{
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
}
.contact{
  padding-top: 40px;
}
.mapFrame{
  background-color: #709573 ;
  min-height: 480px;
  align-items: center;  
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.contactFrame{
  background-color: #FFEEC1 ;
  
  font-size: 1.2rem;
}
.contactFrame p{
  padding-left: 1.3rem;
}
#mapa{
  position: absolute;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
}

@media only screen and (max-width: 1255px) {
  .SplitFrame{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:center ;
  }
  .mapFrame{
    width: 100%;
  }
  .contactFrame{
    width: 100%;
    text-align: center;
    height: 350px;
  }
  #mapa{
    max-width: 90%;
  }
}
</style>
  