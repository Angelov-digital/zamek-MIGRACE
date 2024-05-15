<template>
  <div class="SubPageFrame">
    <div class="SubNadpisFrame">
      <p class="nadpis1">{{ pageTitle }}</p>
    </div>

    <div class="logoLeftFrame">
      <router-link class="rlink" to="./">
        <img src="@/assets/logoBystrice.png" alt="Logo" class="logo2">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubPageHeader',
  data() {
    return {
      pageTitle: '' // Default page title
    };
  },
  created() {
    // Assuming you are using vue-router, you can dynamically update the pageTitle based on the current route
    this.updatePageTitle();
  },
  methods: {
    updatePageTitle() {
      // Access the current route's meta or any other property where you store the page title
      const pageTitle = this.$route.meta.title; // Adjust this based on how you manage your page titles in your routes
      if (pageTitle) {
        this.pageTitle = pageTitle;
      }
    }
  }
};
</script>
  
  <style scoped>
   .logo2 {
      margin: auto;
      max-width: 180px;
    }
  .nadpis1 {
    margin: 30px;
  }
  
  .SubPageFrame {
    height: 130px;
    width: 100%;
    text-align: center;
  }
  
  .logoLeftFrame {
    display: flex;
    position: relative;
    top: 10px;
    left: 40px;
    width: 200px;
    align-items: flex-start;
  }
  
  .SubNadpisFrame {
    position: absolute;
    width: 100%;
    text-align: center;
  }
  @media only screen and (max-width: 1000px){
    .logo2 {
      max-width: 100%;
    }
    .logoLeftFrame {
      text-align: center;
      max-width: 15%;
      top: 25px;
      left: 25px;
    }
  }
  @media only screen and (max-width: 700px) {
    .rlink{
        width: 100%;
    }
    .SubPageFrame {
      display: flex;
      flex-direction: column;
      height: 20vh;
      align-items: center;
      justify-content: center;
    }
  
    .logoLeftFrame {
      text-align: center;
      min-width: 100%;
      max-width: 100%;

      top: 0;
      left: 0;
    }
  
    .SubNadpisFrame {
      position: relative;
    }
  
    .logo2 {
      margin: auto;
      max-width: 140px;
    }
  
    .nadpis1 {
      margin: 0;
    }
  }
  </style>
  