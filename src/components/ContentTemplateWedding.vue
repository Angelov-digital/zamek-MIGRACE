<template>

  <section class="desktop">

    <div class="cont1 ">
      
      <div class="flex-item">
        
        <div class="flex-item">
          <img src="@/assets/svatba.jpg" class="contImg">
        </div>
      </div>

      <div class="flex-item">
        <div class="popis1">
          <div>
            <p class="nadpis2">Svatby</p>
            <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
          </div>
          <p class="p2">
      
          Lorem ipsum

          </p>
          <div class="buttonframe">
            <button class="buttonBlue" @click="scrollToContactCard">Kontaktujte nás</button>
          </div>
        </div> 
      </div>

      
      <div class="trapezoid"></div>
    
    </div>
<!--////////////////////////////////////////////////////////////////////////////////////////////////////////-->
    <div class="cont2"> 

      <div class="flex-item">
        <div class="popis1 left blýn">
          <div>
            <p class="nadpis2">Soukromé oslavy</p>
            <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
          </div>
          <p class="p2">
            Lorem ipsum
          </p>
          <div class="buttonframe">
            <button class="buttonBlue" @click="scrollToContactCard">Kontaktujte nás</button>
          </div>
        </div> 
      </div>

      <div class="trapezoid2"></div>

      <img src="@/assets/oslava.jpg" class="contImgb">

    </div>
<!--////////////////////////////////////////////////////////////////////////////////////////////////////////-->
  <div class="cont3">

    <div class="flex-item">
      <img src="@/assets/ples.jpg" class="contImg">
    </div>

    <div class="flex-item">
      <div class="popis1 cyan">
        <div>
          <p class="nadpis2">Plesy</p>
          <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
        </div>
        <p class="p2">loremipsum
        </p>
        <div class="buttonframe">
          <button class="buttonSand" @click="scrollToContactCard">Kontaktujte nás</button>
        </div>
      </div> 
    </div>
    <div class="trapezoidSky"></div> 
  </div>

  </section>

  <section class="mobile">
<!--////////////////////////////////////////////////////////////////////////////////////////////////////////-->
    <div class="imgContainer">
      <img src="@/assets/svatba.jpg" class="imgMobile"> 
    </div>

    <div class="textMobile1 sand">
      <div>
        <p class="nadpis2">Svatby</p>
        <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
      </div>
      <p class="p2">
      Lorem ipsum
      </p>

      <div class="buttonframe">
        <button class="buttonBlue" @click="scrollToContactCard">Kontaktujte nás</button>
      </div>
     
    </div>
<!--////////////////////////////////////////////////////////////////////////////////////////////////////////-->
    <div class="imgContainer">
      <img src="@/assets/oslava.jpg" class="imgMobile"> 
    </div>

    <div class="textMobile1 green">

      <div>
        <p class="nadpis2">Soukromé oslavy</p>
        <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
      </div>
      <p class="p2">
        Lorem ipsum
      </p>
      <div class="buttonframe">
        <button class="buttonBlue" @click="scrollToContactCard">Kontaktujte nás</button>
      </div>
    </div>  
<!--////////////////////////////////////////////////////////////////////////////////////////////////////////-->
    <div class="imgContainer">
      <img src="@/assets/ples.jpg" class="imgMobile"> 
    </div>

    <div class="textMobile1 sky">

      <div>
        <p class="nadpis2">Plesy</p>
        <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
      </div>
      <p class="p2">
        Lorem ipsum
      </p>
      <div class="buttonframe">
        <button class="buttonSand" @click="scrollToContactCard">Kontaktujte nás</button>
      </div>
    </div>  

  </section>

</template>
  
<script>
export default {
  name: 'ContentTemplateWedding',
  methods: {
    scrollToContactCard() {
      const contactCard = document.getElementById('contact-card');
      if (contactCard) {
        contactCard.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>


  
<style scoped>

</style>
