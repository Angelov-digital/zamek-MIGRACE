<!-- HeaderNavigation.vue -->
<template>

<nav class="HeadNav">
    <div class="linkbutton">
        <router-link class="nav-link1" to="/contact">Kontakt</router-link>
    </div>
    <div class="linkbutton">
        <router-link class="nav-link1" to="/accomodation">Ubytování</router-link>
    </div>
    <div class="linkbutton">
        <router-link class="nav-link1" to="/restaurant">Restaurace</router-link>
    </div>
    <div class="linkbutton">
        <router-link class="nav-link1" to="/events">Svatby a události</router-link>
    </div>
    <div class="linkbutton">
        <router-link class="nav-link1" to="/corpoevents">Firemní akce</router-link>
    </div>
    <div class="linkbutton">
        <router-link class="nav-link1" :to="{ path: '/accomodation', hash: '#reservation-form' }">Rezervace</router-link>
    </div>
    <div class="linkbutton">
        <router-link class="nav-link1" to="/prostory">Prostory</router-link>
    </div>
</nav>


<!-- MOBILE AVIGATION --> 
<div id="navmobile">
        <div id="menuToggle">

            <input type="checkbox"/>
            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
           
                  
              <router-link class="nav-linkMob" to="/contact">Kontakt</router-link>
          
          
              <router-link class="nav-linkMob" to="/accomodation">Ubytování</router-link>
          
          
              <router-link class="nav-linkMob" to="/restaurant">Restaurace</router-link>
        
          
              <router-link class="nav-linkMob" to="/events">Svatby a události</router-link>
        

              <router-link class="nav-linkMob" to="/corpoevents">Firemní akce</router-link>


              <router-link class="nav-linkMob" :to="{ path: '/accomodation', hash: '#reservation-form' }">Rezervace</router-link>
        
        
              <router-link class="nav-linkMob" to="/prostory">Prostory</router-link>
        
      
            </ul>
        </div>
    </div>

</template>
  

<script>
export default {
  name: 'HeaderNavigation',
  mounted() {
    
    this.$router.afterEach((to) => { 
      
      if (to.path === '/accomodation' && to.hash === '#reservation-form') {
        
        setTimeout(() => {
          this.scrollToReservationForm();
        }, 100); 
      }
    });
  },
  methods: {
    scrollToReservationForm() {
      const reservationFormElement = document.getElementById('reservation-form');
      if (reservationFormElement) {
        const offsetTop = reservationFormElement.offsetTop;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  }
};
</script>



  
<style scoped>

.HeadNav {
    position: sticky;
    top: 0;
    z-index: 1000;
}
.HeadNav{
    font-family: Karma;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100px;
    background-color: #fffaf0ee;
    color: #171B24;
    outline: 1px #827867 solid;
}
.linkbutton{
  margin-left: 10px;
  margin-right: 10px;
}
.nav-link1{
  background-color: #FFF1D8;
  color: #171B24;
  padding: 1px;
  padding-top: 5px;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  border-radius: 0px;  
  transition: background-color 0.3s ease;
  outline: solid 1px #171b2469;
}
.nav-linkMob{
  text-decoration: none;
  font-size: 1.5rem;
  color: #0c091b;

}
.nav-link1:hover {
  background-color: #c14e1d;
  color: #ffffff;
}
/*Mobile nav styling*/
#navmobile{
  display: none;
  width: 100%;
  height: 70px;
  z-index: 999999;
  background-color: #fffaf0ee;
  position: sticky;
  top: 0;
  outline: solid 1px #171b2469;

}

#menuToggle {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 25px;
  left: 25px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
  width: 50%;
}

#menuToggle input
{
  display: flex;
  width: 40px;
  height: 32px;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
}

#menuToggle span
{
  display: flex;
  width: 29px;
  height: 2px;
  margin-bottom: 5px;
  position: relative;
  background: #0c091b;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 5px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-3px, -1px);
  background: #36383F;
}
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

#menu
{
  position: absolute;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  text-align: center;
  width: 180px;
  height: 450px;
  box-shadow: 0 0 10px #020203;
  margin: -50px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  background: #fffaf0;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  
}

#menu p{
  margin-top: 30px; 
  font-family: karma;
  font-size: 1.5rem;
  transition-delay: 2s;
   color: #171B24;
  }
#menu a {
  text-decoration: none;
  
}
#menuToggle input:checked ~ ul
{
  transform: none;
}
@media only screen and (max-width: 1000px) {
  .HeadNav{
      display: none;
  }
  #navmobile{
      display: block;
  }
  
  
}
</style>
  