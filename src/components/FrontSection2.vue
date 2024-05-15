<template>

    <div class="galFrame">
        <hr>
        <h1>Gallerie</h1>
        <hr>
    </div>

    <div class="galleryFrame">
        
    </div>    
</template>
  
<script>
  export default {
    name: 'GalleryModule'
  };
</script>
  
<style scoped>
    .galFrame{
        display: grid;
        grid-template-columns: 2fr 1fr 2fr;
        position: relative;
        z-index: 3;
        margin-top: 35vh;
        justify-content: center;
        align-items: center;
    }
    .galleryFrame{
        position: relative;
        margin-top: 3vh;
        width: 100%;
        height: 70vh;
        background-color: #EFEBEB;
    }
</style>
  