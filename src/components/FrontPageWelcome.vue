<template>
    <div class="front-page-content">
        <div class="logoFrame">
            <img class="line1" src="@/assets/svg/zámecké ornamenty-04.svg">
            <div class="logoCenter">
                <img src="@/assets/logoBystrice.png" alt="Logo" class="logo">
            </div>
            <img class="line1" src="@/assets/svg/zámecké ornamenty-02.svg">    
        </div>
        <div class="herovideoframe">
            <video class="herovideo" autoplay loop muted>
                <source src="@/assets/video/herocastle.mp4" type="video/mp4">   
            </video>
        </div>
    </div>
     <!--<div class="center">
      <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
    </div>--> 
    <p class="nadpis1 margin1rem">Vítejte v hotelu</p>
    <div class="welcome">
        <img class="line1" src="@/assets/svg/zámecké ornamenty-04.svg">
        <p class="nadpis1 margin1rem">Zámek Velká Bystřice</p>
        <img class="line1" src="@/assets/svg/zámecké ornamenty-02.svg">
    </div>
    <div class="subWelcomeFrame">
        <p class="subwelcome">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer  lacinia. Integer pellentesque quam vel velit. Mauris dolor felis,  sagittis at, luctus sed, aliquam non, tellus. Maecenas aliquet accumsan  leo. Integer rutrum.</p>
    </div>
</template>
  
<script>
  export default {
    name: 'FrontPageWelcome'
  };
</script>
  
<style scoped>
h1{
    position: relative;
    text-align: center;
    margin-top: 1vh;
}
p{
   text-align: center; 
}
.logoFrame{
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    display: flex;
}
.logoFrame hr{
    margin: 30px;
}

.welcome{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 0px;
 
}
.subWelcomeFrame{
    max-width: 600px;
    min-width: 200px;
    padding-left: 30px;
    padding-right: 30px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
}
.subwelcome{
    margin-bottom: 100px;
}
.herovideoframe {
    margin-top: 10px;
    display: flex; 
    justify-content: center; 
    align-items: center;
    width: 100%;
    max-height: 65vh; 
    overflow: hidden; 
  }

  .herovideo {
    width: 100%;
    height: 100%; 
    object-fit: cover; 
  }
  @media only screen and (max-width: 700px){
    .herovideoframe{
      max-height: 60vh;
      
    }
    .herovideo {
    min-height: 60vh; 

  }
  }
</style>
  