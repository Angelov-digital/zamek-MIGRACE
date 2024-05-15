<template>
  <SubPageHeader/>
  <HeaderNavigation />
  <div class="videoframe">
    <video class="video" autoplay loop muted>
      <source src="@/assets/video/svatbavideo.mp4" type="video/mp4">   
    </video>
  </div>
  <div class="txtframe1">
    <p class="nadpis4 center"> Chystáte se vkročit do manželství nebo chystáte oslavu pro rodinu a přátele?</p>
    <p class="nadpis4 center">A přejete si prožít slavnostní chvíle bez starostí?</p>
      <p class="nadpis4 center">Jste na správném místě!</p>
    </div>
    <div class="txtframe1000">
    <p class="p2">
      Hotel Zámek Velká Bystřice nabízí zařízení veškerého slavnostního  dění pod jednou střechou. Svěřte se do našich rukou a my Vám zajistíme vše od výzdoby slavnostní tabule až po klidný spánek po stráveném slavnostním dnu.

      Rozsáhlé variabilní prostory našich sálů, terasa, kvalitní jídla připravená podle Vašeho přání, široký sortiment nápojů, útulné pokoje a individuální přístup oceňují všichni naši zákazníci.

      Kontaktujte nás již dnes a přijďte se přesvědčit osobně.

    </p>
  </div>
  <ContentTemplateWedding />


  <GalleryModule/>
  <EventContact />
  <FooterModule />
</template>

<script>
  import SubPageHeader from '@/components/SubPageHeader.vue'
  import HeaderNavigation from '@/components/HeaderNavigation.vue'
  import ContentTemplateWedding from '@/components/ContentTemplateWedding.vue';
  import GalleryModule from '@/components/GalleryModule.vue';
  import EventContact from '@/components/EventContact.vue';

  import FooterModule from '@/components/FooterModule.vue';


export default {
  name: 'AccomodationPage',
  mounted() {
      document.title = 'Ubytování na Zámku'; // Set the page title dynamically
  },
  components: {
    SubPageHeader,
    HeaderNavigation,
    ContentTemplateWedding,
    GalleryModule,
    EventContact,
    FooterModule
  }
}


</script>
  
<style>
 
</style>
  