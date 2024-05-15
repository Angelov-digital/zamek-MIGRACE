<template>
      <HeaderNavigation />
      <FrontPageWelcome />
      <ContentTemplate1 />
      <GalleryModule />
      <FrontSectionRezervace />
      <FooterModule />
  </template>
  
  <script>
  import HeaderNavigation from '@/components/HeaderNavigation.vue'
  import FrontPageWelcome from '@/components/FrontPageWelcome.vue';
  import ContentTemplate1 from '@/components/ContentTemplate1.vue';
  import GalleryModule from '@/components/GalleryModule.vue';
  import FrontSectionRezervace from '@/components/FrontSectionRezervace.vue';
  import FooterModule from '@/components/FooterModule.vue';
  
  export default {
    name: 'FrontPage',
    components: {
      HeaderNavigation,
      FrontPageWelcome,
      ContentTemplate1,
      GalleryModule,
      FrontSectionRezervace,
      FooterModule
    }
  }
  </script>

  
  <style>
  
  </style>
  