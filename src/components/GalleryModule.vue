<template>

    <div class="galFrame">
        <img class="line1" src="@/assets/svg/zámecké ornamenty-04.svg">
        <p class="nadpis1">Galerie</p>
        <img class="line1" src="@/assets/svg/zámecké ornamenty-02.svg">
    </div>

    <div class="galleryFrame">
        <div class="galImg">
            <img src="@/assets/image4.jpg" class="" id="">
        </div>
        <div class="galImg">
            <img src="@/assets/image4.jpg" class="" id="">
        </div>
        <div class="galImg">
            <img src="@/assets/image4.jpg" class="" id="">
        </div>
        <div class="galImg">
            <img src="@/assets/image4.jpg" class="" id="">
        </div>
        <div class="galImg">
            <img src="@/assets/image4.jpg" class="" id="">
        </div>
        <div class="galImg">
            <img src="@/assets/image4.jpg" class="" id="">
        </div>
        
    </div>    
</template>
  
<script>
  export default {
    name: 'GalleryModule'
  };
</script>
  
<style scoped>
    .galFrame{
        display: flex;
      
        position: relative;
        z-index: 3;
        margin-top: 15vh;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .galleryFrame{
        position: relative;
        margin-top: 3vh;
        width: 100%;
        padding-bottom: 5vh;
        background-color: #EFEBEB;
        display: flex;
        flex-direction: row;
        overflow: hidden;
        justify-content:center ;
    }
    .galImg{
        max-height: 35vh;  
        width: 35vh;
        object-fit: cover;
        vertical-align: bottom;
        padding: 0px;
        cursor: pointer;
        margin: 8px;
        margin-top: 1rem;
    }
    .galImg img{
        max-height: 35vh;
        width: 35vh;
        object-fit: cover;
        vertical-align: top;
        padding: 0px;
        border-radius: 0px;
        box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
    }
</style>
  