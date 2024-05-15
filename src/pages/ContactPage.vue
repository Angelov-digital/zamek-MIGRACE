<template>
    <SubPageHeader/>
    <HeaderNavigation />
    <ContentTemplate2 />

    <div class="centeredFrame">
      <p class="nadpis2">Těšíme se na Vás!</p>
    </div>

    <FooterModule />

</template>
  
<script>
    import SubPageHeader from '@/components/SubPageHeader.vue'
    import HeaderNavigation from '@/components/HeaderNavigation.vue'
    import ContentTemplate2 from '@/components/ContentTemplate2.vue';
    import FooterModule from '@/components/FooterModule.vue';
  
  export default {
    name: 'ContactPage',
    components: {
      SubPageHeader,
      HeaderNavigation,
      ContentTemplate2,
      FooterModule
    }
  }
</script>
  
<style>
.centeredFrame{
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #eff0f3;
}
</style>
  