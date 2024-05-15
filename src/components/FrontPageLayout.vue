<template>
    
    <HeaderNavigation />
      <FrontPageContent />
      <ContentTemplate1 />
      <GalleryModule />
      <FrontSectionRezervace />
      <FooterModule />
    
  </template>
  
  <script>
  import HeaderNavigation from './HeaderNavigation.vue'
  import FrontPageContent from './FrontPageContent.vue';
  import ContentTemplate1 from './ContentTemplate1.vue';
  import GalleryModule from './GalleryModule.vue';
  import FrontSectionRezervace from './FrontSectionRezervace.vue';
  import FooterModule from './FooterModule.vue';
  
  export default {
    name: 'FrontPageLayout',
    components: {
      HeaderNavigation,
      FrontPageContent,
      ContentTemplate1,
      GalleryModule,
      FrontSectionRezervace,
      FooterModule
    }
  }
  </script>
  
  <style>
  /* Add styles specific to the FrontPageLayout if needed */
  </style>
  ./FrontPageWelcome.vue