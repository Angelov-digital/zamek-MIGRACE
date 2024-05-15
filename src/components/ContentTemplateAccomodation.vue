<template>

  <section class="desktop">

    <div class="cont1 ">
      
      <div class="flex-item">
        
        <div class="flex-item">
          <img src="@/assets/pokoj.jpg" class="contImg">
        </div>
      </div>

      <div class="flex-item">
        <div class="popis1">
          <div>
            <p class="nadpis2">Jednolůžkový pokoj (kaple)</p>
            <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
          </div>
          <p class="p2">
      
            Cena za 1 noc<br>
            Neděle – čtvrtek		1.600 Kč<br>
            Pátek – sobota		1.700 Kč<br>
            <br> loremipsum k pokoji - něco co to lépe prodá ...

          </p>
          <div class="buttonframe">
            <button class="buttonBlue" @click="scrollToReservationForm">Rezervovat</button>
          </div>
        </div> 
      </div>

      
      <div class="trapezoid"></div>
    
    </div>

    <div class="cont2"> 

      <div class="flex-item">
        <div class="popis1 left blýn">
          <div>
            <p class="nadpis2">Apartmá</p>
            <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
          </div>
          <p class="p2">

            Apartmán – dvoupostel v ložnici, rozkládací pohovka v obývací části <br>

            Cena za 1 noc<br>
            Neděle – čtvrtek (2 osoby)	3.700 Kč<br>
            Pátek – sobota (2 osoby)	4.000 Kč<br>

            Každá osoba navíc 		   900 Kč<br>
            (max. 1 dospělý nebo 2 děti do 10 let) <br>
          </p>
          <div class="buttonframe">
            <button class="buttonBlue" @click="scrollToReservationForm">Rezervovat</button>
          </div>
        </div> 
      </div>

      <div class="trapezoid2"></div>

      <img src="@/assets/pokoj.jpg" class="contImgb">

    </div>

    <div class="cont3">

      <div class="flex-item">
        <img src="@/assets/pokoj.jpg" class="contImg">
      </div>

      <div class="flex-item">
        <div class="popis1 cyan">
          <div>
            <p class="nadpis2">Dvoulůžkový pokoj standard <br> dvě postele</p>
            <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
          </div>
          <p class="p2">Cena za 1 noc<br>
            Neděle – čtvrtek		1.900 Kč<br>
            Pátek – sobota		2.000 Kč
          </p>
          <div class="buttonframe">
            <button class="buttonGreen" @click="scrollToReservationForm">Rezervovat</button>
          </div>
        </div> 
      </div>
      <div class="trapezoidSky"></div> 
    </div>

    <div class="cont2"> 

      <div class="flex-item">
        <div class="popis1 left blýn">
          <div>
            <p class="nadpis2">Dvoulůžkový pokoj standard <br>dvoupostel</p>
            <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
          </div>
          <p class="p2">
            Cena za 1 noc<br>
            Neděle – čtvrtek		1.900 Kč<br>
            Pátek – sobota		2.000 Kč

          </p>
          <div class="buttonframe">
            <button class="buttonBlue" @click="scrollToReservationForm">Rezervovat</button>
          </div>
        </div> 
      </div>

      <div class="trapezoid2"></div>

      <img src="@/assets/pokoj.jpg" class="contImgb">
    </div>

    <div class="cont2 ">
      
      <div class="flex-item">
        
        <div class="flex-item">
          <img src="@/assets/pokoj.jpg" class="contImg">
        </div>
      </div>

      <div class="flex-item">
        <div class="popis1">
          <div>
            <p class="nadpis2">Dvoulůžkový pokoj Superior <br> dvě postele, bohatý minibar zdarma</p>
            <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
          </div>
          <p class="p2">
            Cena za 1 noc  <br>
            Neděle – čtvrtek		2.500 Kč<br>
            Pátek – sobota		2.500 Kč
          </p>
          <div class="buttonframe">
            <button class="buttonSand" @click="scrollToReservationForm">Rezervovat</button>
          </div>
        </div> 
      </div>

      
      <div class="trapezoid"></div>
    
    </div>

  </section>

  <section class="mobile">
