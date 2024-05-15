<template>
  <SubPageHeader/>
  <HeaderNavigation />
  <div class="videoframe">
    <video class="video" autoplay loop muted>
      <source src="@/assets/video/restaurace.mp4" type="video/mp4">   
    </video>
  </div>
  <div class="txtframe1000">
    <p class="p2">Hotel Zámek Velká Bystřice nabízí prostornou restauraci s venkovní zahrádkou a privátní salonek. Pro větší společnosti nabízíme i 3 sály – Malý sál, Divadelní sál s pódiem a velký Společenský sál.</p>
  </div>
  <ContentTemplateRestaurant />
  <div class="RestauraceInfoFrame">
    <p class="p2">Zámecká restaurace je aktuálně otevřena každý den od 10:00 do 20:00. 
    <br>Pro soukromé akce nad 15 osob je upravena otevírací doba dle dohody a potřeb. 
    <br>
    <br>Rezervace na telefonu:
    <br> +420 585 351 451</p>
  </div>
  <GalleryModule />
  <FooterModule />

</template>
  
<script>
   import SubPageHeader from '@/components/SubPageHeader.vue'
    import HeaderNavigation from '@/components/HeaderNavigation.vue'
    import ContentTemplateRestaurant from '@/components/ContentTemplateRestaurant.vue';

    import GalleryModule from '@/components/GalleryModule.vue';

    import FooterModule from '@/components/FooterModule.vue';
  
  export default {
    name: 'ContactPage',
    components: {
      SubPageHeader,
      HeaderNavigation,
      ContentTemplateRestaurant,
      GalleryModule,
      FooterModule
    }
  }
</script>

<style>
.RestauraceInfoFrame p{
  background-color: #232d3e ;
  color: aliceblue;
  text-align: center;
  margin: 0;
  padding: 1.2rem;
}
</style>
  