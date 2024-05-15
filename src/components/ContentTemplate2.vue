<template>
  <section class="desktop">
    <div class="cont1 ">
      
      <div class="flex-item">
        <div class="mapFrameLeft">
            <iframe id="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1293.0989739374677!2d17.357195098098796!3d49.59401647206571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47124cf2bf8ba553%3A0x46bbc665518ca663!2sHotel%20Z%C3%A1mek!5e0!3m2!1scs!2scz!4v1714394516836!5m2!1scs!2scz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
      </div>

      <div class="flex-item">
        <div class="popis1">
          <div>
            <p class="nadpis3">Najdete nás</p>
            <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
          </div>
          <div class="spacer1vh"></div>
          <p class="p2">Hotel Zámek Velká Bystřice se nachází necelých 7,km od Olomouce, kousek  od hlavního tahu rychlostní silnice R35, která propojuje dálniční tepnu  D1 Praha – Ostrava.</p>
          <div class="spacer2vh"></div>
          <div class="buttonframe">
            <button class="buttonBlue">
              <router-link :to="{ path: '/accomodation', hash: '#reservation-form' }">  
                Rezervace
              </router-link>
            </button>
          </div>
          <div class="spacer2vh"></div>
          <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
          <p class="nadpis3">Adresa</p>
          <p class="p2"> 
            Hotel Zámek Velká Bystřice<br>
            Zámecké náměstí 773 <br>
            Velká Bystřice, 78353
          </p>

        </div> 
      </div>

      
      <div class="trapezoid"></div>
    
    </div>
      <!--////////////////////////////////////////////////////////////////////////////////////////////////////////-->
    <div class="cont2"> 

      <div class="flex-item">
        <img src="@/assets/hero.png" class="contImg">
      </div>


      <div class="flex-item">
        <div class="popis1 left blýn">
          <div class="contactFrame">
            <p class="nadpis3">Recepce:</p>

            <p class="p2">pondělí – neděle 7:30 až 18:00</p>

            <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">

            <p class="nadpis3">Rezervace ubytování a restaurace:</p>

            <p class="p2"> +420 585 351 451 <br>
              recepce@hotel-zamek.cz
            </p>
          
            <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">

            <p class="nadpis3">Ředitelka hotelu</p>

            <p class="p2"> Milada Vallášová Benčajová</p>

            <p class="p2"> +420 724 863 920</p>

            <p class="p2">reditel@hotel-zamek.cz</p>

          </div>
        </div> 
      </div>

      <div class="trapezoid2"></div>

      <img src="@/assets/hero.png" class="contImgb">
    </div>
      <!--////////////////////////////////////////////////////////////////////////////////////////////////////////-->
    <div class="cont3">

      <div class="flex-item">
        <img src="@/assets/phone.avif" class="contImg">
      </div>

      <div class="flex-item">
        <div class="popis1 cyan">
          <div class="contactFrame">

            <p class="nadpis3">provozní hotelu</p>
            <p class="p2">+420 727 969 811</p>
            <p class="p2">provozni@hotel-zamek.cz</p>

            <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">

            <p class="nadpis3">Provozovatel hotelu a fakturační adresa</p>

            <p class="p2">Hotel Zámek Velká Bystřice s.r.o.<br>
              Zámecké náměstí 773<br>
              Velká Bystřice, PSČ 78353<br>
              IČ: 29444772, DIČ: CZ29444772<br>
              Spisová značka C53625 vedená u Krajského soudu v Ostravě</p>
           
          
            <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">

          </div>
        </div> 
      </div>
      <div class="trapezoidSky"></div> 
    </div>

  </section>

  <section class="mobile">

    <iframe id="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1293.0989739374677!2d17.357195098098796!3d49.59401647206571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47124cf2bf8ba553%3A0x46bbc665518ca663!2sHotel%20Z%C3%A1mek!5e0!3m2!1scs!2scz!4v1714394516836!5m2!1scs!2scz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
    <div class="textMobile1 green">

      <div>
        <p class="nadpis2">Najdete nás</p>
        <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
      </div>
      <div class="spacer1vh"></div>
      <p class="p2">Hotel Zámek Velká Bystřice se nachází necelých 7,km od Olomouce, kousek  od hlavního tahu rychlostní silnice R35, která propojuje dálniční tepnu  D1 Praha – Ostrava.</p>
      <div class="spacer1vh"></div>
      <div class="buttonframe">
        
          <button class="buttonBlue">
            <router-link :to="{ path: '/accomodation', hash: '#reservation-form' }">  
              Rezervace
            </router-link>
          </button>
      
      </div>

    </div>
      <!--////////////////////////////////////////////////////////////////////////////////////////////////////////-->
    <div class="imgContainer">
      <img src="@/assets/hero.png" class="imgMobile"> 
    </div>

    <div class="textMobile1 sand">
        <div class="contactFrame">
          <p class="nadpis3">Recepce:</p>

          <p class="p2">pondělí – neděle 7:30 až 18:00</p>

          <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">

          <p class="nadpis3">Rezervace ubytování a restaurace:</p>

          <p class="p2"> +420 585 351 451 <br>
            recepce@hotel-zamek.cz
          </p>
        
          <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
          <p class="nadpis3">Ředitelka hotelu</p>

          <p class="p2"> Milada Vallášová Benčajová</p>

          <p class="p2"> +420 724 863 920</p>

          <p class="p2">reditel@hotel-zamek.cz</p>
        </div>
      </div> 
        <!--////////////////////////////////////////////////////////////////////////////////////////////////////////--> 
  </section>
</template>
  
<script>
export default {
  name: 'ContentTemplate1',
  mounted() {
    // Add event listener for Vue Router's afterEach hook
    this.$router.afterEach((to) => { // Removed unused 'from' parameter
      // Check if the destination route is '/accomodation' and has a hash
      if (to.path === '/accomodation' && to.hash === '#reservation-form') {
        // Call scrollToReservationForm after a short delay to ensure that the component is mounted and rendered
        setTimeout(() => {
          this.scrollToReservationForm();
        }, 100); // Adjust the delay as needed
      }
    });
  },
  methods: {
    scrollToReservationForm() {
      const reservationFormElement = document.getElementById('reservation-form');
      if (reservationFormElement) {
        const offsetTop = reservationFormElement.offsetTop;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  }
};
</script>
  
<style scoped>

</style>