<!--////////////////////////////////////////////////////////////////////////////////////////////////////////-->
    <div class="imgContainer">
      <img src="@/assets/pokoj.jpg" class="imgMobile"> 
    </div>

    <div class="textMobile1 sand">
      <div>
        <p class="nadpis2">Jednolůžkový pokoj (kaple)</p>
        <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
      </div>
      <p class="p2">
      
        Cena za 1 noc<br>
        Neděle – čtvrtek		1.600 Kč<br>
        Pátek – sobota		1.700 Kč<br>
        <br> loremipsum k pokoji - něco co to lépe prodá ...

      </p>

      <div class="buttonframe">
        <button class="buttonBlue" @click="scrollToReservationForm">Rezervovat</button>
      </div>
     
    </div>

    <div class="imgContainer">
      <img src="@/assets/pokoj.jpg" class="imgMobile"> 
    </div>
<!--////////////////////////////////////////////////////////////////////////////////////////////////////////-->
    <div class="textMobile1 green">

      <div>
        <p class="nadpis2">Apartmá</p>
        <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
      </div>
      <p class="p2">

        Apartmán – dvoupostel v ložnici, rozkládací pohovka v obývací části <br>

        Cena za 1 noc<br>
        Neděle – čtvrtek (2 osoby)	3.700 Kč<br>
        Pátek – sobota (2 osoby)	4.000 Kč<br>

        Každá osoba navíc 		   900 Kč<br>
        (max. 1 dospělý nebo 2 děti do 10 let) <br>
      </p>
      <div class="buttonframe">
        <button class="buttonBlue" @click="scrollToReservationForm">Rezervovat</button>
      </div>
    </div>  
<!--////////////////////////////////////////////////////////////////////////////////////////////////////////-->
    <div class="imgContainer">
      <img src="@/assets/pokoj.jpg" class="imgMobile"> 
    </div>

    <div class="textMobile1 sky">
      <div>
        <p class="nadpis2">Dvoulůžkový pokoj standard <br> dvě postele</p>
        <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
      </div>
      <p class="p2">Cena za 1 noc<br>
        Neděle – čtvrtek		1.900 Kč<br>
        Pátek – sobota		2.000 Kč
      </p>
      <div class="buttonframe">
        <button class="buttonSand" @click="scrollToReservationForm">Rezervovat</button>
      </div>
    </div>
    
<!--////////////////////////////////////////////////////////////////////////////////////////////////////////-->
    <div class="imgContainer">
      <img src="@/assets/pokoj.jpg" class="imgMobile"> 
    </div>

    <div class="textMobile1 sand">
      <div>
        <p class="nadpis2">Dvoulůžkový pokoj standard <br>dvoupostel</p>
        <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
      </div>
      <p class="p2">
        Cena za 1 noc<br>
        Neděle – čtvrtek		1.900 Kč<br>
        Pátek – sobota		2.000 Kč
      </p>
      <div class="buttonframe">
        <button class="buttonBlue" @click="scrollToReservationForm">Rezervovat</button>
      </div>
    </div>
<!--////////////////////////////////////////////////////////////////////////////////////////////////////////-->
    <div class="imgContainer">
      <img src="@/assets/pokoj.jpg" class="imgMobile"> 
    </div>

    <div class="textMobile1 green">
      <div>
        <p class="nadpis2">Dvoulůžkový pokoj Superior <br>
          dvě postele,<br> bohatý minibar zdarma</p>
        <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
      </div>
      <p class="p2">
        Cena za 1 noc<br>
        Neděle – čtvrtek		2500 Kč<br>
        Pátek – sobota		2500 Kč
      </p>
      <div class="buttonframe">
        <button class="buttonBlue" @click="scrollToReservationForm">Rezervovat</button>
      </div>
    </div>
  </section>

</template>
  
<script>
export default {
  name: 'ContentTemplateAccomodation',
  methods: {
    scrollToReservationForm() {
      const reservationFormElement = document.getElementById('reservation-form');
      if (reservationFormElement) {
        this.scrollTo(reservationFormElement, 1000); // Adjust duration as needed (in milliseconds)
      }
    },
    scrollTo(element, duration) {
      const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      const start = window.pageYOffset || document.documentElement.scrollTop;
      const to = element.offsetTop;
      const startTimestamp = performance.now();
      const scroll = (timestamp) => {
        const elapsed = timestamp - startTimestamp;
        window.scrollTo(0, start + (to - start) * easeInOutQuad(Math.min(elapsed / duration, 1)));
        if (elapsed < duration) {
          window.requestAnimationFrame(scroll);
        }
      };
      window.requestAnimationFrame(scroll);
    }
  }
};
</script>


  
<style scoped>

</style>