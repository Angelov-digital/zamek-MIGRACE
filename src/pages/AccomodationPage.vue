<template>
    <SubPageHeader/>
    <HeaderNavigation />
    <div class="videoframe">
      <video class="video" autoplay loop muted>
        <source src="@/assets/video/pokoj.mp4" type="video/mp4">   
      </video>
    </div>
    <div class="txtframe1000">
      <p class="p2">
        Hotel Zámek Velká Bystřice nabízí ubytování v 18 standardních pokojích a 2 apartmánech, které jsou umístěny ve 2. patře zámecké budovy. Hostům je k dispozici výtah, jeden pokoj je plně bezbariérový.
        Dětská postýlka je k dispozici na vyžádání. Ubytování Vašich domácích mazlíčků je po dohodě rovněž možné.
        V ceně ubytování je snídaně. Wi-Fi je v celém objektu zdarma. Za příplatek je možné využít kancelářské služby. K dispozici je veřejné parkoviště s 58 místy.
      </p>
    </div>
    <ContentTemplateAccomodation />

  

    <ReservationForm />
    <FooterModule />
  </template>
  
  <script>
    import SubPageHeader from '@/components/SubPageHeader.vue'
    import HeaderNavigation from '@/components/HeaderNavigation.vue'
    import ContentTemplateAccomodation from '@/components/ContentTemplateAccomodation.vue';
   
    import ReservationForm from '@/components/ReservationForm.vue';
    import FooterModule from '@/components/FooterModule.vue';
  
  
  export default {
    name: 'AccomodationPage',
    mounted() {
        document.title = 'Ubytování na Zámku'; // Set the page title dynamically
    },
    components: {
      SubPageHeader,
      HeaderNavigation,
      ContentTemplateAccomodation,
      ReservationForm,
      FooterModule
    }
  }


  </script>
  
  <style>
  .buttonFrame{
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .txtframeUbytovani{
    margin-top: 30px;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (max-width: 700px){
    .txtframeUbytovani{
    margin-top: 30px;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  }
  
  </style>
  