<template>
  <div class="FormFrame" id="reservation-form">

    <div class="spacer3vh"></div>
      
      <p class="nadpis2">Rezervační formulář</p>

      <img class="line2" src="@/assets/svg/zámecké ornamenty-03.svg">
      <div class="spacer3vh"></div>
      <div class="Inputzframe">

          <p class="">Jméno a příjmení:</p>
          <input id="nameInput" type="text" placeholder="Vyplňte prosím">
          
          <p class="">Váš email:</p>
          <input id="emailInput" type="text" placeholder="Vyplňte prosím">

          <p class="">Váš telefon:</p>
          <input id="phoneInput" type="text" placeholder="Vyplňte prosím">

          <p class="">Váše rezervace a požadavky:</p>
          <textarea id="reservationInput" placeholder="Vaše rezervace a datum zde"></textarea>

          <button class="buttonSand">Odeslat</button>

      </div>
  </div>
</template>

<script>

</script>




<style>
.line2{
    width: 400px;
}

.FormFrame{
    width: 100%;
    background-color: #CCD4E9;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding-bottom: 50px;
    margin-bottom: 0px;
}
.Inputzframe{
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
}


input {
  font-family: karma;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 0px;
}

input[type="text"] {
  width: 100%;
  height: 40px;
  outline: none;
}


::placeholder {
  color: #aaa;
}


input[type="text"]:focus {
  border-color: #FFFDF9; 
  box-shadow: 0 0 5px #c14e1d80; 
}

textarea {
  font-family: karma;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 0px;
  resize: vertical; 
}


textarea {
  width: 100%;
  min-height: 120px; 
  outline: none;
}


textarea::placeholder {
  color: #aaa;
}

textarea:focus {
  border-color: #FFFDF9; 
  box-shadow: 0 0 5px #c14e1d80; 
}

@media only screen and (max-width: 700px){
 
  .FormFrame{
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  
  .Inputzframe{
    width: 90%;

  }
}

</style>