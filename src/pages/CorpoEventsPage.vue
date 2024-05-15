<template>
  <SubPageHeader/>
  <HeaderNavigation />
  <div class="heroFrame">
    <img class="heroImg" src="@/assets/firemníakce.jpg">
  </div>
  
    <div class="txtframe1000">
      <p class="p2">
        Část přízemí, a celé první patro zámeckých prostor, nabízí sály, salonky a prostornou terasu pro pořádání firemních akcí od konferencí, školení, divadelních představení, koncertů, přes společenské akce s bohatým programem či plesy. Využít lze rovněž přilehlý venkovní amfiteátr, zámecký park a zámecké nádvoří.
        <br><br>
        Celková kapacita při využití všech zámeckých sálů je až 350 osob.
        <br><br>
        K dispozici je audiovizuální vybavení (dataprojektor, plátno, ozvučení), podle požadavků je možné zajistit i nadstandardní audiovizuální vybavení prostor. Wi-Fi je v celém objektu zdarma.
        <br><br>
        Nabízíme kompletní organizaci akce od cateringového zajištění (coffee breaky, servis jídel, rauty, koktejly, apod.) až po zajištění programu (moderátor, hudební produkce, DJ apod.).
      </p>
  </div>
  <ContentTemplateCorpo />


  <GalleryModule/>
  <EventContact />
  <FooterModule />
</template>

<script>
  import SubPageHeader from '@/components/SubPageHeader.vue'
  import HeaderNavigation from '@/components/HeaderNavigation.vue'
  import ContentTemplateCorpo from '@/components/ContentTemplateCorpo.vue';
  import GalleryModule from '@/components/GalleryModule.vue';
  import EventContact from '@/components/EventContact.vue';

  import FooterModule from '@/components/FooterModule.vue';


export default {
  name: 'CorpoEventsPage',
  mounted() {
      document.title = 'Ubytování na Zámku'; // Set the page title dynamically
  },
  components: {
    SubPageHeader,
    HeaderNavigation,
    ContentTemplateCorpo,
    GalleryModule,
    EventContact,
    FooterModule
  }
}


</script>
  
<style>
 
</style>
  