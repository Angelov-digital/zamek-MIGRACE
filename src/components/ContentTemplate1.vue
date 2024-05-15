<template>

  <section class="desktop">

    <div class="cont1">
      
      <div class="flex-item">
        <img src="@/assets/restaurace.jpg" class="contImg">
      </div>

      <div class="flex-item">
        <div class="popis1">
          <div>
            <p class="nadpis2">Restaurace</p>
            <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
          </div>
          <p class="p2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer  lacinia. Integer pellentesque quam vel velit. Mauris dolor felis,  sagittis at, luctus sed, aliquam non, tellus. Maecenas aliquet accumsan  leo. Integer rutrum.</p>
          <div class="buttonframe">
            <router-link to="/restaurant">
              <button class="buttonGreen">Další informace</button>
            </router-link>
          </div>
        </div> 
      </div>
      
      <div class="trapezoidSand"></div>
    
    </div>

    <div class="cont2"> 

      <div class="flex-item">
        <img src="@/assets/pokoj2.jpg" class="contImg">
      </div>


      <div class="flex-item">
        <div class="popis1 left blýn">
          <div>
            <p class="nadpis2">Pokoje a Apartmá</p>
            <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
          </div>
          <p class="p2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer  lacinia. Integer pellentesque quam vel velit. Mauris dolor felis,  sagittis at, luctus sed, aliquam non, tellus. Maecenas aliquet accumsan  leo. Integer rutrum.</p>
          <div class="buttonframe">
            <router-link to="/accomodation">
              <button class="buttonBlue">Další informace</button>
            </router-link>
          </div>
        </div> 
      </div>

      <div class="trapezoid2Green"></div>

      <img src="@/assets/pokoj2.jpg" class="contImgb">
    
    </div>

    <div class="cont3">

      <div class="flex-item">
        <img src="@/assets/svatba.jpg" class="contImg">
      </div>

      <div class="flex-item">
        <div class="popis1 cyan">
          <div>
            <p class="nadpis2">Svatby a Události</p>
            <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
          </div>
          <p class="p2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer  lacinia. Integer pellentesque quam vel velit. Mauris dolor felis,  sagittis at, luctus sed, aliquam non, tellus. Maecenas aliquet accumsan  leo. Integer rutrum.</p>
          <div class="buttonframe">
            <router-link to="/events">
              <button class="buttonSand">Další informace</button>
            </router-link>
          </div>
        </div> 
      </div>
 
      <div class="trapezoidSky"></div> 
    
    </div>
  </section>

  <section class="mobile">

    <div class="imgContainer">
      <img src="@/assets/restaurace.jpg" class="imgMobile">
    </div>

    <div class="textMobile1 sand">
      <div>
        <p class="nadpis2">Restaurace</p>
        <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
      </div>
      <p class="p2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer  lacinia. Integer pellentesque quam vel velit. Mauris dolor felis,  sagittis at, luctus sed, aliquam non, tellus. Maecenas aliquet accumsan  leo. Integer rutrum.</p>
      <div class="buttonframe">
        <router-link to="/restaurant">
          <button class="buttonSand">Další informace</button>
        </router-link>
      </div>
    </div>

    <div class="imgContainer">
      <img src="@/assets/pokoj2.jpg" class="imgMobile">
    </div>

    <div class="textMobile1 green">
      <div>
        <p class="nadpis2">Pokoje a Apartmá</p>
        <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
      </div>
      <p class="p2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer  lacinia. Integer pellentesque quam vel velit. Mauris dolor felis,  sagittis at, luctus sed, aliquam non, tellus. Maecenas aliquet accumsan  leo. Integer rutrum.</p>
      <div class="buttonframe">
        <router-link to="/accomodation">
          <button class="buttonSand">Další informace</button>
        </router-link>
      </div>
    </div>

    <div class="imgContainer">
      <img src="@/assets/svatba.jpg" class="imgMobile">
    </div>

    <div class="textMobile1 sky">
      <div>
            <p class="nadpis2">Svatby a Události</p>
            <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
          </div>
          <p class="p2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer  lacinia. Integer pellentesque quam vel velit. Mauris dolor felis,  sagittis at, luctus sed, aliquam non, tellus. Maecenas aliquet accumsan  leo. Integer rutrum.</p>
          <div class="buttonframe">
            <router-link to="/events">
              <button class="buttonSand">Další informace</button>
            </router-link>
          </div>
    </div>

  </section>
</template>
  
<script>
  export default {
    name: 'ContentTemplate1'
  };
</script>
  
<style scoped>

</style>