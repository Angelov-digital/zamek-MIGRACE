<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style src="./assets/global.css" />
<style>
#app{
  margin: 0px;
  min-width: 100%;
}
</style>


<!-- App.vue 
<template>
  <div id="app">
    <HeaderNavigation />
    <FrontPageContent />
    <ContentTemplate1 />
    <GalleryModule />
    <FrontSectionRezervace />
    <FooterModule />
   
  </div>
</template>

<script>
import HeaderNavigation from './components/HeaderNavigation.vue'
import FrontPageContent from './components/FrontPageContent.vue';
import ContentTemplate1 from './components/ContentTemplate1.vue';
import GalleryModule from './components/GalleryModule.vue';
import FrontSectionRezervace from './components/FrontSectionRezervace.vue';
import FooterModule from './components/FooterModule.vue';


export default {
  name: 'App',
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


<style src="./assets/global.css" />

<style>
  @import 'bootstrap/dist/css/bootstrap.min.css';
</style>

./components/FrontSectionRezervace.vue

-->